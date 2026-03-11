# 🤖 AI Study Buddy – Multi-Class Edition

A **completely free**, browser-based AI-powered study app for CBSE students of **any class**.  
No server. No installation. Just open `index.html` and start learning!

> **Questions are loaded entirely from CSV files you upload.**  
> A ready-made starter pack (`class7_questions.csv`) with 153 Class 7 CBSE questions is included — upload it in one click to get started immediately.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🎓 Class Selector | Switch between classes — all features automatically filter to the active class |
| 💬 AI Tutor | Ask anything — powered by Claude, ChatGPT, or Gemini; system prompt adapts to your class |
| 📝 Practice Quiz | Subject + chapter MCQ quiz with topic / difficulty / type filters; 5–30 questions |
| ☀️ Daily Practice | 20 random questions from your active class; filter by subject |
| 🎓 Mock Exam | Auto-generated: 5 MCQ + 3 Short Answer + 2 Long Answer; estimated grade output |
| 📋 Term Exam | 50-mark paper — 20 MCQ + 5 Short + 3 Long + 1 Essay; 90-minute timer; PDF download |
| 🏅 Annual Exam | 80-mark paper — 30 MCQ + 6 Short + 4 Long + 2 Essay; 180-minute timer; PDF download |
| 📊 Progress Tracker | Score, accuracy %, streak, subject bars, 10 achievements |
| 📂 Question Bank Manager | Upload unlimited CSV files; multiple banks stored and managed separately |

---

## 🚀 Quick Start

### First-time setup (2 minutes)

1. **Download** this folder — keep all files together:
   ```
   index.html
   style.css
   script.js
   README.md
   class7_questions.csv   ← starter questions (153 Class 7 CBSE questions)
   ```
2. **Open** `index.html` in your browser (double-click)
3. **Upload questions** — click **📂 Question Bank** → drag in `class7_questions.csv` → Save
4. **Select your class** — Class 7 card appears → click it → start quizzing!

> No internet needed after the first load (Google Fonts cache after the first visit).

---

## 🌐 Free Hosting Options

### GitHub Pages (Recommended)
1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** → name it `study-buddy`
3. Upload all files (`index.html`, `style.css`, `script.js`)
4. Go to **Settings → Pages → Deploy from branch → main → / (root)**
5. Live at: `https://YOUR-USERNAME.github.io/study-buddy`

### Vercel / Netlify
Drag and drop the project folder onto [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) — live in under a minute, free forever.

> ⚠️ **Note:** CSV question banks are saved in your browser's `localStorage`. After deploying online, re-upload your CSVs from the Question Bank Manager page.

---

## 📂 Questions — CSV-Only Architecture

**The app has no hardcoded questions.** Every question must come from an uploaded CSV file. This design means:

- Zero conflicts between question sources — all questions go through the same pipeline
- The rotation / anti-repeat system works identically for every CSV
- New subjects, chapters, and classes appear automatically from whatever you upload
- You have full control — add, preview, or delete any bank at any time

### Getting Started with Questions

**Option A — Use the included starter pack:**  
Upload `class7_questions.csv` (included in this folder). It contains 153 Class 7 CBSE questions across Math, Science, English and SST.

**Option B — Download from within the app:**  
Go to **📂 Question Bank** → click **⬇️ Download Sample CSV** → a 153-question CSV downloads instantly.

**Option C — Build your own:**  
Create a CSV using the schema below. Any class, any subject, any number of questions.

---

## 📋 CSV Format

### Full Column Schema

| Column | Required | Description |
|---|---|---|
| `question_id` | Optional | Row identifier shown in the preview table (e.g. Q001) |
| `class` | Optional | Class number — drives the Class Selector screen (e.g. `7`, `8`, `9`) |
| `subject` | Optional | Subject name — auto-creates subject tabs (e.g. `Math`, `Science`) |
| `chapter` | Optional | Chapter name — auto-creates chapter buttons |
| `topic` | Optional | Topic tag — populates Topic filter dropdown |
| `difficulty` | Optional | `Easy`, `Medium`, or `Hard` — colour-coded in filters and on question cards |
| `question_type` | Optional | `MCQ`, `True/False`, etc — populates Type filter dropdown |
| `question` | ✅ Yes | The question text shown to the student |
| `option_a` | ✅ Yes | Answer choice A |
| `option_b` | ✅ Yes | Answer choice B |
| `option_c` | ✅ Yes | Answer choice C |
| `option_d` | ✅ Yes | Answer choice D |
| `correct_answer` | ✅ Yes | `A`, `B`, `C`, or `D` (case-insensitive) |
| `explanation` | Optional | Shown after answering — 💡 |
| `learning_objective` | Optional | Shown in the feedback panel — 🎯 |
| `ncert_reference` | Optional | Shown in feedback and bank preview — 📘 |

### Minimal Working Example

```csv
question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference
Q001,8,Science,Cell Structure,Cell Organelles,Easy,MCQ,Which organelle is the powerhouse of the cell?,Nucleus,Mitochondria,Ribosome,Chloroplast,B,Mitochondria produce ATP energy for the cell,Students understand cell organelles,NCERT Class 8 Science Ch 8
Q002,8,Math,Squares and Square Roots,Perfect Squares,Easy,MCQ,What is the square root of 144?,10,11,12,13,C,12 x 12 = 144 so root 144 = 12,Students calculate square roots,NCERT Class 8 Maths Ch 6
```

### How to Upload

1. Click **📂 Question Bank** in the nav
2. Drag & drop your CSV (or click to browse)
3. Preview shows: question count, subjects, class, difficulty breakdown, first 12 rows
4. Give the bank a name → click **Save**
5. New class cards, subject tabs, chapters, and filter options appear instantly everywhere

### Multiple CSV Banks

You can upload as many CSV files as you like — each is stored and managed separately:
- Load one bank per subject, or one per class, or one giant file — all combinations work
- Preview any bank's questions at any time
- Delete a bank without affecting others
- The quiz rotation treats all uploaded banks as one unified pool per active class

---

## 🔄 How Question Rotation Works

The app uses a **queue-based rotation system** that guarantees no question repeats until every question in the filtered pool has been seen at least once.

### The Scope Key

Every unique combination of active filters gets its own independent rotation queue:

```
Science :: All Chapters :: Nature & Plant :: Easy :: __all__
Science :: All Chapters :: __all__        :: __all__ :: __all__
Math    :: Integers      :: __all__        :: __all__ :: __all__
```

Changing any filter (topic, difficulty, type, chapter) creates a **fresh independent queue** — there is no bleed-over between filter combinations.

### How the Queue Works

1. On the first quiz with a given filter combo, all matching questions are shuffled into a queue
2. The app pops the first N questions from the queue for your quiz
3. The queue persists across "Try Again" — the next quiz continues where the queue left off
4. When the queue empties (all questions seen), it refills with a fresh shuffle
5. Maximum repeats in any rotation cycle: 2 (only at the exact wrap boundary)

### Multiple CSV Banks — No Collision

Each question gets a unique ID at save time:
- `C-bank_1700000001-Q001` — from bank timestamped 1700000001
- `C-bank_1700000002-Q001` — from a different bank

Even if two banks contain questions with identical text, their IDs differ — both are tracked independently in the rotation queue. Adding or removing banks never corrupts existing rotation state.

---

## 🎓 Class Selector

- Every class that has questions in any uploaded bank appears as a card
- Click a card to scope the entire app to that class
- The **top nav badge** updates: `🎓 Class 7 ▾`
- A compact **dropdown** in the nav lets you switch class at any time
- A small **"Active: Class X"** banner appears on Quiz, Daily, Tutor, Mock and Exam pages

**What class scoping means in practice:**
- Quiz, Daily Practice, Mock, Term and Annual exams — only use questions for the active class
- Subject tabs — only show subjects that have questions for that class
- AI Tutor system prompt — automatically says `"Class 8 CBSE student (age 13–14)"`
- Class filter dropdown in Quiz Setup is hidden when a class is active

**Multiple classes:**  
Upload CSVs with `class` set to `8`, `9`, `10` etc. — new cards appear instantly on the selector. Switch between classes freely without losing progress.

---

## 🤖 AI Tutor Setup

The AI Tutor supports **3 providers**. Save keys for all three and switch between them anytime.

| Provider | Model | Free Tier | Get Key |
|---|---|---|---|
| 🟣 **Claude** (Anthropic) | claude-sonnet-4-20250514 | Limited free | [console.anthropic.com](https://console.anthropic.com) |
| 🟢 **ChatGPT** (OpenAI) | gpt-4o-mini | Limited free | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| 🔵 **Gemini** (Google) | gemini-2.0-flash | **1,500 req/day FREE** ✅ | [aistudio.google.com](https://aistudio.google.com/app/apikey) |

> 💡 **Best free option: Google Gemini** — 1,500 requests/day, no credit card required.

**How to add a key:**
1. Click **💬 Ask AI Tutor** → a setup panel appears at the top
2. Select your provider tab → paste your key → click **Save 🔑**
3. Key is stored in `localStorage` only — never sent anywhere except the AI provider you chose

**No API key?** The app works in **offline mode** using a built-in knowledge base covering major CBSE topics (photosynthesis, acids/bases, fractions, Mughal Empire, democracy, heat, and more).

---

## 📝 Practice Quiz

1. Select a **subject** tab (or 🌈 All Subjects)
2. Select a **chapter** button (or 📚 All Chapters)
3. Optionally filter by **Topic**, **Difficulty**, or **Type**
4. Live badge shows: `✅ 89 questions available 🟢 40 Easy 🟡 32 Medium 🔴 17 Hard`
5. Choose **5, 10, 15, 20, 25, or 30** questions → **Start Quiz**

**Smart padding:** If a chapter has fewer questions than requested, the app pads from the same subject automatically — you always get the number you asked for, with a notice explaining the padding.

**Answer Review:** After completing a quiz, expand **📋 View Answers** to see every question with ✅/❌ badges, your chosen answer, the correct answer (if wrong), and the explanation.

---

## ☀️ Daily Practice

- 20 random questions from your active class pool
- Filter by subject using the tabs, or keep All Subjects
- Full answer review panel available after completion
- Score tracked and added to progress stats

---

## 🎓 Mock Exam

- Auto-generates: **5 MCQ + 3 Short Answer + 2 Long Answer**
- MCQ is auto-scored; written answers estimated by length
- Grade output: A+ / A / B / C / D

---

## 📋 Term Exam (50 Marks)

| Section | Questions | Marks each | Total |
|---|---|---|---|
| A — MCQ | 20 | 1 | 20 |
| B — Short Answer | 5 | 2 | 10 |
| C — Long Answer | 3 | 5 | 15 |
| D — Essay | 1 | 5 | 5 |

- ⏱ **90-minute countdown timer** — warns at 5 minutes remaining; auto-submits at 0
- 📄 **Download as PDF** — saves a formatted A4 exam paper after completion

---

## 🏅 Annual Exam (80 Marks)

| Section | Questions | Marks each | Total |
|---|---|---|---|
| A — MCQ | 30 | 1 | 30 |
| B — Short Answer | 6 | 2 | 12 |
| C — Long Answer | 4 | 5 | 20 |
| D — Essay | 2 | 9 | 18 |

- ⏱ **180-minute countdown timer**
- 📄 **Download as PDF** after completion

---

## 📊 Progress Tracker

- Tracks total attempts, correct answers, accuracy %, current streak, best streak
- Per-subject progress bars (built dynamically from active class subjects)
- 10 unlockable achievements (First Step, 5-streak, 50 Correct, Science Star, etc.)
- All data saved in `localStorage` — persists across sessions
- Reset button with confirmation prompt

---

## 📁 File Structure

```
AI-Study-Buddy/
├── index.html              ← App layout and all page sections
├── style.css               ← All styles, colours, animations
├── script.js               ← All logic: questions, quiz, AI tutor, CSV, rotation
├── class7_questions.csv    ← 153 Class 7 CBSE starter questions (upload this first)
└── README.md               ← This file
```

### Key Sections in script.js

| Section | What it does |
|---|---|
| SECTION 0 | Class state — `getActiveClass()`, `setActiveClass()`, `getActiveQuestions()`, class dropdown UI |
| SECTION 1 | Chapter definitions |
| SECTION 2 | `QUESTION_BANK = []` — intentionally empty; all questions come from CSV uploads |
| SECTION 3 | AI Tutor offline knowledge base (`TUTOR_KB`) |
| SECTION 4 | Mock / Term / Annual exam question sets (short answer, long answer, essay) |
| SECTION 5 | Progress tracking (`localStorage`) |
| SECTION 6 | Page navigation (`showPage()`), class banner injection |
| SECTION 7 | AI Tutor — Claude / ChatGPT / Gemini API calls; dynamic `getSystemPrompt()` |
| SECTION 8 | Question bank helpers — `getAllQuestions()`, `getActiveQuestions()`, `getAllSubjects()` |
| SECTION 9 | Quiz setup — subject tabs, chapter grid, `populateFilterDropdowns()`, `getFilteredPool()` |
| SECTION 10 | Quiz rendering — `renderQuestion()`, `checkAnswer()`, answer shuffling |
| SECTION 11 | Daily practice — `renderDailyQuestion()`, `checkDailyAnswer()` |
| SECTION 12 | Mock / Term / Annual exam generation and scoring |
| SECTION 13 | Progress tracker and achievements |
| SECTION 14 | CSV upload, parse (`parseCSV()`), save, manage, preview; `downloadSampleCsv()` |
| SECTION 15 | ID assignment — `assignDefaultIds()`, `assignCsvIds()` |
| SECTION 16 | Rotation engine — `makeScopeKey()`, `pickQuestions()`, `clearSeenCache()` |

---

## 🎨 Customisation

**Change colour scheme** — edit CSS variables at the top of `style.css`:
```css
:root {
  --clr-primary:   #4f46e5;   /* Main purple */
  --clr-secondary: #7c3aed;
  --clr-accent:    #f59e0b;   /* Gold accent */
  --clr-green:     #10b981;
}
```

**Add a subject emoji** — find `SUBJECT_EMOJI` in `script.js`:
```javascript
const SUBJECT_EMOJI = { Math:'➕', Science:'🔬', Hindi:'🇮🇳', Computer:'💻' };
```

**Change question count options** — edit the `<select>` inside `#quiz-start-row` in `index.html`.

**Add offline AI topics** — find `TUTOR_KB` in `script.js`:
```javascript
{ keys: ["keyword1", "keyword2"], answer: `Your <b>HTML</b> explanation here 🌟` }
```

---

## 🔒 Privacy & Data

- **All data stays in your browser** — nothing is sent to any server except your chosen AI provider
- API keys stored in `localStorage` only — never logged or shared
- Question banks, progress, scores — all local `localStorage`
- Clearing browser data / cache resets everything

---

## 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| App opens but quiz shows "No Questions" | Upload a CSV first — go to **📂 Question Bank** and upload `class7_questions.csv` |
| Class selector is empty | No CSVs uploaded yet — upload any CSV with a `class` column |
| Questions not showing after CSV upload | Check the question count on the home screen; verify `class` column matches the active class (e.g. both `7`) |
| Same questions repeating | Clear browser storage and re-upload CSV; ensure CSV rows have unique `question_id` values |
| CSV upload fails or shows 0 questions | Column headers must match exactly; `correct_answer` must be A/B/C/D; save the file as UTF-8 |
| AI Tutor not responding | Check your API key is correct and you have internet; try switching providers |
| "No questions found" in quiz | Verify active class matches your CSV `class` column; try All Subjects / All Chapters |
| Progress not saving | Check browser allows `localStorage` (disabled in some private/incognito modes) |
| PDF download not working | Allow pop-ups for the app's URL; try a different browser |

---

## 📋 Changelog

### Current Version
- **CSV-only architecture** — `QUESTION_BANK` is intentionally empty; all questions come exclusively from uploaded CSV files, eliminating the source-of-truth conflict that caused repeat questions
- **Included starter CSV** — `class7_questions.csv` with all 153 original Class 7 CBSE questions, ready to upload
- **Queue-based rotation engine** — replaced the seen-set approach; questions rotate through the full pool before any repeats occur
- **5-dimension scope key** — `subject :: chapter :: topic :: difficulty :: type`; each filter combination has its own independent rotation queue; no bleed-over between different filter states
- **Multi-CSV verified** — each bank gets a unique timestamp-based ID prefix; zero ID collisions between banks regardless of overlapping question text; bank deletion trims stale IDs from queues automatically
- **Term Exam (50M)** and **Annual Exam (80M)** with section breakdowns and countdown timers
- **PDF download** of completed exam papers (jsPDF, in-browser, A4 formatted)
- **Answer Review panel** after Quiz and Daily Practice — collapsible; shows ✅/❌, chosen vs correct answer, explanation
- **Home screen question count** stat tile — updates live as banks are added or removed
- **Class normaliser** — handles CSV `class` values like `Class 7`, `7th`, `07`, `7.0` — all treated as Class 7
- **Quiz count options** extended to 5, 10, 15, 20, 25, 30 questions
- **Daily Practice** increased to 20 questions per session

### Previous: Multi-Class Edition
- Class Selector screen on first launch — cards for every class in uploaded banks
- Active class scoping across all features — quiz, daily, mock, exam, AI tutor
- Dynamic AI Tutor system prompt — class, age range, and available subjects
- Compact class dropdown in top nav; "Active: Class X" banner on all content pages

### Previous: Answer Randomisation
- Options shuffled at render time — correct answer in a random A/B/C/D slot every quiz
- `ans` stores correct answer text, not a positional index — survives option shuffling correctly

---

Made with ❤️ for students of all classes. Completely free, forever.
