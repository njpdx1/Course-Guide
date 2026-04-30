import { useState } from "react";

// Difficulty: 1 (easy) to 5 (very hard)
const schedule = [
  {
    year: 1,
    label: "Year 1",
    school: "Langara College",
    schoolShort: "LANGARA",
    accent: "#2ecc71",
    note: "Engineering Transfer Certificate — spread across 3 semesters to avoid stacking heavy math and physics together.",
    semesters: [
      {
        name: "Fall",
        tag: "Foundation",
        tagColor: "#2ecc71",
        load: "Moderate",
        courses: [
          { code: "MATH 1171", name: "Differential Calculus", credits: 4, type: "math", diff: 3, note: "Start here — your hardest math this term" },
          { code: "CHEM 1120", name: "Engineering Chemistry", credits: 4, type: "science", diff: 2, note: "Math-light — good to pair with Calc I" },
          { code: "CPSC 1150", name: "Computer Programming", credits: 3, type: "cs", diff: 2 },
          { code: "ENGL 1107", name: "English Composition", credits: 3, type: "comm", diff: 1, note: "Easy — balances the workload" },
        ],
      },
      {
        name: "Spring",
        tag: "Core Math & Physics",
        tagColor: "#4a90e2",
        load: "Heavy",
        courses: [
          { code: "MATH 1271", name: "Integral Calculus", credits: 4, type: "math", diff: 4, note: "Heaviest math — no Linear Algebra this term" },
          { code: "PHYS 1125", name: "Physics I — Mechanics", credits: 4, type: "physics", diff: 3, note: "Pairs well with Integral Calc (uses integrals)" },
          { code: "ENGR 1110", name: "Engineering Design I", credits: 2, type: "eng", diff: 2 },
          { code: "ENGL 1123", name: "Technical Writing", credits: 3, type: "comm", diff: 1, note: "Easy — offsets the heavy math" },
        ],
      },
      {
        name: "Summer",
        tag: "Hard Isolation",
        tagColor: "#f97316",
        load: "Moderate",
        courses: [
          { code: "PHYS 1225", name: "Physics II — E&M & Waves", credits: 4, type: "physics", diff: 5, note: "Hardest Langara course — taken alone without competing heavy math" },
          { code: "MATH 2362", name: "Linear Algebra", credits: 3, type: "math", diff: 3, note: "Moved here so it doesn't compete with Integral Calculus" },
          { code: "ENGR 1210", name: "Engineering Design II", credits: 2, type: "eng", diff: 2 },
          { code: "MATH 1183", name: "Calculus Computer Lab", credits: 1, type: "math", diff: 1 },
        ],
      },
    ],
  },
  {
    year: 2,
    label: "Year 2",
    school: "BCIT — ECET Common First Year",
    schoolShort: "BCIT",
    accent: "#4a90e2",
    note: "BCIT's first year is structured — can't reorder. Compete for BEng seat in Term 2. Target GPA >85%. Summer is a break/prep period.",
    semesters: [
      {
        name: "Fall — Level 1",
        tag: "Circuits Foundation",
        tagColor: "#4a90e2",
        load: "Heavy",
        courses: [
          { code: "ELEX 1105", name: "DC Circuit Analysis", credits: 4, type: "elec", diff: 3, note: "Your main EE course — Langara physics background helps a lot" },
          { code: "MATH 1441", name: "Calculus for Technology I", credits: 4, type: "math", diff: 2, note: "Easier than Langara Calc — you've already done this" },
          { code: "PHYS 1441", name: "Physics for Technology I", credits: 4, type: "physics", diff: 2, note: "Review of mechanics — lighter than Langara Physics I" },
          { code: "COMP 1151", name: "Intro Programming for Engineers", credits: 3, type: "cs", diff: 2 },
          { code: "COMM 1143", name: "Technical Communication", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Spring — Level 2",
        tag: "AC + Digital",
        tagColor: "#a855f7",
        load: "Heavy",
        courses: [
          { code: "ELEX 1205", name: "AC Circuit Analysis", credits: 4, type: "elec", diff: 4, note: "Big jump from DC — most students find this the hardest of Level 2" },
          { code: "ELEX 1115", name: "Digital Systems I", credits: 4, type: "digital", diff: 3 },
          { code: "ELEX 1125", name: "Electronics I", credits: 4, type: "elec", diff: 3 },
          { code: "MATH 1442", name: "Calculus for Technology II", credits: 4, type: "math", diff: 3 },
          { code: "PHYS 1442", name: "Physics for Technology II", credits: 4, type: "physics", diff: 3 },
        ],
      },
      {
        name: "Summer",
        tag: "Break / BEng Prep",
        tagColor: "#22c55e",
        load: "Break",
        courses: [
          { code: "—", name: "BCIT Summer Break", credits: 0, type: "break", diff: 0, note: "BEng program does not run in summer. Use this time to review circuits and math before Level 3." },
          { code: "OPT", name: "Optional: Review AC Circuits & Signals", credits: 0, type: "break", diff: 0, note: "Self-study Schaum's or MIT OCW 6.002 Circuits" },
        ],
      },
    ],
  },
  {
    year: 3,
    label: "Year 3",
    school: "BCIT — BEng Electrical (Level 3 & 4)",
    schoolShort: "BCIT",
    accent: "#a855f7",
    note: "Hardest year. Electromagnetic Theory and Signals & Systems are separated by one term to avoid stacking.",
    semesters: [
      {
        name: "Fall — Level 3",
        tag: "Signals & Systems Focus",
        tagColor: "#a855f7",
        load: "Very Heavy",
        courses: [
          { code: "ELEX 3115", name: "Signals & Systems", credits: 4, type: "elec", diff: 5, note: "Conceptually one of the hardest — isolated from EM Theory this term" },
          { code: "ELEX 3135", name: "Electronics II", credits: 4, type: "elec", diff: 4 },
          { code: "ELEX 3145", name: "Digital Systems II", credits: 3, type: "digital", diff: 3 },
          { code: "MATH 3441", name: "Differential Equations", credits: 3, type: "math", diff: 4, note: "Heavy math — do NOT add extra electives this semester" },
          { code: "COMM 3001", name: "Engineering Ethics & Law", credits: 2, type: "comm", diff: 1, note: "Easy — deliberate load balance" },
        ],
      },
      {
        name: "Spring — Level 4",
        tag: "Electromagnetics Focus",
        tagColor: "#f97316",
        load: "Very Heavy",
        courses: [
          { code: "ELEX 3225", name: "Electromagnetic Theory", credits: 4, type: "elec", diff: 5, note: "Hardest EE theory course — moved here so it doesn't overlap Signals & Systems" },
          { code: "ELEX 3215", name: "Control Systems I", credits: 4, type: "elec", diff: 4 },
          { code: "ELEX 3235", name: "Microprocessors & Embedded Systems", credits: 4, type: "digital", diff: 3 },
          { code: "MATH 3442", name: "Probability & Statistics for Engineers", credits: 3, type: "math", diff: 3 },
        ],
      },
      {
        name: "Summer",
        tag: "Break / Co-op Prep",
        tagColor: "#22c55e",
        load: "Break",
        courses: [
          { code: "—", name: "BCIT Summer Break", credits: 0, type: "break", diff: 0, note: "Begin co-op job search if doing the optional co-op designation. Rest and recover from Year 3." },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "BCIT — BEng Electrical (Level 5 & 6 + Work Term)",
    schoolShort: "BCIT",
    accent: "#f97316",
    note: "Mandatory 4-month work term + Capstone spans both terms. Level 5 is lighter to accommodate work term transition.",
    semesters: [
      {
        name: "Fall — Level 5",
        tag: "Work Term + DSP",
        tagColor: "#f97316",
        load: "Moderate + Work",
        courses: [
          { code: "WORK 4000", name: "Mandatory Work Term (4 months)", credits: 0, type: "work", diff: 0, note: "Full-time paid industry position — required for graduation" },
          { code: "ELEX 4115", name: "Digital Signal Processing", credits: 4, type: "digital", diff: 4, note: "Heavy — but lighter course list this term compensates" },
          { code: "ELEX 4125", name: "Communications Systems", credits: 4, type: "elec", diff: 3 },
          { code: "ELEX 4145", name: "Capstone Project — Phase I", credits: 3, type: "capstone", diff: 3, note: "Begins here — industry-sponsored design challenge" },
        ],
      },
      {
        name: "Spring — Level 6",
        tag: "Capstone & Graduation",
        tagColor: "#ef4444",
        load: "Heavy",
        courses: [
          { code: "ELEX 4215", name: "Control Systems II", credits: 4, type: "elec", diff: 4 },
          { code: "ELEX 4225", name: "Power Systems", credits: 4, type: "power", diff: 3 },
          { code: "ELEX 4235", name: "Elective (Renewables / Telecom / AI)", credits: 3, type: "elec", diff: 3, note: "Choose based on career interest" },
          { code: "ELEX 4245", name: "Capstone Project — Phase II", credits: 3, type: "capstone", diff: 4, note: "Final presentation and deliverable" },
          { code: "COMM 4001", name: "Engineering Management", credits: 2, type: "comm", diff: 2 },
        ],
      },
      {
        name: "Summer",
        tag: "Graduation",
        tagColor: "#2ecc71",
        load: "Done",
        courses: [
          { code: "🎓", name: "B.Eng. Electrical Engineering — BCIT", credits: 0, type: "grad", diff: 0, note: "Eligible to apply for P.Eng. (EIT) with Engineers & Geoscientists BC" },
        ],
      },
    ],
  },
];

// Restrained editorial palette tuned for deep ink background — each discipline gets one warm accent.
const typeAccent = {
  math:     "#e6dcc6",  // cream
  physics:  "#7ba3d4",  // cool blue
  science:  "#a8c46a",  // olive
  eng:      "#b89cd6",  // violet
  cs:       "#5fb8b8",  // teal
  comm:     "#d4a86a",  // amber
  elec:     "#d65a52",  // oxblood
  digital:  "#7ba8c9",  // steel blue
  power:    "#d68a52",  // ember
  capstone: "#e64d4d",  // signal red
  work:     "#7bc485",  // verdant
  break:    "#6b5d4f",  // muted
  grad:     "#e6c259",  // gilt
};

const typeLabel = {
  math: "Mathematics", physics: "Physics", science: "Science",
  eng: "Engineering Design", cs: "Computer Science", comm: "Communications",
  elec: "Electrical", digital: "Digital", power: "Power",
  capstone: "Capstone", work: "Work Term", break: "Recess", grad: "Graduation",
};

const roman = ["I", "II", "III", "IV"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=JetBrains+Mono:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; }
html, body, #root { margin: 0; padding: 0; width: 100%; min-height: 100vh; }
body { -webkit-text-size-adjust: 100%; overflow-x: hidden; }

:root {
  --paper:       #0c0a07;   /* deep warm ink */
  --paper-hi:    #181208;   /* subtle highlight */
  --paper-deep:  #1a1612;   /* card / note bg */
  --paper-soft:  rgba(232, 220, 196, 0.04);
  --ink:         #e8dcc4;   /* cream */
  --ink-soft:    #b8a890;
  --ink-faded:   #7a6b58;
  --hairline:    #3a3127;
  --hairline-2:  rgba(184, 168, 144, 0.12);
  --accent:      #d65a52;   /* oxblood, brightened for dark */
  --accent-soft: #a8362e;
  --gold:        #d4a86a;
}

.almanac {
  min-height: 100vh;
  background:
    radial-gradient(ellipse 120% 70% at 50% 0%,  var(--paper-hi), transparent 65%),
    radial-gradient(ellipse 80%  50% at 100% 100%, rgba(214, 90, 82, 0.10), transparent 60%),
    radial-gradient(ellipse 90%  60% at 0% 60%,   rgba(212, 168, 106, 0.05), transparent 65%),
    var(--paper);
  color: var(--ink);
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-feature-settings: "ss01" 1, "liga" 1;
  padding: 56px 32px 96px;
  position: relative;
}
.almanac::before {
  content: ''; position: fixed; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg, rgba(232, 220, 196, 0.022) 0 1px, transparent 1px 3px);
  z-index: 0;
  mix-blend-mode: overlay;
}
.almanac::after {
  content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse 140% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%);
}

.frame { max-width: 880px; margin: 0 auto; position: relative; z-index: 1; }

/* ── Masthead ───────────────────────────────── */
.masthead { text-align: center; margin-bottom: 64px; }
.eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px; letter-spacing: 4px;
  color: var(--ink-faded);
  text-transform: uppercase;
  display: flex; align-items: center; justify-content: center; gap: 18px;
  margin-bottom: 28px;
}
.eyebrow::before, .eyebrow::after {
  content: ''; height: 1px; background: var(--hairline);
  flex: 1 1 0; max-width: 96px;
}
.title {
  font-family: 'Fraunces', Georgia, serif;
  font-variation-settings: "opsz" 144, "SOFT" 30, "wght" 460;
  font-size: clamp(44px, 8.5vw, 92px);
  line-height: 0.92;
  letter-spacing: -0.025em;
  margin: 0 0 24px;
  color: var(--ink);
}
.title em {
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 100, "wght" 400;
  color: var(--accent);
}
.lede {
  font-style: italic;
  font-size: clamp(15px, 2vw, 18px);
  color: var(--ink-soft);
  max-width: 520px; margin: 0 auto;
  line-height: 1.55;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}
.byline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 3px;
  color: var(--ink-faded);
  text-transform: uppercase;
  margin-top: 28px;
  display: flex; align-items: center; justify-content: center; gap: 14px;
  flex-wrap: wrap;
}
.byline span { white-space: nowrap; }
.byline .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); display: inline-block; }

/* ── Year nav ───────────────────────────────── */
.years {
  display: flex;
  margin: 56px 0 64px;
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}
.year-btn {
  flex: 1;
  padding: 22px 8px 18px;
  background: transparent;
  border: 0;
  border-right: 1px solid var(--hairline);
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 144, "SOFT" 30, "wght" 400;
  font-size: clamp(28px, 5vw, 44px);
  color: var(--ink-faded);
  cursor: pointer;
  transition: color 0.25s, background 0.25s;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.year-btn:last-child { border-right: 0; }
.year-btn::after {
  content: attr(data-label);
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px; letter-spacing: 2.5px;
  color: var(--ink-faded);
  text-transform: uppercase;
  margin-top: 6px;
  font-variation-settings: normal;
}
.year-btn:hover { color: var(--ink); }
.year-btn.active {
  color: var(--accent);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 100, "wght" 420;
  background:
    radial-gradient(ellipse 100% 80% at 50% 100%, rgba(214,90,82,0.18), transparent 70%);
}
.year-btn.active::after { color: var(--accent); }

/* ── Chapter ────────────────────────────────── */
.chapter-head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: end;
  margin-bottom: 24px;
}
.chapter-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 4px;
  color: var(--ink-faded);
  text-transform: uppercase;
  margin-bottom: 14px;
}
.chapter-title {
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 144, "wght" 420;
  font-size: clamp(36px, 6vw, 64px);
  line-height: 0.95; letter-spacing: -0.015em;
  margin: 0 0 12px;
}
.chapter-school {
  font-style: italic;
  font-size: clamp(16px, 2vw, 19px);
  color: var(--ink-soft);
  font-variation-settings: "opsz" 36, "SOFT" 80;
}
.chapter-school strong {
  font-style: normal;
  font-variation-settings: "opsz" 36, "wght" 540;
  color: var(--ink);
}
.chapter-stamp {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 3px;
  color: var(--accent);
  text-align: right;
  text-transform: uppercase;
  border: 1px solid var(--accent);
  padding: 8px 14px;
  align-self: end;
  white-space: nowrap;
  background: rgba(214, 90, 82, 0.08);
  box-shadow: 0 0 24px -8px rgba(214, 90, 82, 0.4);
}
.chapter-note {
  font-style: italic;
  font-size: clamp(15px, 1.9vw, 18px);
  line-height: 1.65;
  color: var(--ink-soft);
  border-left: 2px solid var(--accent);
  padding: 6px 0 6px 22px;
  margin: 0 0 64px;
  max-width: 680px;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}

/* ── Semester ───────────────────────────────── */
.sem { margin-bottom: 56px; }
.sem-head {
  display: flex; align-items: baseline; gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--hairline);
  padding-bottom: 14px;
}
.sem-name {
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 36, "wght" 500;
  font-size: clamp(22px, 3.2vw, 30px);
  margin: 0;
  letter-spacing: -0.005em;
}
.sem-tag {
  font-style: italic;
  color: var(--ink-soft);
  font-size: clamp(13px, 1.6vw, 16px);
  flex: 1; min-width: 180px;
  font-variation-settings: "opsz" 24, "SOFT" 80;
}
.sem-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 1.8px;
  color: var(--ink-faded);
  text-transform: uppercase;
  white-space: nowrap;
  display: flex; gap: 8px; align-items: center;
}
.sem-load { color: var(--ink); }
.sem-load.heavy { color: var(--accent); }
.sem-load.break { color: var(--ink-faded); font-style: italic; font-family: 'Fraunces', serif; text-transform: none; letter-spacing: 0.5px; font-size: 13px; }

/* ── Course (TOC row with leader) ───────────── */
.course {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: baseline;
  column-gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--hairline-2);
  cursor: default;
  position: relative;
  transition: background 0.2s;
}
.course[data-clickable="true"] { cursor: pointer; }
.course[data-clickable="true"]:hover { background: var(--paper-soft); }
.course:last-child { border-bottom: 0; }
.course-bar {
  position: absolute; left: -16px; top: 18px; bottom: 18px; width: 3px;
  background: var(--type-accent);
  opacity: 0.85;
}
.course-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; font-weight: 500;
  letter-spacing: 0.4px;
  color: var(--ink-soft);
}
.course-name-wrap {
  display: flex; align-items: baseline; gap: 12px;
  min-width: 0;
}
.course-name {
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 36, "wght" 420;
  font-size: clamp(15px, 2vw, 19px);
  color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  flex: 0 1 auto;
}
.course-leader {
  flex: 1 1 auto;
  border-bottom: 1px dotted var(--hairline);
  height: 1px;
  transform: translateY(-5px);
  min-width: 12px;
}
.course-meta {
  display: flex; align-items: center; gap: 16px;
  white-space: nowrap;
}
.pips {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px; letter-spacing: 1.5px;
  color: #4a3f33;
}
.pips .on { color: var(--accent); }
.course-credits {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; color: var(--ink-soft);
  min-width: 42px; text-align: right;
}
.course-disc {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px; letter-spacing: 2px;
  color: var(--ink-faded);
  text-transform: uppercase;
  min-width: 60px; text-align: right;
  display: none;
}
.course-note {
  grid-column: 2 / -1;
  font-style: italic;
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.65;
  margin-top: 12px;
  padding: 14px 18px;
  background: var(--paper-deep);
  border-left: 2px solid var(--type-accent);
  font-variation-settings: "opsz" 24, "SOFT" 100;
  max-width: 680px;
}

/* ── Colophon / Footer ──────────────────────── */
.colophon {
  margin-top: 96px;
  padding-top: 40px;
  border-top: 1px solid var(--hairline);
}
.colophon-rule {
  text-align: center;
  font-family: 'Fraunces', serif;
  font-style: italic;
  color: var(--accent);
  font-size: 18px;
  margin-bottom: 36px;
  letter-spacing: 4px;
}
.colophon-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
}
.colophon h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--ink-faded);
  font-weight: 500;
  margin: 0 0 20px;
}
.legend-rows { display: flex; flex-direction: column; gap: 10px; }
.legend-item { display: flex; align-items: baseline; gap: 12px; }
.legend-item .pips { font-size: 10px; }
.legend-item .label {
  font-style: italic; font-size: 14px; color: var(--ink-soft);
  font-variation-settings: "opsz" 24, "SOFT" 80;
}

.opt-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
  padding: 12px 0;
  border-bottom: 1px solid var(--hairline-2);
  align-items: baseline;
}
.opt-row:last-child { border-bottom: 0; }
.opt-term {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 1.5px;
  color: var(--accent); text-transform: uppercase;
}
.opt-tip {
  font-style: italic; color: var(--ink-soft);
  font-size: 14px; line-height: 1.55;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}

.foot {
  text-align: center;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--hairline-2);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--ink-faded);
}
.foot em {
  font-family: 'Fraunces', serif;
  font-style: italic;
  text-transform: none;
  letter-spacing: 0;
  color: var(--accent);
  font-size: 13px;
  margin: 0 6px;
}

/* ── Tablet ──────────────────────────────────── */
@media (max-width: 720px) {
  .almanac { padding: 36px 22px 64px; }
  .almanac::after { background: radial-gradient(ellipse 140% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.3) 100%); }
  .masthead { margin-bottom: 44px; }
  .byline { gap: 10px; font-size: 9.5px; letter-spacing: 2.5px; }
  .years { margin: 40px 0 48px; }
  .year-btn { padding: 18px 6px 14px; min-height: 64px; }

  .chapter-head { grid-template-columns: 1fr; gap: 14px; }
  .chapter-stamp {
    justify-self: start; align-self: start;
    padding: 6px 10px;
    box-shadow: 0 0 16px -8px rgba(214, 90, 82, 0.5);
  }
  .chapter-note { margin-bottom: 48px; }

  .colophon-grid { grid-template-columns: 1fr; gap: 40px; }
  .colophon { margin-top: 64px; }
}

/* ── Phone ───────────────────────────────────── */
@media (max-width: 520px) {
  .almanac { padding: 24px 14px 44px; }
  .almanac::before { background-size: 100% 4px; }
  .almanac::after { display: none; }

  .frame { max-width: 100%; }

  .masthead { margin-bottom: 32px; }
  .eyebrow {
    letter-spacing: 2.5px; gap: 10px;
    margin-bottom: 20px; font-size: 10px;
  }
  .eyebrow::before, .eyebrow::after { max-width: 36px; }
  .title { letter-spacing: -0.02em; margin-bottom: 18px; }
  .title br { display: none; }
  .title em { white-space: nowrap; }
  .lede { font-size: 14px; padding: 0 4px; }
  .byline {
    margin-top: 20px; gap: 8px;
    font-size: 9px; letter-spacing: 2px;
  }
  .byline .dot { width: 3px; height: 3px; }

  .years { margin: 28px 0 36px; }
  .year-btn {
    padding: 16px 4px 12px;
    min-height: 60px;
    font-size: 26px;
  }
  .year-btn::after { font-size: 8px; letter-spacing: 1.5px; margin-top: 4px; }

  .chapter-head { gap: 10px; margin-bottom: 18px; }
  .chapter-num { font-size: 10px; letter-spacing: 3px; margin-bottom: 8px; }
  .chapter-title { font-size: 34px; }
  .chapter-school { font-size: 15px; line-height: 1.4; }
  .chapter-stamp { font-size: 9px; letter-spacing: 2px; }
  .chapter-note {
    font-size: 14.5px; padding: 4px 0 4px 16px;
    margin-bottom: 40px; line-height: 1.6;
  }

  .sem { margin-bottom: 36px; }
  .sem-head { gap: 6px 12px; padding-bottom: 10px; margin-bottom: 14px; }
  .sem-name { font-size: 22px; }
  .sem-tag { flex-basis: 100%; min-width: 0; font-size: 13px; }
  .sem-meta { font-size: 9.5px; letter-spacing: 1.4px; gap: 6px; }

  .course {
    grid-template-columns: 72px 1fr;
    column-gap: 12px; padding: 13px 0;
    min-height: 48px;
  }
  .course-bar { left: -8px; width: 2px; top: 14px; bottom: 14px; }
  .course-code { font-size: 10.5px; letter-spacing: 0.3px; }
  .course-name { white-space: normal; font-size: 15.5px; line-height: 1.35; }
  .course-leader { display: none; }
  .course-meta {
    grid-column: 2 / -1;
    margin-top: 6px;
    gap: 14px;
  }
  .pips { font-size: 8.5px; letter-spacing: 1.2px; }
  .course-credits { min-width: 0; text-align: left; font-size: 11px; }
  .course-note {
    grid-column: 1 / -1;
    margin-top: 12px;
    padding: 12px 14px;
    font-size: 13.5px;
    border-left-width: 2px;
  }

  .colophon { margin-top: 56px; padding-top: 32px; }
  .colophon-rule { font-size: 16px; margin-bottom: 28px; }
  .colophon h3 { font-size: 10px; letter-spacing: 3px; margin-bottom: 14px; }
  .legend-item .label { font-size: 13px; }

  .opt-row { grid-template-columns: 1fr; gap: 4px; padding: 10px 0; }
  .opt-term { font-size: 10px; letter-spacing: 1.5px; }
  .opt-tip { font-size: 13px; line-height: 1.5; }

  .foot { font-size: 9px; letter-spacing: 3px; padding-top: 20px; margin-top: 40px; }
  .foot em { font-size: 12px; }
}

/* ── Tiny phone ──────────────────────────────── */
@media (max-width: 360px) {
  .almanac { padding: 20px 12px 36px; }
  .title { font-size: 36px; }
  .year-btn { font-size: 22px; }
  .chapter-title { font-size: 28px; }
  .course { grid-template-columns: 64px 1fr; column-gap: 10px; }
  .course-code { font-size: 10px; }
}
`;

const Pips = ({ d }) => {
  if (!d) return null;
  return (
    <span className="pips" aria-label={`Difficulty ${d} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < d ? "on" : ""}>{i < d ? "●" : "○"}</span>
      ))}
    </span>
  );
};

export default function App() {
  const [activeYear, setActiveYear] = useState(0);
  const [expandedNote, setExpandedNote] = useState(null);
  const year = schedule[activeYear];

  return (
    <div className="almanac">
      <style>{css}</style>

      <div className="frame">
        {/* ── Masthead ── */}
        <header className="masthead">
          <div className="eyebrow">An Engineering Almanac · MMXXVI</div>
          <h1 className="title">
            The <em>Electrical</em><br/>Engineering Schedule
          </h1>
          <p className="lede">
            A four-year pacing guide from Langara College to the BCIT Bachelor of Engineering — twelve semesters, summers included, with the hardest courses deliberately isolated.
          </p>
          <div className="byline">
            <span>Vol. I</span><span className="dot" />
            <span>Langara → BCIT</span><span className="dot" />
            <span>4 Years · 12 Terms</span>
          </div>
        </header>

        {/* ── Year nav ── */}
        <nav className="years" aria-label="Year selector">
          {schedule.map((y, i) => (
            <button
              key={i}
              onClick={() => { setActiveYear(i); setExpandedNote(null); }}
              className={`year-btn ${activeYear === i ? "active" : ""}`}
              data-label={y.schoolShort}
            >
              {roman[i]}
            </button>
          ))}
        </nav>

        {/* ── Chapter ── */}
        <section>
          <div className="chapter-head">
            <div>
              <div className="chapter-num">Chapter {roman[activeYear]} · Anno {activeYear + 1}</div>
              <h2 className="chapter-title">Year {roman[activeYear]}</h2>
              <div className="chapter-school">
                <strong>{year.school.split(" — ")[0]}</strong>
                {year.school.includes(" — ") && <> — <em>{year.school.split(" — ")[1]}</em></>}
              </div>
            </div>
            <div className="chapter-stamp">{year.schoolShort}</div>
          </div>
          <p className="chapter-note">{year.note}</p>

          {year.semesters.map((sem, si) => {
            const semCredits = sem.courses.reduce((s, c) => s + c.credits, 0);
            const isHeavy = sem.load === "Heavy" || sem.load === "Very Heavy";
            const isBreak = sem.load === "Break";
            return (
              <div key={si} className="sem">
                <div className="sem-head">
                  <h3 className="sem-name">{sem.name}</h3>
                  <span className="sem-tag">— {sem.tag}</span>
                  <span className="sem-meta">
                    <span className={`sem-load ${isHeavy ? "heavy" : ""} ${isBreak ? "break" : ""}`}>
                      {sem.load}
                    </span>
                    {semCredits > 0 && <><span>·</span><span>{semCredits} cr</span></>}
                  </span>
                </div>
                {sem.courses.map((course, ci) => {
                  const key = `${si}-${ci}`;
                  const isExpanded = expandedNote === key;
                  const accent = typeAccent[course.type] || typeAccent.elec;
                  const clickable = !!course.note;
                  return (
                    <div
                      key={ci}
                      className="course"
                      data-clickable={clickable}
                      style={{ "--type-accent": accent }}
                      onClick={() => clickable ? setExpandedNote(isExpanded ? null : key) : null}
                      title={typeLabel[course.type]}
                    >
                      <span className="course-bar" />
                      <span className="course-code">{course.code}</span>
                      <span className="course-name-wrap">
                        <span className="course-name">{course.name}</span>
                        <span className="course-leader" />
                      </span>
                      <span className="course-meta">
                        <Pips d={course.diff} />
                        {course.credits > 0 && (
                          <span className="course-credits">{course.credits} cr</span>
                        )}
                      </span>
                      {isExpanded && course.note && (
                        <div className="course-note">{course.note}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>

        {/* ── Colophon ── */}
        <footer className="colophon">
          <div className="colophon-rule">❦ ❦ ❦</div>
          <div className="colophon-grid">
            <div>
              <h3>Difficulty Scale</h3>
              <div className="legend-rows">
                {[
                  { d: 1, label: "Easy" },
                  { d: 2, label: "Moderate" },
                  { d: 3, label: "Challenging" },
                  { d: 4, label: "Hard" },
                  { d: 5, label: "Very Hard" },
                ].map(({ d, label }) => (
                  <div key={d} className="legend-item">
                    <Pips d={d} />
                    <span className="label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Editorial Notes — Key Optimizations</h3>
              {[
                ["Y1 Summer", "Physics II (the year's hardest course) taken alone — never alongside Integral Calculus."],
                ["Y1 Spring", "Linear Algebra moved out — would otherwise stack two heavy maths."],
                ["Year III", "Signals & Systems and Electromagnetic Theory split into separate terms."],
                ["Y4 Fall", "Lighter course load during the mandatory four-month work term."],
                ["Y1 Fall", "No physics in the first semester — math foundation built first."],
              ].map(([term, tip]) => (
                <div key={term} className="opt-row">
                  <span className="opt-term">{term}</span>
                  <span className="opt-tip">{tip}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="foot">
            Tap any course <em>to read the editorial note.</em> Course codes representative.
          </div>
        </footer>
      </div>
    </div>
  );
}
