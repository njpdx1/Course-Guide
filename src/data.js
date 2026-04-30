// ════════════════════════════════════════════════════════════════
// Course curricula for transfer pathways out of Langara College.
//
// Verified against:
//   • Langara Engineering Transfer Certificate
//   • Langara CS Associate of Science (representative — flexible)
//   • UBC ECE — BASc Electrical (ELEC) and Computer Engineering (CPEN)
//   • UBC Faculty of Science — BSc Computer Science Major
//   • BCIT BEng Electrical (8030BENG, 8 levels)
//   • BCIT CST Diploma (5500DIPMA) + CST BTech (Y3/Y4 option-specific)
//
// Course codes/credits should be re-verified with advisors before
// registration — programs change year to year.
// ════════════════════════════════════════════════════════════════

// ── LANGARA Year 1 — Engineering Transfer Certificate ─────────────
// Used by UBC EE and UBC CPEN tracks.
const langaraEngY1 = {
  year: 1,
  label: "Year 1",
  school: "Langara College — Engineering Transfer Certificate",
  schoolShort: "LANGARA",
  accent: "#a8c46a",
  note: "One-year, two-term certificate articulated to UBC Engineering. Min C- in every course required to progress; min 3.10 GPA needed for guaranteed UBC Year-2 admission.",
  semesters: [
    {
      name: "Fall — Term 1",
      tag: "Foundation",
      tagColor: "#a8c46a",
      load: "Heavy",
      courses: [
        { code: "MATH 1171", name: "Calculus I", credits: 3, type: "math", diff: 3, note: "First calculus course." },
        { code: "PHYS 1125", name: "Physics I with Calculus", credits: 4, type: "physics", diff: 3 },
        { code: "CHEM 1154", name: "Engineering Chemistry", credits: 4, type: "science", diff: 2 },
        { code: "CPSC 1155", name: "Program Design for Engineers", credits: 3, type: "cs", diff: 2 },
        { code: "CPSC 1091", name: "Engineering Design and Drafting", credits: 3, type: "eng", diff: 2 },
        { code: "ENGL 1123", name: "Introduction to Academic Writing", credits: 3, type: "comm", diff: 1 },
        { code: "APSC 1000", name: "Introduction to Engineering I", credits: 0, type: "eng", diff: 1 },
      ],
    },
    {
      name: "Spring — Term 2",
      tag: "Core Math & Physics",
      tagColor: "#7ba3d4",
      load: "Very Heavy",
      courses: [
        { code: "MATH 1271", name: "Calculus II", credits: 3, type: "math", diff: 4, note: "Heaviest math of Year 1." },
        { code: "MATH 2362", name: "Linear Algebra", credits: 3, type: "math", diff: 3, note: "Pairs with mandatory MATH 2382 lab." },
        { code: "MATH 2382", name: "Linear Algebra Laboratory", credits: 1, type: "math", diff: 1 },
        { code: "PHYS 1219", name: "Engineering Mechanics", credits: 4, type: "physics", diff: 4 },
        { code: "PHYS 1225", name: "Physics II with Calculus", credits: 4, type: "physics", diff: 4, note: "Hardest Langara course for most students." },
        { code: "CPSC 1491", name: "Control Systems & Sustainable Engineering Design", credits: 3, type: "eng", diff: 3 },
        { code: "CMNS 2228", name: "Advanced Written Communications", credits: 3, type: "comm", diff: 1 },
        { code: "APSC 1100", name: "Introduction to Engineering II", credits: 0, type: "eng", diff: 1 },
      ],
    },
    {
      name: "Summer — Application Window",
      tag: "Apply & Prepare",
      tagColor: "#d4a86a",
      load: "Break",
      courses: [
        { code: "—", name: "UBC / BCIT applications submitted by deadline", credits: 0, type: "break", diff: 0, note: "UBC Engineering Transfer: apply by Jan 15. Final April grades drive the decision." },
        { code: "OPT", name: "Optional review of calculus and physics", credits: 0, type: "break", diff: 0 },
      ],
    },
  ],
};

// ── LANGARA Years 1-2 — CS Associate of Science ─────────────────
// Used by UBC CS (and as Year 1 of BCIT Computing track).
const langaraCsY1 = {
  year: 1,
  label: "Year 1",
  school: "Langara College — CS Associate of Science (Year 1)",
  schoolShort: "LANGARA",
  accent: "#5fb8b8",
  note: "Different program from the Engineering Transfer Cert — this is a 2-year Associate of Science with CS focus. Goes through UBC Faculty of Science (not Engineering). Aim for CS specialization at end of UBC Year 2.",
  semesters: [
    {
      name: "Fall — Term 1",
      tag: "CS Foundations",
      tagColor: "#5fb8b8",
      load: "Moderate",
      courses: [
        { code: "CPSC 1150", name: "Program Design", credits: 3, type: "cs", diff: 2, note: "Articulates to UBC CPSC 110." },
        { code: "MATH 1171", name: "Calculus I", credits: 3, type: "math", diff: 3 },
        { code: "ENGL 1123", name: "Introduction to Academic Writing", credits: 3, type: "comm", diff: 1 },
        { code: "PHYS 1118", name: "Physics for Non-Engineers (or sci elective)", credits: 3, type: "science", diff: 2 },
        { code: "Arts Elective", name: "Arts / breadth elective", credits: 3, type: "comm", diff: 1 },
      ],
    },
    {
      name: "Spring — Term 2",
      tag: "Algorithms & Theory",
      tagColor: "#7ba3d4",
      load: "Heavy",
      courses: [
        { code: "CPSC 1160", name: "Algorithms & Data Structures I", credits: 3, type: "cs", diff: 3, note: "Articulates to UBC CPSC 121." },
        { code: "CPSC 1181", name: "Object-Oriented Programming (Java)", credits: 3, type: "cs", diff: 3 },
        { code: "MATH 1271", name: "Calculus II", credits: 3, type: "math", diff: 4 },
        { code: "Sci Elective", name: "Science elective", credits: 3, type: "science", diff: 2 },
        { code: "Arts Elective", name: "Arts / breadth elective", credits: 3, type: "comm", diff: 1 },
      ],
    },
    {
      name: "Summer",
      tag: "Optional Acceleration",
      tagColor: "#7bc485",
      load: "Break",
      courses: [
        { code: "OPT", name: "Optional summer course (CPSC 2150 or breadth)", credits: 0, type: "break", diff: 0, note: "Langara offers some summer CS courses — useful for accelerating to UBC Y3 entry." },
      ],
    },
  ],
};

const langaraCsY2 = {
  year: 2,
  label: "Year 2",
  school: "Langara College — CS Associate of Science (Year 2)",
  schoolShort: "LANGARA",
  accent: "#5fb8b8",
  note: "Second year of the Associate. Articulates to UBC for Year 3 entry — finishing 60 credits with strong grades opens the path to Faculty of Science admission and CS specialization.",
  semesters: [
    {
      name: "Fall — Term 3",
      tag: "Systems + Linear Algebra",
      tagColor: "#5fb8b8",
      load: "Heavy",
      courses: [
        { code: "CPSC 2150", name: "Computer Architecture", credits: 3, type: "cs", diff: 3, note: "Articulates to UBC CPSC 213." },
        { code: "CPSC 2170", name: "Operating Systems Fundamentals", credits: 3, type: "cs", diff: 3 },
        { code: "MATH 2362", name: "Linear Algebra", credits: 3, type: "math", diff: 3 },
        { code: "STAT 1181", name: "Statistics", credits: 3, type: "math", diff: 2 },
        { code: "Arts Elective", name: "Arts / breadth elective", credits: 3, type: "comm", diff: 1 },
      ],
    },
    {
      name: "Spring — Term 4",
      tag: "Algorithms + Breadth",
      tagColor: "#7ba3d4",
      load: "Heavy",
      courses: [
        { code: "CPSC 2911", name: "CS Elective (e.g. Web / Networking)", credits: 3, type: "cs", diff: 3 },
        { code: "MATH or STAT", name: "Math / Stats elective", credits: 3, type: "math", diff: 2 },
        { code: "Sci Elective", name: "Science elective", credits: 3, type: "science", diff: 2 },
        { code: "Arts Elective", name: "Arts / breadth elective", credits: 3, type: "comm", diff: 1 },
        { code: "Open Elective", name: "Open elective", credits: 3, type: "comm", diff: 1 },
      ],
    },
    {
      name: "Summer — UBC Apply",
      tag: "Transfer Window",
      tagColor: "#d4a86a",
      load: "Break",
      courses: [
        { code: "—", name: "Apply to UBC Faculty of Science", credits: 0, type: "break", diff: 0, note: "Submit by deadline. CS specialization decided after Year 3 winter at UBC — strong grades matter." },
      ],
    },
  ],
};

// ── UBC ELECTRICAL (BASc) — Years 2-4 ────────────────────────────
const ubcEeYears = [
  langaraEngY1,
  {
    year: 2,
    label: "Year 2",
    school: "UBC — Engineering 2nd Year (Electrical)",
    schoolShort: "UBC",
    accent: "#d65a52",
    note: "Enter UBC as Year 2 with guaranteed admission. EE specialization decided at end of this year via Program Placement.",
    semesters: [
      {
        name: "Winter Term 1", tag: "Circuits + Linear Maths", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "ELEC 201", name: "Circuit Analysis I", credits: 4, type: "elec", diff: 4 },
          { code: "CPEN 211", name: "Introduction to Microcomputers", credits: 5, type: "digital", diff: 4 },
          { code: "CPSC 259", name: "Data Structures & Algorithms for EE", credits: 4, type: "cs", diff: 3 },
          { code: "MATH 253", name: "Multivariable Calculus", credits: 3, type: "math", diff: 3 },
          { code: "MATH 255", name: "Ordinary Differential Equations", credits: 3, type: "math", diff: 4 },
          { code: "MATH 264", name: "Vector Calculus for EE", credits: 1, type: "math", diff: 2 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Signals + Design Studio", tagColor: "#7ba3d4", load: "Heavy",
        courses: [
          { code: "ELEC 202", name: "Circuit Analysis II", credits: 4, type: "elec", diff: 4 },
          { code: "ELEC 211", name: "Electromechanical Devices", credits: 2, type: "elec", diff: 2 },
          { code: "ELEC 221", name: "Signals and Systems", credits: 4, type: "elec", diff: 5, note: "Conceptually one of the hardest EE courses." },
          { code: "ELEC 281", name: "Principles of Electrical Engineering", credits: 3, type: "digital", diff: 3 },
          { code: "ELEC 291", name: "Engineering Design Studio I", credits: 6, type: "capstone", diff: 4 },
        ],
      },
      {
        name: "Summer — Program Placement", tag: "Decision Point", tagColor: "#d4a86a", load: "Break",
        courses: [
          { code: "—", name: "Program Placement results released", credits: 0, type: "break", diff: 0, note: "EE seat confirmed based on winter GPA + statement." },
          { code: "OPT", name: "Optional UBC Engineering Co-op (paid)", credits: 0, type: "work", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 3,
    label: "Year 3",
    school: "UBC — Electrical Engineering (3rd Year)",
    schoolShort: "UBC",
    accent: "#d65a52",
    note: "EE specialization in full force. Electromagnetics + Signals split across separate terms.",
    semesters: [
      {
        name: "Winter Term 1", tag: "Electronics + Probability", tagColor: "#7ba3d4", load: "Heavy",
        courses: [
          { code: "ELEC 301", name: "Electronic Circuits", credits: 4, type: "elec", diff: 4 },
          { code: "ELEC 315", name: "Electromechanics", credits: 4, type: "power", diff: 3 },
          { code: "MATH 302", name: "Introduction to Probability", credits: 3, type: "math", diff: 3 },
          { code: "Comp Studies", name: "Complementary Studies Elective", credits: 3, type: "comm", diff: 2 },
          { code: "Comp Studies", name: "Complementary Studies Elective", credits: 3, type: "comm", diff: 2 },
        ],
      },
      {
        name: "Winter Term 2", tag: "EM Theory + Design Studio II", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "ELEC 311", name: "Electromagnetic Fields and Waves", credits: 4, type: "elec", diff: 5, note: "Hardest EE theory course at UBC." },
          { code: "ELEC 341", name: "Continuous-Time Signal & System Analysis", credits: 4, type: "elec", diff: 4 },
          { code: "ELEC 342", name: "Discrete-Time Signal & System Analysis", credits: 4, type: "digital", diff: 4 },
          { code: "ELEC 391", name: "Engineering Design Studio II", credits: 6, type: "capstone", diff: 4 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "elec", diff: 3 },
        ],
      },
      {
        name: "Summer — Co-op Window", tag: "Co-op or Recovery", tagColor: "#7bc485", load: "Break",
        courses: [
          { code: "OPT", name: "Optional 4-month Co-op placement", credits: 0, type: "work", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "UBC — Electrical Engineering (Final Year)",
    schoolShort: "UBC",
    accent: "#d65a52",
    note: "Capstone year. ELEC 491 spans both terms (10 credits total).",
    semesters: [
      {
        name: "Winter Term 1", tag: "Capstone Begins", tagColor: "#d65a52", load: "Heavy",
        courses: [
          { code: "ELEC 491", name: "Capstone Design Project — Phase I", credits: 5, type: "capstone", diff: 4 },
          { code: "APSC 450", name: "Professional Engineering Practice", credits: 2, type: "comm", diff: 2 },
          { code: "Tech Elective", name: "Technical Elective (Stream)", credits: 3, type: "elec", diff: 3 },
          { code: "Tech Elective", name: "Technical Elective (Stream)", credits: 3, type: "elec", diff: 3 },
          { code: "Sci Elective", name: "Science Elective", credits: 3, type: "science", diff: 2 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Capstone & Graduation", tagColor: "#e6c259", load: "Heavy",
        courses: [
          { code: "ELEC 491", name: "Capstone Design Project — Phase II", credits: 5, type: "capstone", diff: 5 },
          { code: "ELEC 481", name: "Engineering Economic Analysis", credits: 3, type: "comm", diff: 2 },
          { code: "Tech Elective", name: "Technical Elective", credits: 3, type: "elec", diff: 3 },
          { code: "Tech Elective", name: "Technical Elective", credits: 3, type: "elec", diff: 3 },
          { code: "Tech Elective", name: "Technical Elective", credits: 3, type: "elec", diff: 3 },
        ],
      },
      {
        name: "Summer — Convocation", tag: "Graduation", tagColor: "#e6c259", load: "Done",
        courses: [
          { code: "🎓", name: "BASc Electrical Engineering — UBC", credits: 0, type: "grad", diff: 0, note: "Eligible for P.Eng. (EIT) registration with EGBC." },
        ],
      },
    ],
  },
];

// ── UBC COMPUTER ENGINEERING (BASc, CPEN) — Years 2-4 ─────────────
const ubcCpenYears = [
  langaraEngY1,
  {
    year: 2,
    label: "Year 2",
    school: "UBC — Engineering 2nd Year (Computer)",
    schoolShort: "UBC",
    accent: "#7ba8c9",
    note: "Same Engineering Transfer entry as EE. CPEN specialization decided via Program Placement at end of this year — historically among the more competitive EE/CPEN seats.",
    semesters: [
      {
        name: "Winter Term 1", tag: "Microcomputers + Software", tagColor: "#7ba8c9", load: "Heavy",
        courses: [
          { code: "CPEN 211", name: "Introduction to Microcomputers", credits: 5, type: "digital", diff: 4 },
          { code: "CPEN 221", name: "Software Construction I", credits: 5, type: "cs", diff: 4 },
          { code: "CPEN 281", name: "ECE Professional Development", credits: 3, type: "comm", diff: 1 },
          { code: "MATH 253", name: "Multivariable Calculus", credits: 3, type: "math", diff: 3 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Digital + Algorithms", tagColor: "#d65a52", load: "Heavy",
        courses: [
          { code: "CPEN 212", name: "Digital Systems and Microcomputers", credits: 4, type: "digital", diff: 4 },
          { code: "CPSC 221", name: "Basic Algorithms and Data Structures", credits: 4, type: "cs", diff: 4 },
          { code: "ELEC 201", name: "Circuit Analysis I", credits: 4, type: "elec", diff: 4 },
          { code: "MATH 220", name: "Mathematical Proof", credits: 3, type: "math", diff: 3 },
          { code: "Comp Studies", name: "Complementary Studies Elective", credits: 3, type: "comm", diff: 2 },
        ],
      },
      {
        name: "Summer — Program Placement", tag: "Decision Point", tagColor: "#d4a86a", load: "Break",
        courses: [
          { code: "—", name: "Program Placement results released", credits: 0, type: "break", diff: 0 },
          { code: "OPT", name: "Optional UBC Engineering Co-op (paid)", credits: 0, type: "work", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 3,
    label: "Year 3",
    school: "UBC — Computer Engineering (3rd Year)",
    schoolShort: "UBC",
    accent: "#7ba8c9",
    note: "OS, design studio, algorithms — the heart of the CPEN core. Year-long Design Studio in Term 2.",
    semesters: [
      {
        name: "Winter Term 1", tag: "Operating Systems + Probability", tagColor: "#7ba8c9", load: "Heavy",
        courses: [
          { code: "CPEN 331", name: "Operating Systems", credits: 4, type: "cs", diff: 4, note: "OS/161 kernel project — heaviest single CPEN course for many." },
          { code: "MATH 302", name: "Introduction to Probability (or MATH 318 / STAT 302)", credits: 3, type: "math", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Design Studio II + Algorithms", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "CPEN 391", name: "Computer Engineering Design Studio II", credits: 6, type: "capstone", diff: 4 },
          { code: "CPSC 320", name: "Intermediate Algorithm Design and Analysis", credits: 3, type: "cs", diff: 4 },
          { code: "Comp Studies", name: "Complementary Studies Elective", credits: 3, type: "comm", diff: 2 },
          { code: "Comp Studies", name: "Complementary Studies Elective", credits: 3, type: "comm", diff: 2 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
        ],
      },
      {
        name: "Summer — Co-op Window", tag: "Co-op or Recovery", tagColor: "#7bc485", load: "Break",
        courses: [
          { code: "OPT", name: "Optional 4-month Co-op placement", credits: 0, type: "work", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "UBC — Computer Engineering (Final Year)",
    schoolShort: "UBC",
    accent: "#7ba8c9",
    note: "Capstone year. CPEN 491 spans both terms (10 credits). Heavy specialization in chosen sub-area.",
    semesters: [
      {
        name: "Winter Term 1", tag: "Capstone Begins", tagColor: "#d65a52", load: "Heavy",
        courses: [
          { code: "CPEN 491", name: "Computer Engineering Design Project — Phase I", credits: 5, type: "capstone", diff: 4 },
          { code: "APSC 450", name: "Professional Engineering Practice", credits: 2, type: "comm", diff: 2 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Sci Elective", name: "Science Elective", credits: 3, type: "science", diff: 2 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Capstone & Graduation", tagColor: "#e6c259", load: "Heavy",
        courses: [
          { code: "CPEN 491", name: "Computer Engineering Design Project — Phase II", credits: 5, type: "capstone", diff: 5 },
          { code: "CPEN 481", name: "Engineering Economics", credits: 3, type: "comm", diff: 2 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
          { code: "Tech Elective", name: "CPEN Technical Elective", credits: 3, type: "digital", diff: 3 },
        ],
      },
      {
        name: "Summer — Convocation", tag: "Graduation", tagColor: "#e6c259", load: "Done",
        courses: [
          { code: "🎓", name: "BASc Computer Engineering — UBC", credits: 0, type: "grad", diff: 0, note: "Eligible for P.Eng. (EIT) registration with EGBC." },
        ],
      },
    ],
  },
];

// ── UBC COMPUTER SCIENCE (BSc, CS Major) — Years 3-4 ─────────────
const ubcCsYears = [
  langaraCsY1,
  langaraCsY2,
  {
    year: 3,
    label: "Year 3",
    school: "UBC — Computer Science (BSc, Year 3)",
    schoolShort: "UBC",
    accent: "#5fb8b8",
    note: "First UBC year. Faculty of Science. CS specialization (Major / Honours / Combined) decided after winter term of this year — competitive.",
    semesters: [
      {
        name: "Winter Term 1", tag: "CS Core Begins", tagColor: "#5fb8b8", load: "Heavy",
        courses: [
          { code: "CPSC 210", name: "Software Construction", credits: 4, type: "cs", diff: 4 },
          { code: "CPSC 221", name: "Basic Algorithms and Data Structures", credits: 4, type: "cs", diff: 4 },
          { code: "MATH 200", name: "Calculus III", credits: 3, type: "math", diff: 3 },
          { code: "Sci Elective", name: "Science Elective", credits: 3, type: "science", diff: 2 },
          { code: "Arts Elective", name: "Arts / breadth Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Systems + Specialization Apply", tagColor: "#7ba3d4", load: "Heavy",
        courses: [
          { code: "CPSC 213", name: "Introduction to Computer Systems", credits: 4, type: "cs", diff: 4 },
          { code: "MATH 221", name: "Matrix Algebra", credits: 3, type: "math", diff: 2 },
          { code: "STAT 251", name: "Elementary Statistics (or STAT 241)", credits: 3, type: "math", diff: 2 },
          { code: "CPSC Elective", name: "CPSC 300-level Elective", credits: 3, type: "cs", diff: 3 },
          { code: "Arts Elective", name: "Arts / breadth Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Summer — CS Placement", tag: "Specialization Decided", tagColor: "#d4a86a", load: "Break",
        courses: [
          { code: "—", name: "CS Major / Honours admission decision", credits: 0, type: "break", diff: 0, note: "Notification email late May / early June. Competitive — strong CPSC 210/221/213 grades matter." },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "UBC — Computer Science (Final Year)",
    schoolShort: "UBC",
    accent: "#5fb8b8",
    note: "400-level CS courses required for the Major. ≥21 upper-level credits to graduate. Strong opportunity for CPSC 449/304 (DBs), 425 (graphics), 422 (intelligent systems), 415 (parallel), or research project (CPSC 448/449).",
    semesters: [
      {
        name: "Winter Term 1", tag: "Advanced CS", tagColor: "#5fb8b8", load: "Heavy",
        courses: [
          { code: "CPSC 310", name: "Introduction to Software Engineering", credits: 4, type: "cs", diff: 4 },
          { code: "CPSC 313", name: "Computer Hardware and Operating Systems", credits: 3, type: "cs", diff: 4 },
          { code: "CPSC 320", name: "Intermediate Algorithm Design and Analysis", credits: 3, type: "cs", diff: 4 },
          { code: "CPSC 4xx", name: "CPSC 400-level Elective (lecture-based)", credits: 3, type: "cs", diff: 4 },
          { code: "Arts Elective", name: "Arts / breadth Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Winter Term 2", tag: "Capstone Electives", tagColor: "#7ba8c9", load: "Heavy",
        courses: [
          { code: "CPSC 4xx", name: "CPSC 400-level Elective", credits: 3, type: "cs", diff: 4 },
          { code: "CPSC 4xx", name: "CPSC 400-level Elective", credits: 3, type: "cs", diff: 4 },
          { code: "CPSC 3xx", name: "CPSC 300-level Elective", credits: 3, type: "cs", diff: 3 },
          { code: "Sci Elective", name: "Science Elective", credits: 3, type: "science", diff: 2 },
          { code: "Open Elective", name: "Open Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Summer — Convocation", tag: "Graduation", tagColor: "#e6c259", load: "Done",
        courses: [
          { code: "🎓", name: "BSc Computer Science — UBC", credits: 0, type: "grad", diff: 0, note: "Faculty of Science degree. Direct entry to industry or graduate school." },
        ],
      },
    ],
  },
];

// ── BCIT ELECTRICAL (BEng) — Years 1-5 ───────────────────────────
const bcitEeYears = [
  langaraEngY1,
  {
    year: 2,
    label: "Year 2",
    school: "BCIT — BEng Level 1 (ECET First Year)",
    schoolShort: "BCIT",
    accent: "#d4a86a",
    note: "Langara cert does NOT directly transfer to BCIT BEng. You must complete BCIT's own Level 1 at ≥ 75% to progress. Some Langara math/physics may PLAR — verify with a BCIT advisor.",
    semesters: [
      {
        name: "Fall — Level 1", tag: "ECET Foundation", tagColor: "#d4a86a", load: "Heavy",
        courses: [
          { code: "ELEX 1105", name: "Circuit Analysis 1", credits: 6, type: "elec", diff: 4 },
          { code: "MATH 1431", name: "Technical Mathematics for Electronics", credits: 6, type: "math", diff: 3, note: "May PLAR from Langara MATH 1171/1271." },
          { code: "PHYS 1143", name: "Physics for Electronics 1", credits: 5, type: "physics", diff: 3 },
          { code: "ELEX 1117", name: "Digital Techniques 1", credits: 5, type: "digital", diff: 3 },
          { code: "ELEX 1113", name: "Electronic Fabrication Tools and Techniques", credits: 5, type: "eng", diff: 2 },
          { code: "COMM 1143", name: "Technical Communications 1 for ECE", credits: 3, type: "comm", diff: 1 },
          { code: "ELEX 0304", name: "Learning Skills for ECE Technology", credits: 0, type: "eng", diff: 1 },
        ],
      },
      {
        name: "Spring — Level 2 (Term A)", tag: "AC + Electronics + C", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "ELEX 2105", name: "Circuit Analysis 2", credits: 5, type: "elec", diff: 4 },
          { code: "ELEX 2120", name: "Electronic Circuits 1", credits: 6, type: "elec", diff: 4 },
          { code: "ELEX 2117", name: "Digital Techniques 2", credits: 5, type: "digital", diff: 3 },
          { code: "ELEX 2125", name: "C Programming for Electronics", credits: 4, type: "cs", diff: 3 },
          { code: "MATH 2431", name: "Calculus for Electronics", credits: 5, type: "math", diff: 4 },
          { code: "PHYS 2143", name: "Physics for Electronics 2", credits: 5, type: "physics", diff: 3 },
        ],
      },
      {
        name: "Spring — Level 2 (Term B, 4 wks)", tag: "Modular Skills Block", tagColor: "#7ba3d4", load: "Moderate",
        courses: [
          { code: "COMM 1243", name: "Technical Documentation", credits: 1, type: "comm", diff: 1 },
          { code: "ELEX 1101", name: "Introduction to Codes and Standards", credits: 1, type: "eng", diff: 1 },
          { code: "ELEX 1103", name: "Introductory Networking", credits: 2, type: "digital", diff: 2 },
          { code: "ELEX 1104", name: "Engineering Spreadsheets", credits: 1.5, type: "cs", diff: 1 },
        ],
      },
      {
        name: "Summer — BEng Application", tag: "Compete for L3 Seat", tagColor: "#d4a86a", load: "Break",
        courses: [
          { code: "—", name: "BEng Level 3 admission decided", credits: 0, type: "break", diff: 0, note: "Recent admit averages > 85%. Highly competitive." },
        ],
      },
    ],
  },
  {
    year: 3,
    label: "Year 3",
    school: "BCIT — BEng Levels 3 & 4",
    schoolShort: "BCIT",
    accent: "#d4a86a",
    note: "First true BEng year. Microcontrollers + electronic circuits + transform calculus stack here.",
    semesters: [
      {
        name: "Fall — Level 3", tag: "Microcontrollers + Transforms", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "ELEX 3120", name: "Electronic Circuits 2", credits: 6, type: "elec", diff: 4 },
          { code: "ELEX 3210", name: "Sensors for Measurement and Control", credits: 5, type: "elec", diff: 3 },
          { code: "ELEX 3305", name: "Microcontroller Systems", credits: 6, type: "digital", diff: 4 },
          { code: "MATH 3433", name: "Transform Calculus and Statistics for Electronics", credits: 4, type: "math", diff: 4 },
          { code: "MATH 3620", name: "Differential Equations and Linear Algebra", credits: 5, type: "math", diff: 4 },
          { code: "ENGR 3800", name: "Introduction to Professional Engineering", credits: 3, type: "comm", diff: 1 },
          { code: "COMM 3690", name: "Technical Communication for Engineering", credits: 1, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Spring — Level 4 (Term A)", tag: "Engineering Sciences", tagColor: "#7ba3d4", load: "Very Heavy",
        courses: [
          { code: "ELEX 4618", name: "Object Oriented Program Design", credits: 5, type: "cs", diff: 3 },
          { code: "MATH 4620", name: "Multivariable and Vector Calculus", credits: 4, type: "math", diff: 4 },
          { code: "MECH 4630", name: "Statics and Dynamics", credits: 5, type: "physics", diff: 3 },
          { code: "MECH 4640", name: "Thermodynamics", credits: 4, type: "physics", diff: 3 },
          { code: "CHEM 3615", name: "Engineering Chemistry", credits: 5.5, type: "science", diff: 2 },
          { code: "MKTG 4690", name: "Marketing & Communication for Engineers", credits: 3, type: "comm", diff: 2 },
        ],
      },
      {
        name: "Spring — Level 4 (Term B / Work Term)", tag: "Term B or Work Term", tagColor: "#7bc485", load: "Moderate + Work",
        courses: [
          { code: "ELEX 4651", name: "Programmable Logic Controllers (Term B)", credits: 1.5, type: "elec", diff: 2 },
          { code: "ELEX 4652", name: "Industrial Electrical System Design (Term B)", credits: 1.5, type: "elec", diff: 2 },
          { code: "ELEX 4699", name: "Electronics System Design Project (Term B)", credits: 1.5, type: "eng", diff: 2 },
          { code: "ELEX 6992", name: "Workplace Education Workterm (alternative)", credits: 19, type: "work", diff: 0, note: "If chosen here, fills Term B + summer. Otherwise scheduled between L6 and L7." },
        ],
      },
      {
        name: "Summer", tag: "Break / Co-op", tagColor: "#7bc485", load: "Break",
        courses: [
          { code: "—", name: "Summer break (or work term continues)", credits: 0, type: "break", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "BCIT — BEng Levels 5 & 6",
    schoolShort: "BCIT",
    accent: "#d4a86a",
    note: "Heaviest theory year. Electromagnetics + advanced circuits + DSP + comms.",
    semesters: [
      {
        name: "Fall — Level 5", tag: "Electromagnetics + Theory", tagColor: "#d65a52", load: "Very Heavy",
        courses: [
          { code: "ELEX 7520", name: "Advanced Circuit Analysis", credits: 5, type: "elec", diff: 4 },
          { code: "ELEX 7530", name: "Electromagnetics Fundamentals", credits: 5, type: "elec", diff: 5, note: "Hardest theory course in the BEng." },
          { code: "ELEX 7610", name: "Linear Physical Systems", credits: 5, type: "elec", diff: 4 },
          { code: "CHSC 7540", name: "Engineering Materials", credits: 4, type: "science", diff: 2 },
          { code: "MATH 7510", name: "Engineering Probability and Statistics", credits: 3, type: "math", diff: 3 },
          { code: "LIBS 7001", name: "Critical Reading and Writing", credits: 3, type: "comm", diff: 1 },
          { code: "OPMT 7000", name: "Time Value of Money", credits: 0.5, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Spring — Level 6", tag: "DSP + Communications", tagColor: "#7ba3d4", load: "Very Heavy",
        courses: [
          { code: "ELEX 7550", name: "Power System Components", credits: 4.5, type: "power", diff: 3 },
          { code: "ELEX 7620", name: "Signal Processing and Filters", credits: 5, type: "digital", diff: 4 },
          { code: "ELEX 7640", name: "Analog and Digital Communications", credits: 5, type: "elec", diff: 4 },
          { code: "ELEX 7660", name: "Digital System Design", credits: 4, type: "digital", diff: 3 },
          { code: "ENGR 7480", name: "Environment, Energy and Engineering", credits: 4, type: "science", diff: 2 },
          { code: "OPMT 7031", name: "Engineering Economics", credits: 3, type: "comm", diff: 2 },
        ],
      },
      {
        name: "Summer — Work Term", tag: "Mandatory Work Term", tagColor: "#7bc485", load: "Moderate + Work",
        courses: [
          { code: "ELEX 6992", name: "Workplace Education Workterm", credits: 19, type: "work", diff: 0, note: "Required for graduation if not taken at L4." },
        ],
      },
    ],
  },
  {
    year: 5,
    label: "Year 5",
    school: "BCIT — BEng Levels 7 & 8 (Capstone)",
    schoolShort: "BCIT",
    accent: "#d4a86a",
    note: "Capstone year. Two design-elective tracks (13.5 cr each) chosen from a pool of 9 specializations.",
    semesters: [
      {
        name: "Fall — Level 7", tag: "Capstone Initiation", tagColor: "#d65a52", load: "Heavy",
        courses: [
          { code: "ELEX 7710", name: "Communication Networks", credits: 5, type: "elec", diff: 3 },
          { code: "ELEX 7720", name: "Feedback Control", credits: 4.5, type: "elec", diff: 4 },
          { code: "ELEX 7790", name: "Capstone Design Project Initiation", credits: 3, type: "capstone", diff: 3 },
          { code: "COMM 7790", name: "Technical Communication for Capstone Initiation", credits: 1, type: "comm", diff: 1 },
          { code: "BUSA 7250", name: "Management Skills and Applications", credits: 3, type: "comm", diff: 2 },
          { code: "Design Elec", name: "Design Elective (e.g. ELEX 7825 Robotics)", credits: 4, type: "elec", diff: 3, note: "Choose 2 design electives totalling 13.5 cr from: Robotics, Renewables, Wireless, Embedded, Power, Image/Video, Industrial Control, Energy Storage, Software." },
        ],
      },
      {
        name: "Spring — Level 8", tag: "Capstone & Graduation", tagColor: "#e6c259", load: "Very Heavy",
        courses: [
          { code: "ELEX 7890", name: "Capstone Design Project Completion", credits: 6.5, type: "capstone", diff: 5 },
          { code: "COMM 7890", name: "Technical Communication for Capstone Completion", credits: 1.5, type: "comm", diff: 1 },
          { code: "ENGR 7880", name: "Engineering Law, Ethics and Professionalism", credits: 3, type: "comm", diff: 2 },
          { code: "LIBS 7007", name: "Technology and Society (or LIBS 7005)", credits: 3, type: "comm", diff: 1 },
          { code: "Design Elec", name: "Design Elective (Stream specialization)", credits: 4, type: "elec", diff: 3 },
          { code: "Gen Ed", name: "General Education Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Summer — Convocation", tag: "Graduation", tagColor: "#e6c259", load: "Done",
        courses: [
          { code: "🎓", name: "BEng Electrical Engineering — BCIT", credits: 0, type: "grad", diff: 0, note: "Total program: 249 credits. Eligible for P.Eng. (EIT) registration with EGBC." },
        ],
      },
    ],
  },
];

// ── BCIT COMPUTER SYSTEMS (CST Diploma + BTech) — Years 1-5 ──────
const bcitCompYears = [
  langaraCsY1,
  {
    year: 2,
    label: "Year 2",
    school: "BCIT — CST Diploma (Year 1)",
    schoolShort: "BCIT",
    accent: "#5fb8b8",
    note: "BCIT CST is cohort-based — most Langara CPSC credits won't reduce the diploma load. Apply directly to CST after Langara.",
    semesters: [
      {
        name: "Fall — Term 1 (Level 1)", tag: "CST Foundations", tagColor: "#5fb8b8", load: "Heavy",
        courses: [
          { code: "COMM 1116", name: "Business Communications 1", credits: 4, type: "comm", diff: 1 },
          { code: "COMP 1100", name: "CST Program Fundamentals", credits: 1, type: "cs", diff: 1 },
          { code: "COMP 1113", name: "Applied Mathematics", credits: 4, type: "math", diff: 2 },
          { code: "COMP 1510", name: "Programming Methods (Python)", credits: 6, type: "cs", diff: 3 },
          { code: "COMP 1537", name: "Web Development 1", credits: 4, type: "cs", diff: 2 },
          { code: "COMP 1712", name: "Business Analysis and System Design", credits: 4, type: "cs", diff: 2 },
          { code: "COMP 1800", name: "Projects 1", credits: 4, type: "capstone", diff: 3 },
        ],
      },
      {
        name: "Spring — Term 2 (Level 2)", tag: "Procedural + OOP", tagColor: "#7ba8c9", load: "Heavy",
        courses: [
          { code: "COMM 2216", name: "Business Communications 2", credits: 4, type: "comm", diff: 1 },
          { code: "COMP 2121", name: "Discrete Mathematics", credits: 4, type: "math", diff: 3 },
          { code: "COMP 2510", name: "Procedural Programming (C)", credits: 4, type: "cs", diff: 4, note: "C language — pointer-heavy. Many students find this the hardest L2 course." },
          { code: "COMP 2522", name: "Object Oriented Programming 1 (Java)", credits: 4, type: "cs", diff: 3 },
          { code: "COMP 2714", name: "Relational Database Systems", credits: 4, type: "cs", diff: 3 },
          { code: "COMP 2721", name: "Computer Organization / Architecture", credits: 4, type: "digital", diff: 3 },
        ],
      },
      {
        name: "Summer", tag: "Break / Co-op", tagColor: "#7bc485", load: "Break",
        courses: [
          { code: "OPT", name: "Optional industry co-op or break", credits: 0, type: "break", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 3,
    label: "Year 3",
    school: "BCIT — CST Diploma (Year 2 + Option Selection)",
    schoolShort: "BCIT",
    accent: "#5fb8b8",
    note: "Choose an Option track at Term 3: Network Security, Applications Development, Games Development, or Database. Term 4 has the practicum project.",
    semesters: [
      {
        name: "Fall — Term 3 (Level 3)", tag: "OOP 2 + Option Begins", tagColor: "#7ba8c9", load: "Very Heavy",
        courses: [
          { code: "COMP 3522", name: "Object Oriented Programming 2", credits: 5, type: "cs", diff: 4 },
          { code: "COMP 3717", name: "Mobile Development with Android", credits: 4, type: "cs", diff: 3 },
          { code: "COMP 3721", name: "Introduction to Data Communications", credits: 4, type: "digital", diff: 3 },
          { code: "COMP 3760", name: "Algorithm Analysis and Design", credits: 3, type: "cs", diff: 4 },
          { code: "MATH 3042", name: "Applied Probability and Statistics", credits: 4, type: "math", diff: 3 },
          { code: "Option Course", name: "Option-specific Course (Network / Apps / Games / DB)", credits: 5, type: "cs", diff: 3 },
        ],
      },
      {
        name: "Spring — Term 4 (Level 4)", tag: "Practicum + Architecture", tagColor: "#d4a86a", load: "Very Heavy",
        courses: [
          { code: "COMP 4537", name: "Internet Software Architecture", credits: 3, type: "cs", diff: 3 },
          { code: "COMP 4736", name: "Introduction to Operating Systems", credits: 3, type: "cs", diff: 4 },
          { code: "LIBS 7102", name: "Ethics for Computing Professionals", credits: 4, type: "comm", diff: 1 },
          { code: "COMP 4800", name: "Projects Practicum 2", credits: 5, type: "capstone", diff: 4, note: "Industry-sponsored project. Diploma capstone." },
          { code: "Option Course", name: "Option-specific Course", credits: 5, type: "cs", diff: 3 },
          { code: "Option Course", name: "Option-specific Course", credits: 5, type: "cs", diff: 3 },
        ],
      },
      {
        name: "Summer — BTech Application", tag: "Apply for BTech", tagColor: "#d4a86a", load: "Break",
        courses: [
          { code: "—", name: "Apply for CST BTech laddering", credits: 0, type: "break", diff: 0, note: "BTech requires CST graduation + competitive GPA. Email cstbtech@bcit.ca." },
        ],
      },
    ],
  },
  {
    year: 4,
    label: "Year 4",
    school: "BCIT — CST BTech (Year 1)",
    schoolShort: "BCIT",
    accent: "#5fb8b8",
    note: "Year 1 of the BTech — option-specific advanced core. Specific courses vary by track (Network Security / Apps Dev / Games / DB). Verify against the published per-option program map.",
    semesters: [
      {
        name: "Fall — BTech Term 1", tag: "Advanced Core", tagColor: "#7ba8c9", load: "Heavy",
        courses: [
          { code: "BTech Core", name: "Advanced Computing Course (option-specific)", credits: 4, type: "cs", diff: 4 },
          { code: "BTech Core", name: "Advanced Computing Course (option-specific)", credits: 4, type: "cs", diff: 4 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "cs", diff: 3 },
          { code: "Gen Ed", name: "General Education Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Spring — BTech Term 2", tag: "Advanced Specialization", tagColor: "#d4a86a", load: "Heavy",
        courses: [
          { code: "BTech Core", name: "Specialization Course (option-specific)", credits: 4, type: "cs", diff: 4 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "cs", diff: 3 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "cs", diff: 3 },
          { code: "Gen Ed", name: "General Education Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Summer", tag: "Break / Co-op", tagColor: "#7bc485", load: "Break",
        courses: [
          { code: "OPT", name: "Optional summer co-op or break", credits: 0, type: "break", diff: 0 },
        ],
      },
    ],
  },
  {
    year: 5,
    label: "Year 5",
    school: "BCIT — CST BTech (Year 2 + Capstone)",
    schoolShort: "BCIT",
    accent: "#5fb8b8",
    note: "Final year — capstone project (COMP 4900-series) plus remaining specialization. Course list option-specific; verify with department PDF for your stream.",
    semesters: [
      {
        name: "Fall — BTech Term 3", tag: "Capstone Begins", tagColor: "#d65a52", load: "Heavy",
        courses: [
          { code: "BTech Capstone", name: "Capstone Project — Phase I", credits: 4, type: "capstone", diff: 4 },
          { code: "BTech Core", name: "Specialization Course", credits: 4, type: "cs", diff: 4 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "cs", diff: 3 },
          { code: "Gen Ed", name: "General Education Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Spring — BTech Term 4", tag: "Capstone & Graduation", tagColor: "#e6c259", load: "Heavy",
        courses: [
          { code: "BTech Capstone", name: "Capstone Project — Phase II", credits: 4, type: "capstone", diff: 5 },
          { code: "BTech Core", name: "Final Specialization Course", credits: 4, type: "cs", diff: 4 },
          { code: "Tech Elective", name: "Technical Elective", credits: 4, type: "cs", diff: 3 },
          { code: "Gen Ed", name: "General Education Elective", credits: 3, type: "comm", diff: 1 },
        ],
      },
      {
        name: "Summer — Convocation", tag: "Graduation", tagColor: "#e6c259", load: "Done",
        courses: [
          { code: "🎓", name: "BTech Computer Systems — BCIT", credits: 0, type: "grad", diff: 0, note: "Bachelor of Technology in Computer Systems. Not CEAB-accredited engineering, but a recognized 4-year computing degree." },
        ],
      },
    ],
  },
];

// ── DESTINATIONS — top-level structure ───────────────────────────
export const destinations = [
  {
    id: "ubc",
    name: "UBC",
    full: "University of British Columbia",
    accent: "#d65a52",
    description: "Research university. Most flexibility — three distinct tracks accessible from Langara, all completable in 4 years.",
    tracks: [
      {
        id: "ee",
        name: "Electrical (BASc)",
        short: "EE",
        duration: "4 yrs",
        accent: "#d65a52",
        full: "Langara → UBC Electrical Engineering",
        summary: "Engineering Transfer Cert (3.10 GPA) → guaranteed UBC Year 2 → compete for Electrical seat at end of Year 2. CEAB-accredited.",
        years: ubcEeYears,
        optimizations: [
          ["Y1 Spring", "Linear Algebra paired with mandatory MATH 2382 lab — don't drop the lab."],
          ["Y1 GPA", "Hold ≥ 3.10 cumulative for guaranteed Year-2 admission. > 3.5 is competitive for top placements."],
          ["UBC Y2", "Program Placement decided here — winter GPA + statement decide your specialization seat."],
          ["UBC Y3", "EM Theory and Signals split across separate terms to avoid stacking."],
          ["UBC Y4", "Capstone (ELEC 491) spans the full year."],
        ],
      },
      {
        id: "cpen",
        name: "Computer (BASc)",
        short: "CPEN",
        duration: "4 yrs",
        accent: "#7ba8c9",
        full: "Langara → UBC Computer Engineering",
        summary: "Same Engineering Transfer Cert as EE. Heavier on software, OS, networks; lighter on power and electromagnetics. CEAB-accredited.",
        years: ubcCpenYears,
        optimizations: [
          ["Y1 GPA", "Same gate as EE — 3.10 GPA for guaranteed admission. CPEN placement is historically competitive."],
          ["UBC Y2", "Program Placement competition — winter GPA + statement."],
          ["UBC Y3 Fall", "CPEN 331 (Operating Systems) is the heaviest single course — protect study time."],
          ["UBC Y3 Spring", "Design Studio II (CPEN 391) — 6 credits, treat like a part-time job."],
          ["UBC Y4", "Capstone (CPEN 491) spans the full year."],
        ],
      },
      {
        id: "cs",
        name: "Computer Science (BSc)",
        short: "CS",
        duration: "4 yrs",
        accent: "#5fb8b8",
        full: "Langara → UBC Computer Science",
        summary: "Different route — Faculty of Science (NOT Engineering). Two-year Langara CS Associate → UBC Year 3 entry. CS specialization is a competitive gate at end of UBC Year 3.",
        years: ubcCsYears,
        optimizations: [
          ["Langara Y1-2", "Articulations: CPSC 1150 → 110, 1160 → 121, 1181 → 210, 2150 → 213, 2170 → 221. Confirm via BC Transfer Guide."],
          ["UBC Y3 Fall", "CPSC 210/221/213 grades drive CS specialization admission — push hard."],
          ["UBC Y3 Spring", "Specialization decision — Major / Honours / Combined CS-Math etc. notification in late May/early June."],
          ["UBC Y4", "Need ≥ 21 upper-level credits. Stack 400-level CS courses for breadth + research project options."],
        ],
      },
    ],
  },
  {
    id: "bcit",
    name: "BCIT",
    full: "British Columbia Institute of Technology",
    accent: "#d4a86a",
    description: "Polytechnic / applied. Two pathways — both take 5 years from a Langara start because BCIT programs are cohort-based and don't grant much transfer credit from Langara.",
    tracks: [
      {
        id: "ee",
        name: "Electrical (BEng)",
        short: "EE",
        duration: "5 yrs",
        accent: "#d4a86a",
        full: "Langara → BCIT BEng Electrical",
        summary: "Indirect — Langara cert does not transfer into BCIT BEng. Must complete BCIT Level 1 (= ECET first year) at ≥ 75% before progressing. CEAB-accredited.",
        years: bcitEeYears,
        optimizations: [
          ["Y2 BCIT", "Some Langara math/physics may PLAR into Level 1 — verify with a BCIT advisor immediately."],
          ["Y3 Spring", "Choose carefully between Level 4 Term B modules and the early work term."],
          ["Y4 Fall", "Electromagnetics (ELEX 7530) is the hardest theory course."],
          ["Y4 Summer", "Work term (ELEX 6992, 19 cr) lands here unless taken at L4. Required for graduation."],
          ["Y5", "Two design electives (13.5 cr each) pick your specialization."],
        ],
      },
      {
        id: "comp",
        name: "Computer Systems (BTech)",
        short: "CST",
        duration: "5 yrs",
        accent: "#5fb8b8",
        full: "Langara → BCIT CST Diploma → CST BTech",
        summary: "Langara CS prep year → 2-year CST Diploma → 2-year CST BTech. Bachelor of Technology — not CEAB-accredited engineering, but a recognized 4-year computing degree.",
        years: bcitCompYears,
        optimizations: [
          ["Y1 Langara", "Build CS fundamentals (CPSC 1150/1160/1181) and math — they may PLAR into CST."],
          ["Y2 BCIT", "Apply directly to CST after Langara — cohort-based, partial transfer credit at most."],
          ["Y3 Term 3", "Choose Option track: Network Security, Applications Dev, Games Dev, or Database."],
          ["Y3 Term 4", "COMP 4800 Practicum is industry-sponsored — diploma capstone."],
          ["Y4-5 BTech", "Course mix is option-specific; verify against published BTech program map for your stream."],
        ],
      },
    ],
  },
];
