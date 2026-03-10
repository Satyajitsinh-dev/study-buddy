# 🤖 AI Study Buddy – Multi-Class Edition

A **completely free**, browser-based AI-powered study app for CBSE students of **any class**.  
No server. No installation. Just open `index.html` and start learning!

> Built-in question bank covers **Class 7 CBSE** (152 questions across 25 chapters).  
> Upload your own CSV to add questions for any other class — the app adapts automatically.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🎓 Class Selector | Choose your class on first launch — all features filter to that class |
| 💬 AI Tutor | Ask any question — powered by Claude, ChatGPT, or Gemini; tailored to your class |
| 📝 Practice Quiz | Subject + chapter-wise MCQ quiz with topic/difficulty filters (5–20 questions) |
| ☀️ Daily Practice | 10 mixed questions filtered to your active class and subject |
| 🎓 Mock Exam | Full exam simulation: 5 MCQ + 3 Short + 2 Long answer questions |
| 📊 Progress Tracker | Score, accuracy, streaks, subject bars, 10 achievements |
| 📂 Question Bank Manager | Upload CSV files — new classes/subjects appear automatically |

---

## 🚀 How to Run

1. Download / clone this folder
2. Make sure all **4 files** are in the **same folder**:
   ```
   index.html
   style.css
   script.js
   README.md
   ```
3. Double-click `index.html` — opens instantly in your browser!

> No internet needed after the first load (Google Fonts cache after the first visit).

---

## 🌐 Free Hosting Options

### GitHub Pages (Recommended)
1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** → name it `study-buddy`
3. Upload all 3 files (`index.html`, `style.css`, `script.js`)
4. Go to **Settings → Pages → Deploy from branch → main → / (root)**
5. Live at: `https://YOUR-USERNAME.github.io/study-buddy`

### Vercel / Netlify
Drag and drop your project folder onto [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) — live in under a minute, free forever.

---

## 🎓 Class Selector

When you open the app for the first time, you land on the **Class Selector screen**.

- Every class that has questions in the bank appears as a card (e.g. Class 7)
- Click a card to enter the app scoped to that class
- The **top nav badge** updates to show your active class (e.g. `Class 7`)
- A **🎓 Switch Class** button appears in the top nav at all times
- A small **"Active: Class X"** banner appears on the Quiz, Daily, Tutor and Mock pages with a quick Switch link

**What "active class" means in practice:**
- Quiz, Daily Practice, Mock Exam — only draw questions from the active class
- Subject tabs — only show subjects that have questions for that class
- AI Tutor system prompt — automatically says "Class 8 CBSE student (age 13–14)" etc.
- The Class filter dropdown in Quiz Setup is hidden (already filtered globally)

**Using multiple classes:**  
Upload a CSV with `class` set to e.g. `8` — a new Class 8 card appears on the selector. Switch between classes freely without losing progress.

---

## 🤖 AI Tutor Setup

The AI Tutor supports **3 providers**. You can save keys for all three and switch between them anytime.

### Supported Providers

| Provider | Model | Free Tier | Get Key |
|---|---|---|---|
| 🟣 **Claude** (Anthropic) | claude-sonnet-4-20250514 | Limited free | [console.anthropic.com](https://console.anthropic.com) |
| 🟢 **ChatGPT** (OpenAI) | gpt-4o-mini | Limited free | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| 🔵 **Gemini** (Google) | gemini-2.0-flash | **1,500 req/day FREE** ✅ | [aistudio.google.com](https://aistudio.google.com/app/apikey) |

> 💡 **Best free option: Google Gemini** — 1,500 requests/day, no credit card required.

### How to Add Your API Key
1. Click **💬 Ask AI Tutor** → a setup panel appears at the top
2. Select your provider tab → paste your key → click **Save 🔑**
3. Key is saved in `localStorage` — never sent anywhere except the AI provider

### The System Prompt is Dynamic
The AI Tutor's instructions adapt to your active class automatically:
- Active class → `"You are a tutor for Class 8 CBSE students (age 13–14)..."`
- No class selected → generic tutor mode
- Subject list in the prompt matches the subjects actually available for that class

### No API Key?
The app works in **offline mode** using a built-in knowledge base covering major CBSE topics (acids/bases, photosynthesis, fractions, Mughal Empire, democracy, and more).

---

## 📝 Practice Quiz

1. Click **Practice Quiz** → select a **subject** (or 🌈 All Subjects)
2. Select a **chapter** (or 📚 All Chapters)
3. Optionally filter by **Topic**, **Difficulty** (Easy/Medium/Hard), **Type**
4. Live badge shows exactly how many questions match: `✅ 14 questions available 🟢 6 Easy 🟡 5 Medium 🔴 3 Hard`
5. Choose **5, 10, 15, or 20** questions → **Start Quiz**

**Smart padding:** If a chapter has fewer questions than requested, the app pads from the same subject (with a notice banner) — you never get an error or empty quiz.

**Answer shuffling:** Options are shuffled randomly every time a question is shown, so the correct answer appears in a different A/B/C/D position each play-through.

---

## ☀️ Daily Practice

- 10 random questions drawn from your **active class** pool
- Filter by subject using the tabs at the top, or keep All Subjects
- Score tracked and added to your progress stats

---

## 🎓 Mock Exam

- Auto-generates: **5 MCQ + 3 Short Answer + 2 Long Answer**
- MCQ is auto-scored; written answers estimated by length
- Estimated grade output: A+ / A / B / C / D

---

## 📊 Progress Tracker

- Tracks total attempts, correct answers, accuracy %, current streak, best streak
- Per-subject progress bars (built dynamically from your active class subjects)
- 10 unlockable achievements (First Step, 5-streak, 50 Correct, Science Star, etc.)
- All data saved in `localStorage` — persists across sessions
- Reset button with confirmation prompt

---

## 📂 Question Bank Manager (CSV Upload)

Upload any number of CSV files to add questions for **any class or subject**. All 16 columns are supported and actively used throughout the app.

### Full CSV Column Schema

| Column | Required | Used For |
|---|---|---|
| `question_id` | Optional | Row ID in preview tables (e.g. Q001) |
| `class` | Optional | **Class Selector** — new class cards appear automatically; scopes all features |
| `subject` | Optional | Subject tabs — new subjects auto-appear |
| `chapter` | Optional | Chapter selection buttons |
| `topic` | Optional | Topic filter dropdown; teal pill on question card |
| `difficulty` | Optional | Difficulty filter (Easy / Medium / Hard); colour-coded pill |
| `question_type` | Optional | Type filter (MCQ, True/False, Fill in the blank) |
| `question` | ✅ Yes | Question text shown to the student |
| `option_a` | ✅ Yes | Choice A |
| `option_b` | ✅ Yes | Choice B |
| `option_c` | ✅ Yes | Choice C |
| `option_d` | ✅ Yes | Choice D |
| `correct_answer` | ✅ Yes | Must be **A**, **B**, **C**, or **D** (case-insensitive) |
| `explanation` | Optional | 💡 Shown in feedback after answering |
| `learning_objective` | Optional | 🎯 Shown in feedback panel |
| `ncert_reference` | Optional | 📘 Shown in feedback and bank preview |

### How Each Field Appears in the App

**Class Selector screen:**
- `class` → generates a class card with question count

**Quiz Setup page:**
- `subject` → subject tab buttons
- `chapter` → chapter selection buttons
- `topic`, `difficulty`, `question_type` → filter dropdowns
- `class` filter dropdown only shown when no class is active (multi-class mode)

**Question card (during quiz):**
- `class` → 🎓 purple pill · `subject` → 📚 blue pill · `chapter` → 📖 yellow pill
- `topic` → 🔖 teal pill · `difficulty` → 🟢/🟡/🔴 pill · `question_type` → grey pill

**Feedback panel (after answering):**
- `explanation` → 💡 · `learning_objective` → 🎯 · `ncert_reference` → 📘

### Example CSV

```csv
question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference
Q001,8,Science,Cell Structure,Cell Organelles,Easy,MCQ,Which organelle is called the powerhouse of the cell?,Nucleus,Mitochondria,Ribosome,Chloroplast,B,Mitochondria produce ATP energy for the cell,Students understand cell organelles,NCERT Class 8 Science Ch 8
Q002,8,Math,Squares and Square Roots,Perfect Squares,Easy,MCQ,What is the square root of 144?,10,11,12,13,C,12 × 12 = 144 so √144 = 12,Students calculate square roots,NCERT Class 8 Maths Ch 6
```

### How to Upload
1. Click **📂 Question Bank** → drag & drop your CSV or click to browse
2. Preview shows: question count, subjects, class, difficulty breakdown, first 8 rows
3. Name the bank (e.g. "Class 8 Science") → click **Save**
4. New class cards, subject tabs, chapters and filter options appear instantly everywhere!

### Tips
- Click **⬇️ Download Sample CSV** in the app for a ready-to-fill 5-row template with all 16 columns
- Upload multiple banks — each stored and managed separately
- When a class is active, only questions for that class are used in the quiz/daily/mock
- All data stored in browser `localStorage` — persists across sessions
- Delete any bank anytime from the manager page

---

## 📚 Built-in Question Bank (Class 7 CBSE)

**152 questions** across **25 chapters** — every question has full metadata (difficulty, topic, classLevel).

### Mathematics (35 questions)
Integers · Fractions and Decimals · Simple Equations · Data Handling · The Triangle · Lines and Angles · Comparing Quantities

### Science (48 questions)
Nutrition in Plants · Nutrition in Animals · Heat · Acids Bases and Salts · Physical and Chemical Changes · Respiration in Organisms · Transportation in Animals and Plants

### English (21 questions)
Grammar – Nouns · Grammar – Verbs and Tenses · Grammar – Adjectives · Grammar – Pronouns

### Social Science (48 questions)
The Mughal Empire · Democracy – Equality and Justice · State Government · Inside Our Earth · Our Changing Earth · Tracing Changes Through Thousand Years · New Kings and Kingdoms

---

## ➕ Adding Questions to the Code

### Option 1: CSV Upload (Recommended — no coding!)
Use the **📂 Question Bank Manager**.

### Option 2: Edit QUESTION_BANK in script.js

```javascript
{
  q: "Your question here?",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  ans: "Option B",          // ← Correct answer TEXT (not a number index)
  exp: "Short explanation! 🎯",
  subject: "Science",
  chapter: "Cell Structure",
  topic: "Cell Organelles",
  difficulty: "Easy",       // "Easy" | "Medium" | "Hard"
  classLevel: "8"           // Class number as a string
}
```

> ⚠️ **`ans` must be the exact text of the correct option** — not a number. Options are shuffled at render time so an index would point to the wrong answer.

### Add an Offline AI Topic
Find `TUTOR_KB` in `script.js` and add:
```javascript
{ keys: ["keyword1", "keyword2"], answer: `Your <b>HTML</b> explanation 🌟` }
```

---

## 📁 File Structure

```
AI-Study-Buddy/
├── index.html   ← App layout, all page sections (class selector, quiz, tutor, etc.)
├── style.css    ← All styles, colors, animations, class-selector card styles
├── script.js    ← All logic: class state, quiz, AI tutor, CSV manager, progress
└── README.md    ← This file
```

### Key Sections in script.js

| Section | What it does |
|---|---|
| SECTION 0 | **Class state management** — `getActiveClass()`, `setActiveClass()`, `showClassSelector()`, `getActiveQuestions()`, `updateClassUI()`, `injectClassBanner()` |
| SECTION 1 | Chapter definitions |
| SECTION 2 | Built-in question bank (152 Class 7 questions) |
| SECTION 3 | AI Tutor offline knowledge base (TUTOR_KB) |
| SECTION 4 | Mock exam question sets |
| SECTION 5 | Progress tracking (localStorage) |
| SECTION 6 | Navigation & progress tracker UI |
| SECTION 7 | AI Tutor — Claude / ChatGPT / Gemini API calls; `getSystemPrompt()` (dynamic) |
| SECTION 8 | Question bank helpers — `getAllQuestions()`, `getActiveQuestions()`, `getAllSubjects()` |
| SECTION 9 | Quiz setup — subject tabs, chapter grid, `populateFilterDropdowns()`, `getFilteredPool()` |
| SECTION 10 | Quiz rendering — `renderQuestion()`, `checkAnswer()` (with option shuffling) |
| SECTION 11 | Daily practice — `renderDailyQuestion()`, `checkDailyAnswer()` |
| SECTION 12 | Mock exam generation & scoring |
| SECTION 13 | Progress tracker & achievements |
| SECTION 14 | CSV upload, parse, save, manage, preview; `downloadSampleCsv()` |

---

## 🎨 Customisation Tips

**Change colour scheme** — edit CSS variables at the top of `style.css`:
```css
:root {
  --clr-primary:  #4f46e5;   /* Main purple */
  --clr-accent:   #f59e0b;   /* Gold accent */
  --clr-green:    #10b981;
}
```

**Add a subject emoji:**
```javascript
const SUBJECT_EMOJI = { Math:'➕', Science:'🔬', Hindi:'🇮🇳', Computer:'💻' };
```

**Change question count options** — edit the `<select>` inside `#quiz-start-row` in `index.html`.

---

## 🔒 Privacy & Data

- **All data stays in your browser** — nothing is sent to any server except your AI provider
- API keys stored in `localStorage` only — never logged or shared
- Progress, scores, CSV question banks — all local `localStorage`
- Clearing browser data resets everything

---

## 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| App opens but shows a blank screen | Ensure all 3 files are in the same folder; try a hard refresh (Ctrl+Shift+R) |
| Class selector is empty | The built-in Class 7 should always appear — try a hard refresh; or upload any CSV with a `class` column |
| AI Tutor not responding | Check your API key is correct and you have internet |
| "No questions found" in quiz | Verify you are on the right class (Switch Class in nav); try All Subjects / All Chapters |
| CSV not uploading | Column headers must match exactly; `correct_answer` must be A/B/C/D |
| Progress not saving | Check that your browser allows `localStorage` (disabled in some incognito modes) |
| Answers marked wrong unexpectedly | If you added questions via code, check that `ans` is the answer **text**, not a number index |

---

## 📋 Changelog

### Multi-Class Edition (Current)
- **Class Selector screen** on first launch — shows all classes with question counts; designed to expand automatically as new CSVs are uploaded
- **Active class scoping** — quiz, daily practice, mock exam and AI tutor all filter to the selected class
- **Dynamic AI Tutor system prompt** — includes correct class, estimated age range, and available subjects
- **🎓 Switch Class** button always in the top nav; "Active: Class X" banner on all content pages
- **Class filter dropdown** in quiz setup hidden when a class is active
- Uploading a CSV with a new class instantly adds that class card to the selector
- All hardcoded "Class 7 CBSE" UI text replaced with dynamic labels

### Answer Randomisation Fix
- All built-in questions: `ans` now stores the **correct answer text** (not a positional index)
- Options **shuffled at render time** — correct answer appears in a random A/B/C/D slot every quiz
- Both `renderQuestion` and `renderDailyQuestion` use the new text-matching approach

### Quiz Filter Fix
- All 152 built-in questions now include `difficulty`, `topic`, and `classLevel` metadata
- Difficulty, Topic, and Type filters now work correctly on built-in questions
- Live count badge accurately reflects filtered counts with colour-coded difficulty pills

---

Made with ❤️ for students of all classes. Completely free, forever.
