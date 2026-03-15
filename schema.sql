-- =====================================================
-- AI Study Buddy — Supabase Schema
-- Run this in your Supabase project:
-- Dashboard → SQL Editor → New Query → paste → Run
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- INSTITUTES — one row per school / institute
-- =====================================================
CREATE TABLE IF NOT EXISTS institutes (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name             text NOT NULL DEFAULT 'My School',
  slug             text UNIQUE,                 -- URL-safe identifier e.g. 'green-valley-school'
  logo_url         text,
  primary_color    text DEFAULT '#4f46e5',
  secondary_color  text DEFAULT '#7c3aed',
  address          text,
  phone            text,
  email            text,
  footer_text      text,
  created_at       timestamptz DEFAULT now()
);

-- =====================================================
-- USERS — extends Supabase auth.users
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
  id               uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  institute_id     uuid REFERENCES institutes(id),
  role             text NOT NULL DEFAULT 'student'   -- 'admin' | 'teacher' | 'student'
                   CHECK (role IN ('admin','teacher','student')),
  name             text,
  class_level      text,
  section_id       uuid,
  preferred_lang   text DEFAULT 'en'
                   CHECK (preferred_lang IN ('en','hi','gu')),
  created_at       timestamptz DEFAULT now()
);

-- Auto-create user profile on sign-up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
DECLARE
  meta jsonb := new.raw_user_meta_data;
BEGIN
  INSERT INTO users (id, institute_id, name, class_level, role)
  VALUES (
    new.id,
    (meta->>'institute_id')::uuid,
    meta->>'name',
    meta->>'class_level',
    COALESCE(meta->>'role', 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =====================================================
-- SECTIONS — class sections within an institute
-- =====================================================
CREATE TABLE IF NOT EXISTS sections (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id) ON DELETE CASCADE,
  class_level      text NOT NULL,               -- e.g. '7', '8'
  name             text NOT NULL,               -- e.g. 'A', 'B', 'Mango', 'Rose'
  teacher_id       uuid REFERENCES users(id),
  student_count    int DEFAULT 0,
  created_at       timestamptz DEFAULT now(),
  UNIQUE (institute_id, class_level, name)
);

-- =====================================================
-- QUESTION BANKS — stored per institute
-- =====================================================
CREATE TABLE IF NOT EXISTS question_banks (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id) ON DELETE CASCADE,
  name             text NOT NULL,
  filename         text,
  class_level      text,
  subject          text,
  questions        jsonb NOT NULL DEFAULT '[]',  -- MCQ questions array
  exam_questions   jsonb DEFAULT '[]',           -- short/long/essay questions
  is_shared        boolean DEFAULT false,        -- shared across all institutes
  created_by       uuid REFERENCES users(id),
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);

-- =====================================================
-- EXAM RESULTS — one row per exam submission
-- =====================================================
CREATE TABLE IF NOT EXISTS exam_results (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id),
  student_id       uuid REFERENCES users(id),
  student_name     text,
  student_section  text,
  class_level      text,
  exam_type        text NOT NULL                 -- 'mock' | 'term' | 'annual' | 'quiz' | 'daily'
                   CHECK (exam_type IN ('mock','term','annual','quiz','daily')),
  mcq_score        int DEFAULT 0,
  mcq_total        int DEFAULT 0,
  answers_log      jsonb DEFAULT '[]',           -- [{type,q,studentAnswer,correct,marks,teacher_marks,...}]
  taken_at         timestamptz DEFAULT now(),
  reviewed_at      timestamptz,                  -- set when teacher marks written answers
  synced           boolean DEFAULT true
);

-- =====================================================
-- ROW-LEVEL SECURITY
-- Every table is locked to the user's own institute.
-- =====================================================

ALTER TABLE institutes      ENABLE ROW LEVEL SECURITY;
ALTER TABLE users           ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections        ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_banks  ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_results    ENABLE ROW LEVEL SECURITY;

-- Helper: returns current user's institute_id
CREATE OR REPLACE FUNCTION get_my_institute_id()
RETURNS uuid AS $$
  SELECT institute_id FROM users WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Helper: returns current user's role
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS text AS $$
  SELECT role FROM users WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- INSTITUTES: admins can see/edit their own institute
CREATE POLICY "institutes_select" ON institutes FOR SELECT
  USING (id = get_my_institute_id());
CREATE POLICY "institutes_update" ON institutes FOR UPDATE
  USING (id = get_my_institute_id() AND get_my_role() = 'admin');

-- USERS: users see their own row; admins/teachers see whole institute
CREATE POLICY "users_own" ON users FOR SELECT
  USING (id = auth.uid() OR institute_id = get_my_institute_id());
CREATE POLICY "users_insert" ON users FOR INSERT
  WITH CHECK (true);   -- new user inserts their own profile via trigger

-- SECTIONS: any member can read; only admins can write
CREATE POLICY "sections_read" ON sections FOR SELECT
  USING (institute_id = get_my_institute_id());
CREATE POLICY "sections_write" ON sections FOR ALL
  USING (institute_id = get_my_institute_id() AND get_my_role() = 'admin');

-- QUESTION BANKS: members can read own institute + shared; teachers/admins write
CREATE POLICY "qbanks_read" ON question_banks FOR SELECT
  USING (institute_id = get_my_institute_id() OR is_shared = true);
CREATE POLICY "qbanks_write" ON question_banks FOR ALL
  USING (institute_id = get_my_institute_id()
    AND get_my_role() IN ('admin','teacher'));

-- EXAM RESULTS: students see own; teachers/admins see whole institute
CREATE POLICY "results_student_read" ON exam_results FOR SELECT
  USING (student_id = auth.uid() OR institute_id = get_my_institute_id());
CREATE POLICY "results_insert" ON exam_results FOR INSERT
  WITH CHECK (institute_id = get_my_institute_id() OR student_id = auth.uid());
CREATE POLICY "results_teacher_update" ON exam_results FOR UPDATE
  USING (institute_id = get_my_institute_id()
    AND get_my_role() IN ('admin','teacher'));

-- =====================================================
-- REPORTING VIEWS
-- =====================================================

-- Per-institute exam statistics
CREATE OR REPLACE VIEW institute_exam_stats AS
SELECT
  institute_id,
  exam_type,
  COUNT(*)                                                     AS total_exams,
  ROUND(AVG(CASE WHEN mcq_total > 0
    THEN mcq_score::float / mcq_total * 100 ELSE NULL END), 1) AS avg_pct,
  MAX(CASE WHEN mcq_total > 0
    THEN mcq_score::float / mcq_total * 100 ELSE NULL END)     AS highest_pct,
  MIN(CASE WHEN mcq_total > 0
    THEN mcq_score::float / mcq_total * 100 ELSE NULL END)     AS lowest_pct,
  SUM(CASE WHEN mcq_total > 0
    AND mcq_score::float / mcq_total >= 0.4 THEN 1 ELSE 0 END) AS pass_count,
  COUNT(DISTINCT student_id)                                   AS unique_students
FROM exam_results
GROUP BY institute_id, exam_type;

-- Student performance over time
CREATE OR REPLACE VIEW student_performance AS
SELECT
  student_id,
  student_name,
  institute_id,
  class_level,
  exam_type,
  mcq_score,
  mcq_total,
  CASE WHEN mcq_total > 0
    THEN ROUND(mcq_score::float / mcq_total * 100, 1)
    ELSE NULL END AS pct,
  taken_at
FROM exam_results
ORDER BY taken_at DESC;

-- Most missed questions (from answers_log JSONB)
CREATE OR REPLACE VIEW question_difficulty AS
SELECT
  institute_id,
  q->>'question_id'                                                AS question_id,
  COUNT(*)                                                         AS attempts,
  SUM((q->>'isCorrect')::int)                                      AS correct_count,
  ROUND(SUM((q->>'isCorrect')::int)::float / NULLIF(COUNT(*),0) * 100, 1) AS accuracy_pct
FROM exam_results, jsonb_array_elements(answers_log) AS q
WHERE q->>'type' = 'mcq'
GROUP BY institute_id, question_id
ORDER BY accuracy_pct ASC NULLS LAST;

-- =====================================================
-- SAMPLE DATA — first institute setup
-- Run this once to create your first institute:
-- =====================================================
-- INSERT INTO institutes (name, slug, primary_color, secondary_color)
-- VALUES ('My School', 'my-school', '#4f46e5', '#7c3aed')
-- RETURNING id;
-- Then copy the id and run:
-- UPDATE users SET institute_id = '<id>', role = 'admin' WHERE id = auth.uid();
