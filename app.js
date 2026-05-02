'use strict';

// ──────────────────────────────────────────────────────────
// PHRASE DATABASE
// Each phrase has 3 quiz modes: fill | choice | swap
// ──────────────────────────────────────────────────────────
const PHRASES = [
  // ── Work & Projects ──
  {
    phrase: "I'm currently working on a new design",
    verb: "working", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm currently ___ on a new design", correct: "working", wrong: ["work","worked","works"] },
    choice: { correct: 0, options: ["I'm currently working on a new design","I'm current working on a new design","I'm currently working in a new design","I currently working on a new design"] },
    swap:   { correct: 0, options: ["focusing","studied","ran","develop"] }
  },
  {
    phrase: "I'm putting together a proposal for the client",
    verb: "putting together", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ a proposal for the client", correct: "putting together", wrong: ["put together","puts together","putting apart"] },
    choice: { correct: 2, options: ["I'm put together a proposal for the client","I putting together a proposal for the client","I'm putting together a proposal for the client","I've putting together a proposal for the client"] },
    swap:   { correct: 1, options: ["ran","preparing","putted","goes"] }
  },
  {
    phrase: "I'm building a prototype to test the user flow",
    verb: "building", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ a prototype to test the user flow", correct: "building", wrong: ["build","built","builds"] },
    choice: { correct: 3, options: ["I'm builded a prototype to test the user flow","I build a prototype right now","I'm builds a prototype to test the user flow","I'm building a prototype to test the user flow"] },
    swap:   { correct: 0, options: ["creating","ran","past","studied"] }
  },
  {
    phrase: "I'm handling three different projects this week",
    verb: "handling", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ three different projects this week", correct: "handling", wrong: ["handle","handled","handles"] },
    choice: { correct: 0, options: ["I'm handling three different projects this week","I'm handle three different projects this week","I handled three projects right now","I'm handles three different projects this week"] },
    swap:   { correct: 2, options: ["broke","failed","managing","slept"] }
  },
  {
    phrase: "I'm reviewing the feedback from yesterday's meeting",
    verb: "reviewing", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ the feedback from yesterday's meeting", correct: "reviewing", wrong: ["review","reviewed","reviews"] },
    choice: { correct: 1, options: ["I review the feedback right now","I'm reviewing the feedback from yesterday's meeting","I'm reviewed the feedback from yesterday's meeting","I'm reviews the feedback from yesterday's meeting"] },
    swap:   { correct: 3, options: ["broke","slept","ran","going through"] }
  },
  {
    phrase: "I'm wrapping up the final version of the file",
    verb: "wrapping up", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ the final version of the file", correct: "wrapping up", wrong: ["wrap up","wrapped up","wraps up"] },
    choice: { correct: 2, options: ["I wrapping up the final version","I'm wrapped up the final version","I'm wrapping up the final version of the file","I'm wrap up the final version"] },
    swap:   { correct: 1, options: ["broke","finishing","slept","ran"] }
  },
  {
    phrase: "I'm collaborating with the dev team on this feature",
    verb: "collaborating", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ with the dev team on this feature", correct: "collaborating", wrong: ["collaborate","collaborated","collaborates"] },
    choice: { correct: 0, options: ["I'm collaborating with the dev team on this feature","I collaborating with the dev team","I'm collaborate with the dev team","I collaborated right now"] },
    swap:   { correct: 2, options: ["slept","ran","working","broke"] }
  },
  {
    phrase: "I'm redesigning the entire onboarding experience",
    verb: "redesigning", category: "Work & Projects", icon: "💼",
    fill:   { blank: "I'm ___ the entire onboarding experience", correct: "redesigning", wrong: ["redesign","redesigned","redesigns"] },
    choice: { correct: 1, options: ["I redesigning the entire onboarding right now","I'm redesigning the entire onboarding experience","I'm redesigned the entire onboarding","I redesign the entire onboarding experience"] },
    swap:   { correct: 3, options: ["broke","slept","ran","revamping"] }
  },

  // ── Explaining Actions ──
  {
    phrase: "I'm trying to figure out the best approach",
    verb: "figure out", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm trying to ___ the best approach", correct: "figure out", wrong: ["figure in","figuring out","figured out"] },
    choice: { correct: 1, options: ["I'm try to figure out the best approach","I'm trying to figure out the best approach","I tried to figure out the best approach right now","I'm trying figure out the best approach"] },
    swap:   { correct: 3, options: ["broke","slept","ran","determine"] }
  },
  {
    phrase: "I'm looking into different solutions for this",
    verb: "looking into", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ different solutions for this", correct: "looking into", wrong: ["looking at","looking for","looking through"] },
    choice: { correct: 2, options: ["I looking into different solutions","I'm looked into different solutions","I'm looking into different solutions for this","I'm looks into different solutions"] },
    swap:   { correct: 0, options: ["exploring","broke","slept","ran"] }
  },
  {
    phrase: "I'm testing different variations to see what works",
    verb: "testing", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ different variations to see what works", correct: "testing", wrong: ["test","tested","tests"] },
    choice: { correct: 0, options: ["I'm testing different variations to see what works","I test different variations right now","I'm tested different variations","I'm tests different variations"] },
    swap:   { correct: 1, options: ["broke","trying","slept","ran"] }
  },
  {
    phrase: "I'm gathering references for the visual direction",
    verb: "gathering", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ references for the visual direction", correct: "gathering", wrong: ["gather","gathered","gathers"] },
    choice: { correct: 3, options: ["I gathering references","I'm gather references","I'm gathered references","I'm gathering references for the visual direction"] },
    swap:   { correct: 2, options: ["broke","slept","collecting","ran"] }
  },
  {
    phrase: "I'm reaching out to the client for approval",
    verb: "reaching out", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ to the client for approval", correct: "reaching out", wrong: ["reach out","reached out","reaches out"] },
    choice: { correct: 1, options: ["I'm reach out to the client","I'm reaching out to the client for approval","I reaching out to the client","I'm reached out to the client"] },
    swap:   { correct: 0, options: ["contacting","broke","slept","ran"] }
  },
  {
    phrase: "I'm going over the requirements one more time",
    verb: "going over", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ the requirements one more time", correct: "going over", wrong: ["going through","going around","going under"] },
    choice: { correct: 2, options: ["I go over the requirements right now","I'm went over the requirements","I'm going over the requirements one more time","I going over the requirements"] },
    swap:   { correct: 3, options: ["broke","slept","ran","reviewing"] }
  },
  {
    phrase: "I'm making adjustments based on the feedback",
    verb: "making", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ adjustments based on the feedback", correct: "making", wrong: ["make","made","makes"] },
    choice: { correct: 0, options: ["I'm making adjustments based on the feedback","I making adjustments","I'm made adjustments","I'm makes adjustments"] },
    swap:   { correct: 1, options: ["broke","implementing","slept","ran"] }
  },
  {
    phrase: "I'm brainstorming ideas for the new campaign",
    verb: "brainstorming", category: "Explaining Actions", icon: "🔍",
    fill:   { blank: "I'm ___ ideas for the new campaign", correct: "brainstorming", wrong: ["brainstorm","brainstormed","brainstorms"] },
    choice: { correct: 3, options: ["I brainstorming ideas for the new campaign","I'm brainstormed ideas","I'm brainstorm ideas","I'm brainstorming ideas for the new campaign"] },
    swap:   { correct: 2, options: ["broke","slept","generating","ran"] }
  },

  // ── Meetings & Calls ──
  {
    phrase: "Let me walk you through what I've been working on",
    verb: "walk you through", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "Let me ___ what I've been working on", correct: "walk you through", wrong: ["walk through you","walked you through","walks you through"] },
    choice: { correct: 1, options: ["Let me walked you through what I've been working on","Let me walk you through what I've been working on","Let me walks you through","Let me walking you through what I've been working on"] },
    swap:   { correct: 0, options: ["show you","broke","slept","ran"] }
  },
  {
    phrase: "I'd like to share my screen to show you the progress",
    verb: "share", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "I'd like to ___ my screen to show you the progress", correct: "share", wrong: ["sharing","shared","shares"] },
    choice: { correct: 2, options: ["I'd like sharing my screen","I'd like shared my screen","I'd like to share my screen to show you the progress","I'd likes to share my screen"] },
    swap:   { correct: 3, options: ["broke","slept","ran","present"] }
  },
  {
    phrase: "Can we schedule a quick call to discuss this?",
    verb: "schedule", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "Can we ___ a quick call to discuss this?", correct: "schedule", wrong: ["scheduling","scheduled","schedules"] },
    choice: { correct: 0, options: ["Can we schedule a quick call to discuss this?","Can we scheduling a quick call?","Can we scheduled a quick call?","Can we schedules a quick call?"] },
    swap:   { correct: 1, options: ["broke","set up","slept","ran"] }
  },
  {
    phrase: "I wanted to follow up on our last conversation",
    verb: "follow up on", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "I wanted to ___ our last conversation", correct: "follow up on", wrong: ["follow on","follow up","follow through on"] },
    choice: { correct: 3, options: ["I want to follow up on our last conversation right now","I wanted follow up on our last conversation","I wanted to followed up on our last conversation","I wanted to follow up on our last conversation"] },
    swap:   { correct: 2, options: ["broke","slept","revisit","ran"] }
  },
  {
    phrase: "I'll send over the updated files after this call",
    verb: "send over", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "I'll ___ the updated files after this call", correct: "send over", wrong: ["send through","send across","sends over"] },
    choice: { correct: 1, options: ["I'll sends over the updated files","I'll send over the updated files after this call","I'll sent over the updated files","I'll sending over the updated files"] },
    swap:   { correct: 0, options: ["share","broke","slept","ran"] }
  },
  {
    phrase: "Could you give me some feedback on this direction?",
    verb: "give", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "Could you ___ me some feedback on this direction?", correct: "give", wrong: ["giving","gave","gives"] },
    choice: { correct: 2, options: ["Could you giving me some feedback?","Could you gave me some feedback?","Could you give me some feedback on this direction?","Could you gives me some feedback?"] },
    swap:   { correct: 3, options: ["broke","slept","ran","share"] }
  },
  {
    phrase: "Let me pull up the file so we can review it together",
    verb: "pull up", category: "Meetings & Calls", icon: "📞",
    fill:   { blank: "Let me ___ the file so we can review it together", correct: "pull up", wrong: ["pull out","pull over","pull down"] },
    choice: { correct: 0, options: ["Let me pull up the file so we can review it together","Let me pulled up the file","Let me pulls up the file","Let me pulling up the file"] },
    swap:   { correct: 1, options: ["broke","open","slept","ran"] }
  },

  // ── Progress Updates ──
  {
    phrase: "I've just finished the first round of revisions",
    verb: "finished", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I've just ___ the first round of revisions", correct: "finished", wrong: ["finish","finishing","finishes"] },
    choice: { correct: 3, options: ["I've just finish the first round","I've just finishing the first round","I just finished the first round right now","I've just finished the first round of revisions"] },
    swap:   { correct: 2, options: ["broke","slept","completed","ran"] }
  },
  {
    phrase: "I'm about halfway through the design exploration",
    verb: "halfway through", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I'm about ___ the design exploration", correct: "halfway through", wrong: ["half through","halfway in","halfway at"] },
    choice: { correct: 1, options: ["I'm about half through the design exploration","I'm about halfway through the design exploration","I'm about halfway in the design exploration","I'm about halfway at the design exploration"] },
    swap:   { correct: 0, options: ["midway through","broke","slept","ran"] }
  },
  {
    phrase: "I should have this ready by end of day",
    verb: "have", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I should ___ this ready by end of day", correct: "have", wrong: ["had","has","having"] },
    choice: { correct: 2, options: ["I should had this ready by end of day","I should has this ready","I should have this ready by end of day","I should having this ready"] },
    swap:   { correct: 3, options: ["broke","slept","ran","finish"] }
  },
  {
    phrase: "I just wrapped up the discovery phase",
    verb: "wrapped up", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I just ___ the discovery phase", correct: "wrapped up", wrong: ["wrap up","wrapping up","wraps up"] },
    choice: { correct: 0, options: ["I just wrapped up the discovery phase","I just wrap up the discovery phase","I just wrapping up the discovery phase","I just wraps up the discovery phase"] },
    swap:   { correct: 1, options: ["broke","completed","slept","ran"] }
  },
  {
    phrase: "I'm on track to deliver everything by Friday",
    verb: "on track to", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I'm ___ deliver everything by Friday", correct: "on track to", wrong: ["in track to","on track for","on tracks to"] },
    choice: { correct: 3, options: ["I'm in track to deliver everything by Friday","I'm on track for deliver everything","I'm on tracks to deliver everything","I'm on track to deliver everything by Friday"] },
    swap:   { correct: 2, options: ["broke","slept","set to","ran"] }
  },
  {
    phrase: "I've hit a small roadblock but I'm working through it",
    verb: "hit", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I've ___ a small roadblock but I'm working through it", correct: "hit", wrong: ["hitting","hitted","hits"] },
    choice: { correct: 1, options: ["I've hitting a small roadblock","I've hit a small roadblock but I'm working through it","I've hitted a small roadblock","I've hits a small roadblock"] },
    swap:   { correct: 0, options: ["run into","broke","slept","ran"] }
  },
  {
    phrase: "I'm making great progress on the redesign",
    verb: "making", category: "Progress Updates", icon: "📊",
    fill:   { blank: "I'm ___ great progress on the redesign", correct: "making", wrong: ["make","made","makes"] },
    choice: { correct: 2, options: ["I making great progress","I'm made great progress","I'm making great progress on the redesign","I'm makes great progress"] },
    swap:   { correct: 3, options: ["broke","slept","ran","seeing"] }
  },

  // ── Problem Solving ──
  {
    phrase: "I'm trying to narrow down the options",
    verb: "narrow down", category: "Problem Solving", icon: "💡",
    fill:   { blank: "I'm trying to ___ the options", correct: "narrow down", wrong: ["narrow up","narrow out","narrows down"] },
    choice: { correct: 0, options: ["I'm trying to narrow down the options","I'm trying narrow down the options","I'm try to narrow down the options","I'm tried to narrow down the options"] },
    swap:   { correct: 1, options: ["broke","simplify","slept","ran"] }
  },
  {
    phrase: "I'm exploring different ways to approach this",
    verb: "exploring", category: "Problem Solving", icon: "💡",
    fill:   { blank: "I'm ___ different ways to approach this", correct: "exploring", wrong: ["explore","explored","explores"] },
    choice: { correct: 3, options: ["I explore different ways right now","I'm explore different ways","I'm explored different ways","I'm exploring different ways to approach this"] },
    swap:   { correct: 2, options: ["broke","slept","testing","ran"] }
  },
  {
    phrase: "I think we need to rethink our approach here",
    verb: "rethink", category: "Problem Solving", icon: "💡",
    fill:   { blank: "I think we need to ___ our approach here", correct: "rethink", wrong: ["rethinking","rethought","rethinks"] },
    choice: { correct: 1, options: ["I think we need rethink our approach","I think we need to rethink our approach here","I think we needed to rethink right now","I thinks we need to rethink our approach"] },
    swap:   { correct: 0, options: ["reconsider","broke","slept","ran"] }
  },
  {
    phrase: "I'm stuck on this part and need some help",
    verb: "stuck on", category: "Problem Solving", icon: "💡",
    fill:   { blank: "I'm ___ this part and need some help", correct: "stuck on", wrong: ["stuck in","stuck at","stuck with"] },
    choice: { correct: 2, options: ["I'm stuck in this part","I'm stuck at this part","I'm stuck on this part and need some help","I'm stuck with this part"] },
    swap:   { correct: 3, options: ["broke","slept","ran","blocked by"] }
  },
  {
    phrase: "I need to figure out why this isn't working",
    verb: "figure out", category: "Problem Solving", icon: "💡",
    fill:   { blank: "I need to ___ why this isn't working", correct: "figure out", wrong: ["figure in","figure up","figuring out"] },
    choice: { correct: 0, options: ["I need to figure out why this isn't working","I need figure out why this isn't working","I need to figured out why this isn't working","I need to figures out why this isn't working"] },
    swap:   { correct: 1, options: ["broke","understand","slept","ran"] }
  }
];

// ──────────────────────────────────────────────────────────
// CONSTANTS & STATE
// ──────────────────────────────────────────────────────────
const SESSION_SIZE  = 5;
const TIMER_SECONDS = 5 * 60;
const QUIZ_TYPES    = ['fill','choice','swap'];

const MESSAGES = {
  perfect:  { emoji: '🏆', title: 'Flawless!',      sub: 'You crushed it. Every single one correct.' },
  great:    { emoji: '⭐', title: 'Great job!',      sub: 'Almost perfect. Keep it up!' },
  good:     { emoji: '👍', title: 'Solid!',          sub: 'Good work — practice makes perfect.' },
  ok:       { emoji: '💪', title: 'Keep going!',     sub: "You're building up. Every session counts." },
  keep:     { emoji: '📚', title: 'Keep practicing!', sub: "Don't stop — improvement takes time." }
};

const state = {
  session:       [],
  current:       0,
  results:       [],
  score:         0,
  streak:        parseInt(localStorage.getItem('phraseup_streak') || '0'),
  timeLeft:      TIMER_SECONDS,
  timerInterval: null,
  answered:      false
};

// ──────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleWithIndex(items, correctIdx) {
  const indexed = items.map((text, i) => ({ text, isCorrect: i === correctIdx }));
  return shuffle(indexed);
}

function saveStreak() {
  localStorage.setItem('phraseup_streak', state.streak);
}

// ──────────────────────────────────────────────────────────
// TIMER
// ──────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timerInterval);
  state.timeLeft = TIMER_SECONDS;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      startSession();
    }
  }, 1000);
}

function updateTimerUI() {
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  document.getElementById('timerLabel').textContent =
    `${m}:${s.toString().padStart(2, '0')}`;

  const r = 17;
  const circ = 2 * Math.PI * r;
  const progress = state.timeLeft / TIMER_SECONDS;
  const ring = document.getElementById('timerRing');
  ring.style.strokeDashoffset = circ * (1 - progress);

  const wrap = document.getElementById('timerWrap');
  ring.classList.remove('urgent', 'warning');
  wrap.classList.remove('urgent');

  if (state.timeLeft <= 60) {
    ring.classList.add('urgent');
    wrap.classList.add('urgent');
  } else if (state.timeLeft <= 120) {
    ring.classList.add('warning');
  }
}

// ──────────────────────────────────────────────────────────
// SESSION
// ──────────────────────────────────────────────────────────
function generateSession() {
  const picked = shuffle(PHRASES).slice(0, SESSION_SIZE);
  const typeRotation = shuffle([...QUIZ_TYPES, 'fill', 'choice']); // 5 types for 5 questions
  return picked.map((phrase, i) => ({
    phrase,
    type: typeRotation[i % typeRotation.length]
  }));
}

function startSession() {
  state.session  = generateSession();
  state.current  = 0;
  state.results  = [];
  state.score    = 0;
  state.answered = false;
  renderDots();
  renderQuestion();
}

// ──────────────────────────────────────────────────────────
// DOTS
// ──────────────────────────────────────────────────────────
function renderDots() {
  const container = document.getElementById('dots');
  container.innerHTML = '';
  for (let i = 0; i < SESSION_SIZE; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === state.current ? ' active' : '');
    d.id = `dot-${i}`;
    container.appendChild(d);
  }
}

function updateDots() {
  for (let i = 0; i < SESSION_SIZE; i++) {
    const d = document.getElementById(`dot-${i}`);
    if (!d) continue;
    d.className = 'dot';
    if (i < state.results.length) {
      d.classList.add(state.results[i] ? 'done-correct' : 'done-wrong');
    } else if (i === state.current) {
      d.classList.add('active');
    }
  }
}

// ──────────────────────────────────────────────────────────
// CATEGORY PILL
// ──────────────────────────────────────────────────────────
function updateCategoryPill(category) {
  document.getElementById('catPill').textContent = category;
}

// ──────────────────────────────────────────────────────────
// RENDER QUESTION
// ──────────────────────────────────────────────────────────
function renderQuestion() {
  state.answered = false;
  const item = state.session[state.current];
  updateCategoryPill(item.phrase.category);
  updateDots();

  const main = document.getElementById('main');
  main.innerHTML = '';

  let card;
  switch (item.type) {
    case 'fill':   card = buildFillCard(item.phrase);   break;
    case 'choice': card = buildChoiceCard(item.phrase); break;
    case 'swap':   card = buildSwapCard(item.phrase);   break;
  }

  main.appendChild(card);
}

// ──────────────────────────────────────────────────────────
// BUILD: FILL THE GAP
// ──────────────────────────────────────────────────────────
function buildFillCard(phrase) {
  const { fill } = phrase;
  const options = shuffle([
    { text: fill.correct, correct: true },
    ...fill.wrong.map(w => ({ text: w, correct: false }))
  ]);

  const card = document.createElement('div');
  card.className = 'quiz-card';

  card.innerHTML = `
    <div class="quiz-badge badge-fill">
      <span class="badge-icon">✏️</span>
      Fill the Gap
    </div>
    <p class="quiz-instruction">Tap the word that correctly completes the sentence</p>
    <div class="phrase-box">
      <p class="phrase-text">${fill.blank.replace('___', '<span class="blank">___</span>')}</p>
    </div>
    <div class="options-grid" id="optionsGrid"></div>
    <div class="feedback" id="feedback"></div>
    <div class="phrase-reveal" id="phraseReveal">
      💬 <strong>${phrase.phrase}</strong>
    </div>
    <button class="continue-btn" id="continueBtn">
      Continue <span class="continue-arrow">→</span>
    </button>
  `;

  const grid = card.querySelector('#optionsGrid');
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.dataset.correct = opt.correct;
    btn.addEventListener('click', () => handleOptionAnswer(btn, card, phrase, opt.correct));
    grid.appendChild(btn);
  });

  card.querySelector('#continueBtn').addEventListener('click', nextQuestion);
  return card;
}

// ──────────────────────────────────────────────────────────
// BUILD: BEST PHRASE (choice)
// ──────────────────────────────────────────────────────────
function buildChoiceCard(phrase) {
  const { choice } = phrase;
  const letters = ['A','B','C','D'];
  const options = choice.options.map((text, i) => ({ text, correct: i === choice.correct }));

  const card = document.createElement('div');
  card.className = 'quiz-card';

  card.innerHTML = `
    <div class="quiz-badge badge-choice">
      <span class="badge-icon">🔤</span>
      Best Phrase
    </div>
    <p class="quiz-instruction">Which option sounds most natural in English?</p>
    <div class="choice-list" id="choiceList"></div>
    <div class="feedback" id="feedback"></div>
    <button class="continue-btn" id="continueBtn">
      Continue <span class="continue-arrow">→</span>
    </button>
  `;

  const list = card.querySelector('#choiceList');
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.correct = opt.correct;
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => handleOptionAnswer(btn, card, phrase, opt.correct));
    list.appendChild(btn);
  });

  card.querySelector('#continueBtn').addEventListener('click', nextQuestion);
  return card;
}

// ──────────────────────────────────────────────────────────
// BUILD: VERB SWAP
// ──────────────────────────────────────────────────────────
function buildSwapCard(phrase) {
  const { swap } = phrase;
  const options = swap.options.map((text, i) => ({ text, correct: i === swap.correct }));
  const shuffledOpts = shuffle(options);

  const highlighted = phrase.phrase.replace(
    phrase.verb,
    `<mark>${phrase.verb}</mark>`
  );

  const card = document.createElement('div');
  card.className = 'quiz-card';

  card.innerHTML = `
    <div class="quiz-badge badge-swap">
      <span class="badge-icon">🔄</span>
      Verb Swap
    </div>
    <p class="quiz-instruction">Which verb can replace the highlighted one?</p>
    <div class="phrase-box">
      <p class="phrase-text">${highlighted}</p>
    </div>
    <div class="options-grid" id="optionsGrid"></div>
    <div class="feedback" id="feedback"></div>
    <div class="phrase-reveal" id="phraseReveal"></div>
    <button class="continue-btn" id="continueBtn">
      Continue <span class="continue-arrow">→</span>
    </button>
  `;

  const grid = card.querySelector('#optionsGrid');
  shuffledOpts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.dataset.correct = opt.correct;
    btn.addEventListener('click', () => handleSwapAnswer(btn, card, phrase, opt));
    grid.appendChild(btn);
  });

  card.querySelector('#continueBtn').addEventListener('click', nextQuestion);
  return card;
}

// ──────────────────────────────────────────────────────────
// ANSWER HANDLING
// ──────────────────────────────────────────────────────────
function handleOptionAnswer(btn, card, phrase, isCorrect) {
  if (state.answered) return;
  state.answered = true;

  const allBtns = card.querySelectorAll('.option-btn, .choice-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
  });

  if (!isCorrect) btn.classList.add('wrong');

  showFeedback(card, isCorrect, phrase);
  recordResult(isCorrect);
}

function handleSwapAnswer(btn, card, phrase, opt) {
  if (state.answered) return;
  state.answered = true;

  const allBtns = card.querySelectorAll('.option-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
  });

  if (!opt.correct) btn.classList.add('wrong');

  const reveal = card.querySelector('#phraseReveal');
  if (reveal && opt.correct) {
    const newPhrase = phrase.phrase.replace(phrase.verb, opt.text);
    reveal.innerHTML = `💬 With this verb: <strong>"${newPhrase}"</strong>`;
    reveal.classList.add('visible');
  }

  showFeedback(card, opt.correct, phrase);
  recordResult(opt.correct);
}

function showFeedback(card, isCorrect, phrase) {
  const fb = card.querySelector('#feedback');
  if (!fb) return;

  if (isCorrect) {
    fb.className = 'feedback visible correct';
    fb.innerHTML = `<span class="feedback-icon">✅</span><span>Correct! Great job.</span>`;
    state.score++;
    state.streak++;
  } else {
    fb.className = 'feedback visible wrong';
    fb.innerHTML = `<span class="feedback-icon">❌</span><span>Not quite. The correct answer is highlighted in green.</span>`;
    state.streak = 0;
  }

  saveStreak();
  document.getElementById('streakNum').textContent = state.streak;

  const continueBtn = card.querySelector('#continueBtn');
  if (continueBtn) continueBtn.classList.add('visible');

  const phraseReveal = card.querySelector('#phraseReveal');
  if (phraseReveal && !phraseReveal.classList.contains('visible')) {
    phraseReveal.innerHTML = `💬 Full phrase: <strong>"${phrase.phrase}"</strong>`;
    phraseReveal.classList.add('visible');
  }
}

function recordResult(isCorrect) {
  state.results.push(isCorrect);
  updateDots();
}

// ──────────────────────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────────────────────
function nextQuestion() {
  state.current++;
  if (state.current >= SESSION_SIZE) {
    showSummary();
  } else {
    renderQuestion();
  }
}

// ──────────────────────────────────────────────────────────
// SUMMARY
// ──────────────────────────────────────────────────────────
function showSummary() {
  updateDots();

  const ratio = state.score / SESSION_SIZE;
  let msg;
  if (ratio === 1)        msg = MESSAGES.perfect;
  else if (ratio >= 0.8)  msg = MESSAGES.great;
  else if (ratio >= 0.6)  msg = MESSAGES.good;
  else if (ratio >= 0.4)  msg = MESSAGES.ok;
  else                    msg = MESSAGES.keep;

  const r = 45;
  const circ = 2 * Math.PI * r;
  const strokeColor = ratio === 1 ? 'var(--green)' : ratio >= 0.6 ? 'var(--accent)' : 'var(--amber)';
  const offset = circ * (1 - ratio);

  const card = document.createElement('div');
  card.className = 'summary-card';
  card.innerHTML = `
    <div class="summary-emoji">${msg.emoji}</div>
    <div>
      <p class="summary-title">${msg.title}</p>
      <p class="summary-subtitle">${msg.sub}</p>
    </div>
    <div class="score-ring">
      <svg class="score-svg" viewBox="0 0 100 100">
        <circle class="score-track" cx="50" cy="50" r="${r}" stroke-width="8"/>
        <circle class="score-fill" cx="50" cy="50" r="${r}"
          stroke="${strokeColor}"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${circ}"
          id="scoreFill"/>
      </svg>
      <div class="score-inner">
        <span class="score-num">${state.score}/${SESSION_SIZE}</span>
        <span class="score-denom">correct</span>
      </div>
    </div>
    <div class="summary-stats">
      <div class="stat-box">
        <span class="stat-val">${state.streak}</span>
        <span class="stat-lbl">🔥 Streak</span>
      </div>
      <div class="stat-box">
        <span class="stat-val">${Math.round(ratio * 100)}%</span>
        <span class="stat-lbl">Accuracy</span>
      </div>
      <div class="stat-box">
        <span class="stat-val">${formatTime(TIMER_SECONDS - state.timeLeft)}</span>
        <span class="stat-lbl">Time used</span>
      </div>
    </div>
    <button class="new-session-btn" id="newSessionBtn">New Session →</button>
  `;

  document.getElementById('main').innerHTML = '';
  document.getElementById('main').appendChild(card);

  // Animate score ring
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const fill = document.getElementById('scoreFill');
      if (fill) fill.style.strokeDashoffset = offset;
    });
  });

  card.querySelector('#newSessionBtn').addEventListener('click', () => {
    startSession();
    startTimer();
  });
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ──────────────────────────────────────────────────────────
// STATUS BAR CLOCK
// ──────────────────────────────────────────────────────────
function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, '0');
  const el = document.getElementById('sbTime');
  if (el) el.textContent = `${h}:${m}`;
}

// ──────────────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────────────
function init() {
  document.getElementById('streakNum').textContent = state.streak;
  updateClock();
  setInterval(updateClock, 30000);
  startSession();
  startTimer();
}

init();
