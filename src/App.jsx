import { useState } from "react";
import { destinations } from "./data.js";

const typeAccent = {
  math:     "#e6dcc6",
  physics:  "#7ba3d4",
  science:  "#a8c46a",
  eng:      "#b89cd6",
  cs:       "#5fb8b8",
  comm:     "#d4a86a",
  elec:     "#d65a52",
  digital:  "#7ba8c9",
  power:    "#d68a52",
  capstone: "#e64d4d",
  work:     "#7bc485",
  break:    "#6b5d4f",
  grad:     "#e6c259",
};

const typeLabel = {
  math: "Mathematics", physics: "Physics", science: "Science",
  eng: "Engineering Design", cs: "Computer Science", comm: "Communications",
  elec: "Electrical", digital: "Digital", power: "Power",
  capstone: "Capstone", work: "Work Term", break: "Recess", grad: "Graduation",
};

const roman = ["I", "II", "III", "IV", "V", "VI"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=JetBrains+Mono:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; }
html, body, #root { margin: 0; padding: 0; width: 100%; min-height: 100vh; }
body { -webkit-text-size-adjust: 100%; overflow-x: hidden; }

:root {
  --paper:       #0c0a07;
  --paper-hi:    #181208;
  --paper-deep:  #1a1612;
  --paper-soft:  rgba(232, 220, 196, 0.04);
  --ink:         #e8dcc4;
  --ink-soft:    #b8a890;
  --ink-faded:   #7a6b58;
  --hairline:    #3a3127;
  --hairline-2:  rgba(184, 168, 144, 0.12);
  --accent:      #d65a52;
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
  background-image: repeating-linear-gradient(0deg, rgba(232, 220, 196, 0.022) 0 1px, transparent 1px 3px);
  z-index: 0; mix-blend-mode: overlay;
}
.almanac::after {
  content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse 140% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%);
}

.frame { max-width: 920px; margin: 0 auto; position: relative; z-index: 1; }

/* ── Masthead ───────────────────────────────── */
.masthead { text-align: center; margin-bottom: 56px; }
.eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px; letter-spacing: 4px;
  color: var(--ink-faded); text-transform: uppercase;
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
  font-size: clamp(40px, 7.5vw, 84px);
  line-height: 0.92; letter-spacing: -0.025em;
  margin: 0 0 24px;
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
  max-width: 580px; margin: 0 auto;
  line-height: 1.55;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}

/* ── School (destination) selector ──────────── */
.dest-section {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 56px 0 24px;
}
.dest-card {
  text-align: left; padding: 24px 26px;
  background: rgba(232, 220, 196, 0.02);
  border: 1px solid var(--hairline);
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fraunces', serif; color: var(--ink-soft);
  transition: all 0.25s;
  -webkit-tap-highlight-color: transparent;
  position: relative; overflow: hidden;
}
.dest-card:hover { border-color: var(--ink-faded); color: var(--ink); }
.dest-card.active {
  border-color: var(--dest-accent);
  color: var(--ink);
  background:
    radial-gradient(ellipse 100% 80% at 0% 100%, rgba(214,90,82,0.10), transparent 70%),
    rgba(232, 220, 196, 0.03);
  box-shadow: 0 0 32px -12px var(--dest-accent);
}
.dest-card.active::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--dest-accent);
}
.dest-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 3px;
  color: var(--dest-accent); text-transform: uppercase;
  margin-bottom: 10px;
}
.dest-name {
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 144, "wght" 460;
  font-size: 32px; margin: 0 0 8px;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.dest-full {
  font-style: italic; font-size: 14px;
  color: var(--ink-faded); margin-bottom: 12px;
}
.dest-desc {
  font-size: 13.5px; line-height: 1.55;
  color: var(--ink-soft);
  font-variation-settings: "opsz" 24, "SOFT" 80;
  font-style: italic;
}

/* ── Track selector ─────────────────────────── */
.tracks {
  display: flex; flex-wrap: wrap; gap: 10px;
  margin: 0 0 32px;
}
.track-btn {
  padding: 12px 18px;
  background: transparent;
  border: 1px solid var(--hairline);
  border-radius: 4px;
  font-family: 'Fraunces', serif;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  display: flex; align-items: baseline; gap: 12px;
  flex: 1 1 auto; min-width: 220px;
}
.track-btn:hover { border-color: var(--ink-faded); color: var(--ink); }
.track-btn.active {
  border-color: var(--track-accent);
  background: rgba(214, 90, 82, 0.06);
  color: var(--ink);
}
.track-short {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 2px;
  color: var(--track-accent);
  text-transform: uppercase;
  flex-shrink: 0;
}
.track-name {
  font-variation-settings: "opsz" 36, "wght" 460;
  font-size: 15px;
  flex: 1;
}
.track-duration {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 1.5px;
  color: var(--ink-faded);
  text-transform: uppercase;
  flex-shrink: 0;
}

/* ── Track summary card ─────────────────────── */
.track-summary {
  margin: 0 0 32px;
  padding: 16px 22px;
  border-left: 2px solid var(--track-accent);
  background: rgba(232, 220, 196, 0.02);
  font-style: italic;
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.6;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}

/* ── Year nav ───────────────────────────────── */
.years {
  display: flex;
  margin: 0 0 56px;
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}
.year-btn {
  flex: 1; padding: 22px 8px 18px;
  background: transparent; border: 0;
  border-right: 1px solid var(--hairline);
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 144, "SOFT" 30, "wght" 400;
  font-size: clamp(26px, 4.5vw, 40px);
  color: var(--ink-faded);
  cursor: pointer;
  transition: color 0.25s, background 0.25s;
  -webkit-tap-highlight-color: transparent;
}
.year-btn:last-child { border-right: 0; }
.year-btn::after {
  content: attr(data-label); display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px; letter-spacing: 2.5px;
  color: var(--ink-faded); text-transform: uppercase;
  margin-top: 6px;
  font-variation-settings: normal;
}
.year-btn:hover { color: var(--ink); }
.year-btn.active {
  color: var(--track-accent);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 100, "wght" 420;
  background: radial-gradient(ellipse 100% 80% at 50% 100%, rgba(214,90,82,0.18), transparent 70%);
}
.year-btn.active::after { color: var(--track-accent); }

/* ── Chapter ────────────────────────────────── */
.chapter-head {
  display: grid; grid-template-columns: 1fr auto;
  gap: 32px; align-items: end; margin-bottom: 24px;
}
.chapter-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 4px;
  color: var(--ink-faded); text-transform: uppercase;
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
  color: var(--track-accent); text-align: right;
  text-transform: uppercase;
  border: 1px solid var(--track-accent);
  padding: 8px 14px;
  align-self: end; white-space: nowrap;
  background: rgba(214, 90, 82, 0.08);
  box-shadow: 0 0 24px -8px var(--track-accent);
}
.chapter-note {
  font-style: italic;
  font-size: clamp(15px, 1.9vw, 18px);
  line-height: 1.65;
  color: var(--ink-soft);
  border-left: 2px solid var(--track-accent);
  padding: 6px 0 6px 22px;
  margin: 0 0 64px;
  max-width: 720px;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}

/* ── Semester ───────────────────────────────── */
.sem { margin-bottom: 56px; }
.sem-head {
  display: flex; align-items: baseline; gap: 18px; flex-wrap: wrap;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--hairline);
  padding-bottom: 14px;
}
.sem-name {
  font-family: 'Fraunces', serif;
  font-variation-settings: "opsz" 36, "wght" 500;
  font-size: clamp(22px, 3.2vw, 30px);
  margin: 0; letter-spacing: -0.005em;
}
.sem-tag {
  font-style: italic; color: var(--ink-soft);
  font-size: clamp(13px, 1.6vw, 16px);
  flex: 1; min-width: 180px;
  font-variation-settings: "opsz" 24, "SOFT" 80;
}
.sem-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 1.8px;
  color: var(--ink-faded); text-transform: uppercase;
  white-space: nowrap;
  display: flex; gap: 8px; align-items: center;
}
.sem-load { color: var(--ink); }
.sem-load.heavy { color: var(--track-accent); }
.sem-load.break { color: var(--ink-faded); font-style: italic; font-family: 'Fraunces', serif; text-transform: none; letter-spacing: 0.5px; font-size: 13px; }

/* ── Course ─────────────────────────────────── */
.course {
  display: grid; grid-template-columns: 110px 1fr auto;
  align-items: baseline; column-gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--hairline-2);
  cursor: default; position: relative;
  transition: background 0.2s;
}
.course[data-clickable="true"] { cursor: pointer; }
.course[data-clickable="true"]:hover { background: var(--paper-soft); }
.course:last-child { border-bottom: 0; }
.course-bar {
  position: absolute; left: -16px; top: 18px; bottom: 18px; width: 3px;
  background: var(--type-accent); opacity: 0.85;
}
.course-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; font-weight: 500;
  letter-spacing: 0.4px; color: var(--ink-soft);
}
.course-name-wrap { display: flex; align-items: baseline; gap: 12px; min-width: 0; }
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
  height: 1px; transform: translateY(-5px); min-width: 12px;
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
.pips .on { color: var(--track-accent); }
.course-credits {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; color: var(--ink-soft);
  min-width: 42px; text-align: right;
}
.course-note {
  grid-column: 2 / -1;
  font-style: italic; font-size: 14px;
  color: var(--ink-soft); line-height: 1.65;
  margin-top: 12px; padding: 14px 18px;
  background: var(--paper-deep);
  border-left: 2px solid var(--type-accent);
  font-variation-settings: "opsz" 24, "SOFT" 100;
  max-width: 720px;
}

/* ── Colophon ────────────────────────────────── */
.colophon { margin-top: 96px; padding-top: 40px; border-top: 1px solid var(--hairline); }
.colophon-rule {
  text-align: center;
  font-family: 'Fraunces', serif; font-style: italic;
  color: var(--track-accent); font-size: 18px;
  margin-bottom: 36px; letter-spacing: 4px;
}
.colophon-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 56px; }
.colophon h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 4px;
  text-transform: uppercase; color: var(--ink-faded);
  font-weight: 500; margin: 0 0 20px;
}
.legend-rows { display: flex; flex-direction: column; gap: 10px; }
.legend-item { display: flex; align-items: baseline; gap: 12px; }
.legend-item .pips { font-size: 10px; }
.legend-item .label {
  font-style: italic; font-size: 14px; color: var(--ink-soft);
  font-variation-settings: "opsz" 24, "SOFT" 80;
}
.opt-row {
  display: grid; grid-template-columns: 120px 1fr; gap: 20px;
  padding: 12px 0;
  border-bottom: 1px solid var(--hairline-2);
  align-items: baseline;
}
.opt-row:last-child { border-bottom: 0; }
.opt-term {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 1.5px;
  color: var(--track-accent); text-transform: uppercase;
}
.opt-tip {
  font-style: italic; color: var(--ink-soft);
  font-size: 14px; line-height: 1.55;
  font-variation-settings: "opsz" 24, "SOFT" 100;
}
.foot {
  text-align: center; margin-top: 56px; padding-top: 24px;
  border-top: 1px solid var(--hairline-2);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--ink-faded);
}
.foot em {
  font-family: 'Fraunces', serif; font-style: italic;
  text-transform: none; letter-spacing: 0;
  color: var(--track-accent); font-size: 13px; margin: 0 6px;
}
.foot a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px dotted var(--hairline); }
.foot a:hover { color: var(--track-accent); border-color: var(--track-accent); }
.foot .links {
  margin-top: 14px;
  font-family: 'Fraunces', serif;
  font-style: italic; font-size: 12px;
  letter-spacing: 0; text-transform: none;
  display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
}

/* ── Tablet ─────────────────────────────────── */
@media (max-width: 720px) {
  .almanac { padding: 36px 22px 64px; }
  .almanac::after { background: radial-gradient(ellipse 140% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.3) 100%); }
  .masthead { margin-bottom: 44px; }
  .dest-section { grid-template-columns: 1fr; gap: 12px; margin: 36px 0 20px; }
  .dest-name { font-size: 26px; }
  .tracks { gap: 8px; margin-bottom: 24px; }
  .track-btn { flex-basis: 100%; min-width: 0; padding: 11px 14px; }
  .track-summary { padding: 14px 18px; margin-bottom: 24px; }
  .years { margin: 0 0 48px; }
  .year-btn { padding: 18px 6px 14px; min-height: 64px; }
  .chapter-head { grid-template-columns: 1fr; gap: 14px; }
  .chapter-stamp { justify-self: start; align-self: start; padding: 6px 10px; }
  .chapter-note { margin-bottom: 48px; }
  .colophon-grid { grid-template-columns: 1fr; gap: 40px; }
  .colophon { margin-top: 64px; }
}

/* ── Phone ──────────────────────────────────── */
@media (max-width: 520px) {
  .almanac { padding: 24px 14px 44px; }
  .almanac::before { background-size: 100% 4px; }
  .almanac::after { display: none; }
  .frame { max-width: 100%; }

  .masthead { margin-bottom: 32px; }
  .eyebrow { letter-spacing: 2.5px; gap: 10px; margin-bottom: 20px; font-size: 10px; }
  .eyebrow::before, .eyebrow::after { max-width: 36px; }
  .title { letter-spacing: -0.02em; margin-bottom: 18px; }
  .title br { display: none; }
  .title em { white-space: nowrap; }
  .lede { font-size: 14px; padding: 0 4px; }

  .dest-section { margin: 28px 0 16px; }
  .dest-card { padding: 18px 18px; }
  .dest-name { font-size: 22px; }
  .dest-desc { font-size: 13px; }

  .tracks { margin-bottom: 20px; }
  .track-btn { padding: 12px 14px; }
  .track-name { font-size: 14px; }

  .track-summary { font-size: 13.5px; padding: 12px 14px; }

  .years { margin: 0 0 36px; }
  .year-btn { padding: 16px 4px 12px; min-height: 60px; font-size: 26px; }
  .year-btn::after { font-size: 8px; letter-spacing: 1.5px; margin-top: 4px; }

  .chapter-head { gap: 10px; margin-bottom: 18px; }
  .chapter-num { font-size: 10px; letter-spacing: 3px; margin-bottom: 8px; }
  .chapter-title { font-size: 32px; }
  .chapter-school { font-size: 15px; line-height: 1.4; }
  .chapter-stamp { font-size: 9px; letter-spacing: 2px; }
  .chapter-note { font-size: 14.5px; padding: 4px 0 4px 16px; margin-bottom: 40px; line-height: 1.6; }

  .sem { margin-bottom: 36px; }
  .sem-head { gap: 6px 12px; padding-bottom: 10px; margin-bottom: 14px; }
  .sem-name { font-size: 22px; }
  .sem-tag { flex-basis: 100%; min-width: 0; font-size: 13px; }
  .sem-meta { font-size: 9.5px; letter-spacing: 1.4px; gap: 6px; }

  .course { grid-template-columns: 84px 1fr; column-gap: 12px; padding: 13px 0; min-height: 48px; }
  .course-bar { left: -8px; width: 2px; top: 14px; bottom: 14px; }
  .course-code { font-size: 10.5px; letter-spacing: 0.3px; }
  .course-name { white-space: normal; font-size: 15.5px; line-height: 1.35; }
  .course-leader { display: none; }
  .course-meta { grid-column: 2 / -1; margin-top: 6px; gap: 14px; }
  .pips { font-size: 8.5px; letter-spacing: 1.2px; }
  .course-credits { min-width: 0; text-align: left; font-size: 11px; }
  .course-note { grid-column: 1 / -1; margin-top: 12px; padding: 12px 14px; font-size: 13.5px; }

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

/* ── Tiny phone ─────────────────────────────── */
@media (max-width: 360px) {
  .almanac { padding: 20px 12px 36px; }
  .title { font-size: 36px; }
  .year-btn { font-size: 22px; }
  .chapter-title { font-size: 28px; }
  .course { grid-template-columns: 70px 1fr; column-gap: 10px; }
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
  const [destIdx, setDestIdx] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);
  const [yearIdx, setYearIdx] = useState(0);
  const [expandedNote, setExpandedNote] = useState(null);

  const dest = destinations[destIdx];
  const track = dest.tracks[trackIdx];
  const year = track.years[yearIdx];

  const switchDest = (i) => {
    setDestIdx(i);
    setTrackIdx(0);
    setYearIdx(0);
    setExpandedNote(null);
  };
  const switchTrack = (i) => {
    setTrackIdx(i);
    setYearIdx(0);
    setExpandedNote(null);
  };

  return (
    <div
      className="almanac"
      style={{ "--track-accent": track.accent }}
    >
      <style>{css}</style>

      <div className="frame">
        {/* ── Masthead ── */}
        <header className="masthead">
          <div className="eyebrow">An Engineering Almanac · MMXXVI</div>
          <h1 className="title">
            From <em>Langara</em><br/>to a Bachelor's
          </h1>
          <p className="lede">
            Five real transfer pathways from Langara College to UBC and BCIT — Electrical, Computer Engineering, Computer Science, and Computer Systems. Walk each route term by term.
          </p>
        </header>

        {/* ── School (destination) selector ── */}
        <div className="dest-section">
          {destinations.map((d, i) => (
            <button
              key={d.id}
              onClick={() => switchDest(i)}
              className={`dest-card ${destIdx === i ? "active" : ""}`}
              style={{ "--dest-accent": d.accent }}
            >
              <div className="dest-tag">Destination · {d.tracks.length} tracks</div>
              <div className="dest-name">{d.name}</div>
              <div className="dest-full">{d.full}</div>
              <div className="dest-desc">{d.description}</div>
            </button>
          ))}
        </div>

        {/* ── Track selector ── */}
        <div className="tracks">
          {dest.tracks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTrack(i)}
              className={`track-btn ${trackIdx === i ? "active" : ""}`}
              style={{ "--track-accent": t.accent }}
            >
              <span className="track-short">{t.short}</span>
              <span className="track-name">{t.name}</span>
              <span className="track-duration">{t.duration}</span>
            </button>
          ))}
        </div>

        {/* ── Track summary ── */}
        <div className="track-summary">{track.summary}</div>

        {/* ── Year nav ── */}
        <nav className="years" aria-label="Year selector">
          {track.years.map((y, i) => (
            <button
              key={i}
              onClick={() => { setYearIdx(i); setExpandedNote(null); }}
              className={`year-btn ${yearIdx === i ? "active" : ""}`}
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
              <div className="chapter-num">Chapter {roman[yearIdx]} · Anno {yearIdx + 1}</div>
              <h2 className="chapter-title">Year {roman[yearIdx]}</h2>
              <div className="chapter-school">
                <strong>{year.school.split(" — ")[0]}</strong>
                {year.school.includes(" — ") && <> — <em>{year.school.split(" — ").slice(1).join(" — ")}</em></>}
              </div>
            </div>
            <div className="chapter-stamp">{year.schoolShort}</div>
          </div>
          <p className="chapter-note">{year.note}</p>

          {year.semesters.map((sem, si) => {
            const semCredits = sem.courses.reduce((s, c) => s + (c.credits || 0), 0);
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
              <h3>Editorial Notes — {track.short}</h3>
              {track.optimizations.map(([term, tip]) => (
                <div key={term} className="opt-row">
                  <span className="opt-term">{term}</span>
                  <span className="opt-tip">{tip}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="foot">
            Tap any course <em>to read the editorial note.</em> Verify codes with advisors before registration.
            <div className="links">
              <a href="https://langara.ca/programs-courses/engineering-transfer-certificate/" target="_blank" rel="noreferrer">Langara Eng Transfer</a>
              <a href="https://langara.ca/programs-and-courses/programs/computer-science/" target="_blank" rel="noreferrer">Langara CS</a>
              <a href="https://engineering.ubc.ca/admissions/undergraduate/transfers/engineering-transfer-program" target="_blank" rel="noreferrer">UBC Eng Transfer</a>
              <a href="https://www.cs.ubc.ca/PS-transfer-students" target="_blank" rel="noreferrer">UBC CS Transfer</a>
              <a href="https://www.bcit.ca/programs/electrical-engineering-bachelor-of-engineering-full-time-8030beng/" target="_blank" rel="noreferrer">BCIT BEng EE</a>
              <a href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/" target="_blank" rel="noreferrer">BCIT CST</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
