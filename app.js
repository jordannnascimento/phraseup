'use strict';

// ─────────────────────────────────────────────────────────
// PHRASE DATABASE — one phrase studied for 5 minutes
// ─────────────────────────────────────────────────────────
const PHRASES = [
  {
    phrase: "I'm looking forward to it",
    translation: "🇧🇷 Estou ansioso / animado com isso",
    category: "Feelings",
    tip: "Use when you feel <strong>excited or positive</strong> about something that's coming up soon.",
    fillSentence: "I'm ___ forward to it",
    fillAnswer: "looking",
    fillOptions: ["looking","look","looked","looks"],
    choiceCorrect: 0,
    choiceOptions: ["I'm looking forward to it","I'm looking forward for it","I look forward to it right now","I'm looked forward to it"],
    swapHighlight: "looking forward",
    swapCorrect: 1,
    swapOptions: ["running away from","excited about","forgetting about","worried about"],
    dialogue: [
      { who: "A", text: "The trip is this weekend!" },
      { who: "B", text: "I know! I'm looking forward to it.", highlight: "looking forward to it" },
      { who: "A", text: "Same — I can barely wait." }
    ],
    similar: ["I can't wait for it", "I'm so excited about it", "I'm counting down the days"],
    examples: ["I'm looking forward to the holidays.", "I'm looking forward to meeting you.", "I'm looking forward to hearing from you."],
    words: ["I'm","looking","forward","to","it"]
  },
  {
    phrase: "Could you do me a favor?",
    translation: "🇧🇷 Você poderia me fazer um favor?",
    category: "Requests",
    tip: "A <strong>polite and common</strong> way to ask someone for help with something.",
    fillSentence: "Could you ___ me a favor?",
    fillAnswer: "do",
    fillOptions: ["do","doing","did","does"],
    choiceCorrect: 2,
    choiceOptions: ["Could you doing me a favor?","Could you did me a favor?","Could you do me a favor?","Could you does me a favor?"],
    swapHighlight: "do me a favor",
    swapCorrect: 0,
    swapOptions: ["help me out","ignore me","leave me alone","forget it"],
    dialogue: [
      { who: "A", text: "Hey, could you do me a favor?", highlight: "do me a favor" },
      { who: "B", text: "Of course! What do you need?" },
      { who: "A", text: "Can you grab my bag from the car?" }
    ],
    similar: ["Can you help me out?", "Would you mind helping me?", "I need a small favor"],
    examples: ["Could you do me a favor and close the window?", "Could you do me a favor and call them back?", "Could you do me a favor and check this for me?"],
    words: ["Could","you","do","me","a","favor?"]
  },
  {
    phrase: "It's been a long day",
    translation: "🇧🇷 Foi um dia longo / cansativo",
    category: "Everyday",
    tip: "Use when you're <strong>tired</strong> after a difficult or very busy day.",
    fillSentence: "It's ___ a long day",
    fillAnswer: "been",
    fillOptions: ["been","be","being","was"],
    choiceCorrect: 1,
    choiceOptions: ["It's be a long day","It's been a long day","It's being a long day","It was been a long day"],
    swapHighlight: "long",
    swapCorrect: 0,
    swapOptions: ["rough","quick","fun","short"],
    dialogue: [
      { who: "A", text: "You look tired. Are you okay?" },
      { who: "B", text: "Yeah, it's been a long day. I'm exhausted.", highlight: "long day" },
      { who: "A", text: "Go rest. You deserve it." }
    ],
    similar: ["I'm exhausted", "I'm worn out", "What a day!"],
    examples: ["It's been a long day at work.", "It's been a long day — I need to sleep.", "It's been a long day, but it was worth it."],
    words: ["It's","been","a","long","day"]
  },
  {
    phrase: "I'll get back to you on that",
    translation: "🇧🇷 Eu te respondo sobre isso / Vou retornar",
    category: "Communication",
    tip: "Use when you <strong>need time</strong> to think or check something before answering.",
    fillSentence: "I'll get ___ to you on that",
    fillAnswer: "back",
    fillOptions: ["back","out","up","in"],
    choiceCorrect: 3,
    choiceOptions: ["I'll get back for you on that","I'll got back to you on that","I'll get back to you in that","I'll get back to you on that"],
    swapHighlight: "get back to you",
    swapCorrect: 2,
    swapOptions: ["forget about it","ignore you","follow up with you","leave you"],
    dialogue: [
      { who: "A", text: "Can we increase the budget for this?" },
      { who: "B", text: "I'll get back to you on that — I need to check first.", highlight: "get back to you on that" },
      { who: "A", text: "No problem, take your time." }
    ],
    similar: ["I'll follow up on that", "Let me check and come back to you", "I'll get you an answer soon"],
    examples: ["I'll get back to you on that by tomorrow.", "I'll get back to you on that after the meeting.", "I'll get back to you on that once I have more info."],
    words: ["I'll","get","back","to","you","on","that"]
  },
  {
    phrase: "Sorry, I didn't catch that",
    translation: "🇧🇷 Desculpa, não entendi / não ouvi",
    category: "Communication",
    tip: "A <strong>polite</strong> way to ask someone to repeat what they just said.",
    fillSentence: "Sorry, I didn't ___ that",
    fillAnswer: "catch",
    fillOptions: ["catch","caught","catching","catches"],
    choiceCorrect: 0,
    choiceOptions: ["Sorry, I didn't catch that","Sorry, I don't caught that","Sorry, I didn't catched that","Sorry, I doesn't catch that"],
    swapHighlight: "catch",
    swapCorrect: 1,
    swapOptions: ["ignore","hear","forget","miss on"],
    dialogue: [
      { who: "A", text: "The meeting is at half past three, okay?" },
      { who: "B", text: "Sorry, I didn't catch that. What time?", highlight: "didn't catch that" },
      { who: "A", text: "Half past three — 3:30." }
    ],
    similar: ["Could you repeat that?", "Pardon?", "What was that again?"],
    examples: ["Sorry, I didn't catch that — could you say it again?", "Sorry, I didn't catch your name.", "Sorry, I didn't catch the last part."],
    words: ["Sorry,","I","didn't","catch","that"]
  },
  {
    phrase: "Let's call it a day",
    translation: "🇧🇷 Vamos encerrar por hoje / parar por aqui",
    category: "Everyday",
    tip: "Use to suggest <strong>stopping work or an activity</strong> for the day.",
    fillSentence: "Let's ___ it a day",
    fillAnswer: "call",
    fillOptions: ["call","called","calling","calls"],
    choiceCorrect: 2,
    choiceOptions: ["Let's calling it a day","Let's called it a day","Let's call it a day","Let's calls it a day"],
    swapHighlight: "call it a day",
    swapCorrect: 0,
    swapOptions: ["wrap up for today","keep going","start over","ignore it"],
    dialogue: [
      { who: "A", text: "We've been at this for 6 hours." },
      { who: "B", text: "I think we should let's call it a day.", highlight: "call it a day" },
      { who: "A", text: "Agreed. We can pick it up tomorrow." }
    ],
    similar: ["Let's wrap it up", "Let's stop for today", "Time to call it quits"],
    examples: ["It's getting late — let's call it a day.", "We've done enough. Let's call it a day.", "Let's call it a day and rest."],
    words: ["Let's","call","it","a","day"]
  },
  {
    phrase: "I'm running a bit late",
    translation: "🇧🇷 Estou um pouco atrasado",
    category: "Everyday",
    tip: "Use to <strong>warn someone</strong> that you won't arrive on time.",
    fillSentence: "I'm ___ a bit late",
    fillAnswer: "running",
    fillOptions: ["running","run","ran","runs"],
    choiceCorrect: 1,
    choiceOptions: ["I'm run a bit late","I'm running a bit late","I ran a bit late right now","I'm runs a bit late"],
    swapHighlight: "running",
    swapCorrect: 3,
    swapOptions: ["sleeping","walking quickly","going early","getting"],
    dialogue: [
      { who: "A", text: "Where are you? We start in 5 minutes." },
      { who: "B", text: "I'm running a bit late — traffic is terrible.", highlight: "running a bit late" },
      { who: "A", text: "Okay, just get here as fast as you can." }
    ],
    similar: ["I'll be a few minutes late", "I'm behind schedule", "I'm not going to make it on time"],
    examples: ["I'm running a bit late — please start without me.", "I'm running a bit late this morning.", "I'm running a bit late but I'm almost there."],
    words: ["I'm","running","a","bit","late"]
  },
  {
    phrase: "What do you think?",
    translation: "🇧🇷 O que você acha? / O que você pensa?",
    category: "Opinion",
    tip: "Use to ask for someone's <strong>opinion or feedback</strong> on something.",
    fillSentence: "What do you ___?",
    fillAnswer: "think",
    fillOptions: ["think","thought","thinking","thinks"],
    choiceCorrect: 0,
    choiceOptions: ["What do you think?","What you think?","What do you thought?","What does you think?"],
    swapHighlight: "think",
    swapCorrect: 2,
    swapOptions: ["forget","ignore","reckon","sleep"],
    dialogue: [
      { who: "A", text: "I redesigned the logo. Here it is." },
      { who: "B", text: "It looks great! But what do you think about the colors?", highlight: "what do you think" },
      { who: "A", text: "I'm happy with it. What do you think overall?" }
    ],
    similar: ["What's your opinion?", "How does it look to you?", "What are your thoughts?"],
    examples: ["What do you think about the new design?", "What do you think we should do?", "What do you think of this idea?"],
    words: ["What","do","you","think?"]
  },
  {
    phrase: "I can't make it",
    translation: "🇧🇷 Não vou conseguir ir / Não consigo comparecer",
    category: "Social",
    tip: "Use to say you're <strong>unable to attend</strong> something or meet someone.",
    fillSentence: "I can't ___ it",
    fillAnswer: "make",
    fillOptions: ["make","made","making","makes"],
    choiceCorrect: 3,
    choiceOptions: ["I can't making it","I can't made it","I can't makes it","I can't make it"],
    swapHighlight: "make it",
    swapCorrect: 1,
    swapOptions: ["go there again","attend","forget it","leave"],
    dialogue: [
      { who: "A", text: "Are you coming to the dinner tonight?" },
      { who: "B", text: "I'm sorry, I can't make it. I have plans already.", highlight: "can't make it" },
      { who: "A", text: "That's a shame. Maybe next time!" }
    ],
    similar: ["I won't be able to come", "I have to skip this one", "Count me out"],
    examples: ["I can't make it to the meeting — can we reschedule?", "I can't make it tonight, sorry.", "I can't make it this weekend."],
    words: ["I","can't","make","it"]
  },
  {
    phrase: "I'll take care of it",
    translation: "🇧🇷 Eu cuido disso / Eu me encarrego disso",
    category: "Responsibility",
    tip: "Use to assure someone that <strong>you'll handle</strong> a task or solve a problem.",
    fillSentence: "I'll take ___ of it",
    fillAnswer: "care",
    fillOptions: ["care","cared","caring","cares"],
    choiceCorrect: 1,
    choiceOptions: ["I'll take care for it","I'll take care of it","I'll taking care of it","I'll took care of it"],
    swapHighlight: "take care of it",
    swapCorrect: 2,
    swapOptions: ["ignore it","break it","handle it","forget it"],
    dialogue: [
      { who: "A", text: "Someone needs to fix this before tomorrow." },
      { who: "B", text: "Don't worry — I'll take care of it.", highlight: "take care of it" },
      { who: "A", text: "Great, thank you so much." }
    ],
    similar: ["I'll handle it", "Leave it to me", "I've got it covered"],
    examples: ["I'll take care of it before the deadline.", "I'll take care of it — don't stress.", "I'll take care of it right away."],
    words: ["I'll","take","care","of","it"]
  },
  {
    phrase: "Give me a second",
    translation: "🇧🇷 Me dá um segundo / Espera um momento",
    category: "Everyday",
    tip: "Use when you need a <strong>brief pause</strong> before responding or acting.",
    fillSentence: "___ me a second",
    fillAnswer: "Give",
    fillOptions: ["Give","Gave","Giving","Gives"],
    choiceCorrect: 0,
    choiceOptions: ["Give me a second","Gave me a second","Giving me a second","Gives me a second"],
    swapHighlight: "a second",
    swapCorrect: 1,
    swapOptions: ["forever","a moment","never","a year"],
    dialogue: [
      { who: "A", text: "Can you answer this right now?" },
      { who: "B", text: "Give me a second — I'm just finishing something.", highlight: "Give me a second" },
      { who: "A", text: "Sure, no rush." }
    ],
    similar: ["Hold on a moment", "One sec", "Give me a minute"],
    examples: ["Give me a second to think about it.", "Give me a second, I'll be right back.", "Give me a second to check that."],
    words: ["Give","me","a","second"]
  },
  {
    phrase: "That makes total sense",
    translation: "🇧🇷 Isso faz todo sentido / Entendo completamente",
    category: "Understanding",
    tip: "Use to show you <strong>fully understand and agree</strong> with what someone explained.",
    fillSentence: "That makes ___ sense",
    fillAnswer: "total",
    fillOptions: ["total","totally","totaling","much"],
    choiceCorrect: 2,
    choiceOptions: ["That makes totally sense","That making total sense","That makes total sense","That made total sense right now"],
    swapHighlight: "total",
    swapCorrect: 0,
    swapOptions: ["perfect","no","zero","little"],
    dialogue: [
      { who: "A", text: "We should test it before launching, not after." },
      { who: "B", text: "That makes total sense. Why didn't I think of that?", highlight: "makes total sense" },
      { who: "A", text: "Better late than never!" }
    ],
    similar: ["That totally makes sense", "I totally get it", "That's completely logical"],
    examples: ["That makes total sense given the context.", "That makes total sense — thanks for explaining.", "Oh, that makes total sense now!"],
    words: ["That","makes","total","sense"]
  },
  {
    phrase: "I appreciate it",
    translation: "🇧🇷 Eu agradeço / Valorizo muito isso",
    category: "Gratitude",
    tip: "A warm and genuine way to <strong>thank someone</strong> for something they did.",
    fillSentence: "I ___ it",
    fillAnswer: "appreciate",
    fillOptions: ["appreciate","appreciated","appreciating","appreciates"],
    choiceCorrect: 1,
    choiceOptions: ["I appreciating it","I appreciate it","I appreciated it right now","I appreciates it"],
    swapHighlight: "appreciate",
    swapCorrect: 3,
    swapOptions: ["ignore","hate","forget","value"],
    dialogue: [
      { who: "A", text: "I stayed late to help you finish the project." },
      { who: "B", text: "I really appreciate it. You didn't have to do that.", highlight: "appreciate it" },
      { who: "A", text: "Happy to help!" }
    ],
    similar: ["Thank you so much", "I'm so grateful", "I can't thank you enough"],
    examples: ["I really appreciate it — thank you.", "I appreciate it more than you know.", "I appreciate it, that was very kind."],
    words: ["I","appreciate","it"]
  },
  {
    phrase: "I'll figure it out",
    translation: "🇧🇷 Eu vou resolver / Vou dar um jeito",
    category: "Confidence",
    tip: "Use to show <strong>confidence</strong> that you'll find a solution, even if you don't know how yet.",
    fillSentence: "I'll ___ it out",
    fillAnswer: "figure",
    fillOptions: ["figure","figured","figuring","figures"],
    choiceCorrect: 0,
    choiceOptions: ["I'll figure it out","I'll figured it out","I'll figuring it out","I'll figures it out"],
    swapHighlight: "figure it out",
    swapCorrect: 2,
    swapOptions: ["ignore it","give up","work it out","forget it"],
    dialogue: [
      { who: "A", text: "Do you know how to fix this?" },
      { who: "B", text: "Not yet, but I'll figure it out. Give me some time.", highlight: "figure it out" },
      { who: "A", text: "I know you will. You always do." }
    ],
    similar: ["I'll work it out", "I'll find a way", "I'll sort it out"],
    examples: ["Don't worry — I'll figure it out.", "I'll figure it out as I go.", "I'll figure it out eventually."],
    words: ["I'll","figure","it","out"]
  },
  {
    phrase: "That works for me",
    translation: "🇧🇷 Isso funciona pra mim / Topo / Pode ser",
    category: "Agreement",
    tip: "Use to <strong>agree with a suggestion</strong>, plan, or time that someone proposes.",
    fillSentence: "That ___ for me",
    fillAnswer: "works",
    fillOptions: ["works","work","worked","working"],
    choiceCorrect: 3,
    choiceOptions: ["That work for me","That working for me","That worked for me right now","That works for me"],
    swapHighlight: "works for me",
    swapCorrect: 1,
    swapOptions: ["bothers me","suits me","scares me","confuses me"],
    dialogue: [
      { who: "A", text: "How about we meet at 3pm on Thursday?" },
      { who: "B", text: "That works for me! I'll put it in my calendar.", highlight: "works for me" },
      { who: "A", text: "Perfect. See you then." }
    ],
    similar: ["That suits me fine", "Works for me", "I'm good with that"],
    examples: ["Friday at noon? That works for me.", "That works for me — let's do it.", "Any time after 2pm works for me."],
    words: ["That","works","for","me"]
  },
  {
    phrase: "I'm doing my best",
    translation: "🇧🇷 Estou fazendo o meu melhor",
    category: "Effort",
    tip: "Use to let someone know you're <strong>trying as hard as you can</strong>.",
    fillSentence: "I'm doing my ___",
    fillAnswer: "best",
    fillOptions: ["best","better","good","well"],
    choiceCorrect: 1,
    choiceOptions: ["I'm doing my better","I'm doing my best","I'm do my best","I'm did my best right now"],
    swapHighlight: "my best",
    swapCorrect: 0,
    swapOptions: ["everything I can","nothing","the minimum","my worst"],
    dialogue: [
      { who: "A", text: "The results aren't great this quarter." },
      { who: "B", text: "I know. But I'm doing my best with what we have.", highlight: "doing my best" },
      { who: "A", text: "I see that. Keep going." }
    ],
    similar: ["I'm trying my hardest", "I'm giving it my all", "I'm putting in the effort"],
    examples: ["I'm doing my best to finish on time.", "I'm doing my best — I promise.", "I'm doing my best, but it's not easy."],
    words: ["I'm","doing","my","best"]
  },
  {
    phrase: "Just to be clear",
    translation: "🇧🇷 Só para deixar claro / Para esclarecer",
    category: "Communication",
    tip: "Use before explaining something to <strong>avoid misunderstandings</strong>.",
    fillSentence: "Just to be ___",
    fillAnswer: "clear",
    fillOptions: ["clear","clearly","clearing","cleared"],
    choiceCorrect: 2,
    choiceOptions: ["Just to be clearly","Just be clear","Just to be clear","Just to being clear"],
    swapHighlight: "clear",
    swapCorrect: 3,
    swapOptions: ["confusing","vague","unclear","transparent"],
    dialogue: [
      { who: "A", text: "So the deadline is flexible, right?" },
      { who: "B", text: "Just to be clear — the deadline is fixed. No extensions.", highlight: "Just to be clear" },
      { who: "A", text: "Got it. I understand now." }
    ],
    similar: ["To make it clear", "Let me clarify", "I want to make sure we're on the same page"],
    examples: ["Just to be clear, this is not optional.", "Just to be clear — who's responsible for this?", "Just to be clear, I'm not complaining."],
    words: ["Just","to","be","clear"]
  },
  {
    phrase: "That's a good point",
    translation: "🇧🇷 Isso é um bom ponto / Faz sentido",
    category: "Opinion",
    tip: "Use to <strong>acknowledge</strong> when someone makes a valid or insightful observation.",
    fillSentence: "That's a ___ point",
    fillAnswer: "good",
    fillOptions: ["good","well","great","better"],
    choiceCorrect: 0,
    choiceOptions: ["That's a good point","That's a well point","That's a better point right now","That's good a point"],
    swapHighlight: "good",
    swapCorrect: 2,
    swapOptions: ["terrible","boring","great","no"],
    dialogue: [
      { who: "A", text: "Maybe we should test with real users before launching." },
      { who: "B", text: "That's a good point. We should definitely do that.", highlight: "good point" },
      { who: "A", text: "I'll set it up for next week." }
    ],
    similar: ["You make a good point", "Fair point", "You're right about that"],
    examples: ["That's a good point — I hadn't thought of that.", "That's a good point. Let's reconsider.", "That's a good point about the timing."],
    words: ["That's","a","good","point"]
  },
  {
    phrase: "Let me know if you need anything",
    translation: "🇧🇷 Me avisa se precisar de algo",
    category: "Kindness",
    tip: "A friendly offer of help — shows you're <strong>available and willing</strong> to support someone.",
    fillSentence: "Let me know if you ___ anything",
    fillAnswer: "need",
    fillOptions: ["need","needed","needs","needing"],
    choiceCorrect: 1,
    choiceOptions: ["Let me know if you needed anything","Let me know if you need anything","Let me know if you needs anything","Let me knows if you need anything"],
    swapHighlight: "need",
    swapCorrect: 0,
    swapOptions: ["require","ignore","forget","leave"],
    dialogue: [
      { who: "A", text: "Thanks for your help today." },
      { who: "B", text: "No problem! Let me know if you need anything else.", highlight: "need anything" },
      { who: "A", text: "Will do. Thanks again!" }
    ],
    similar: ["I'm here if you need me", "Feel free to reach out", "Don't hesitate to ask"],
    examples: ["Let me know if you need anything — I'm around.", "Let me know if you need anything before the deadline.", "Let me know if you need anything at all."],
    words: ["Let","me","know","if","you","need","anything"]
  },
  {
    phrase: "I totally forgot",
    translation: "🇧🇷 Eu esqueci completamente / Me esqueci",
    category: "Everyday",
    tip: "Use to <strong>honestly admit</strong> that something completely slipped your mind.",
    fillSentence: "I totally ___",
    fillAnswer: "forgot",
    fillOptions: ["forgot","forget","forgotten","forgetting"],
    choiceCorrect: 3,
    choiceOptions: ["I totally forget","I totally forgetting","I totally forgotten","I totally forgot"],
    swapHighlight: "totally",
    swapCorrect: 2,
    swapOptions: ["slightly","never","completely","always"],
    dialogue: [
      { who: "A", text: "Did you send that email I asked about?" },
      { who: "B", text: "Oh no — I totally forgot! I'll send it right now.", highlight: "totally forgot" },
      { who: "A", text: "No worries, just whenever you can." }
    ],
    similar: ["It completely slipped my mind", "I blanked on that", "I didn't remember at all"],
    examples: ["I totally forgot about the meeting — I'm so sorry.", "I totally forgot your birthday. Happy belated!", "I totally forgot to reply to that message."],
    words: ["I","totally","forgot"]
  }
];

// ─────────────────────────────────────────────────────────
// ACTIVITY SEQUENCE
// ─────────────────────────────────────────────────────────
// Intro plays once. Then the other activities cycle indefinitely.
const ALL_ACTIVITIES    = ['intro','fill','context','choice','scramble','swap','similar','examples'];
const REPEAT_FROM       = 1; // skip 'intro' when cycling

// ─────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────
const state = {
  phrases:      [],
  phraseIdx:    0,
  actIdx:       0,
  timeLeft:     5 * 60,
  timerInterval: null,
  streak:       parseInt(localStorage.getItem('phraseup_streak') || '0'),
  scramble:     { bank: [], sentence: [], checking: false }
};

// ─────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function highlightText(text, highlight) {
  if (!highlight) return text;
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// ─────────────────────────────────────────────────────────
// TIMER
// ─────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timerInterval);
  state.timeLeft = 5 * 60;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      advancePhrase();
    }
  }, 1000);
}

function updateTimerUI() {
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  const label = `${m}:${s.toString().padStart(2, '0')}`;
  document.getElementById('countdownLabel').textContent = label;

  const fill  = document.getElementById('timerBarFill');
  const chip  = document.getElementById('countdownChip');
  const pct   = (state.timeLeft / (5 * 60)) * 100;
  fill.style.width = pct + '%';

  fill.classList.remove('warning','urgent');
  chip.classList.remove('warning','urgent');

  if (state.timeLeft <= 60) {
    fill.classList.add('urgent'); chip.classList.add('urgent');
  } else if (state.timeLeft <= 120) {
    fill.classList.add('warning'); chip.classList.add('warning');
  }
}

// ─────────────────────────────────────────────────────────
// PHRASE CYCLING
// ─────────────────────────────────────────────────────────
function advancePhrase() {
  const overlay = document.getElementById('newPhraseOverlay');
  overlay.classList.add('show');
  setTimeout(() => {
    overlay.classList.remove('show');
    state.phraseIdx = (state.phraseIdx + 1) % state.phrases.length;
    state.actIdx    = 0;
    renderPhrasePanel();
    renderActivity();
    startTimer();
  }, 1400);
}

// ─────────────────────────────────────────────────────────
// PHRASE PANEL
// ─────────────────────────────────────────────────────────
function renderPhrasePanel() {
  const p = state.phrases[state.phraseIdx];
  const num = state.phraseIdx + 1;
  document.getElementById('phraseNum').textContent    = `Phrase ${num} of ${state.phrases.length}`;
  document.getElementById('phraseCat').textContent    = p.category;
  document.getElementById('phraseMain').textContent   = `"${p.phrase}"`;
  document.getElementById('phraseTranslation').textContent = p.translation;
}

// ─────────────────────────────────────────────────────────
// NEXT ACTIVITY
// ─────────────────────────────────────────────────────────
document.getElementById('nextBtn').addEventListener('click', () => {
  state.actIdx++;
  if (state.actIdx >= ALL_ACTIVITIES.length) {
    state.actIdx = REPEAT_FROM;
  }
  renderActivity();
});

// ─────────────────────────────────────────────────────────
// RENDER ACTIVITY
// ─────────────────────────────────────────────────────────
function renderActivity() {
  const p    = state.phrases[state.phraseIdx];
  const type = ALL_ACTIVITIES[state.actIdx];
  const card = document.getElementById('activityCard');
  card.innerHTML = '';
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  switch (type) {
    case 'intro':    renderIntro(p, card);    break;
    case 'fill':     renderFill(p, card);     break;
    case 'context':  renderContext(p, card);  break;
    case 'choice':   renderChoice(p, card);   break;
    case 'scramble': renderScramble(p, card); break;
    case 'swap':     renderSwap(p, card);     break;
    case 'similar':  renderSimilar(p, card);  break;
    case 'examples': renderExamples(p, card); break;
  }
}

// ─────────────────────────────────────────────────────────
// 1. INTRO
// ─────────────────────────────────────────────────────────
function renderIntro(p, card) {
  card.innerHTML = `
    <div class="act-badge act-intro">✦ Read & understand</div>
    <div class="phrase-box">
      <p class="phrase-box-text">"${p.phrase}"</p>
    </div>
    <div class="intro-tip">
      💡 <strong>When to use:</strong> ${p.tip}
    </div>
    <div class="list-items">
      <div class="list-item"><div class="list-dot"></div><span>${p.translation}</span></div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────
// 2. FILL THE GAP
// ─────────────────────────────────────────────────────────
function renderFill(p, card) {
  const opts = shuffle([
    { text: p.fillAnswer, correct: true },
    ...p.fillOptions.filter(o => o !== p.fillAnswer).map(o => ({ text: o, correct: false }))
  ]);

  card.innerHTML = `
    <div class="act-badge act-fill">✏️ Fill the gap</div>
    <p class="act-instruction">Tap the word that correctly completes the sentence.</p>
    <div class="phrase-box">
      <p class="phrase-box-text">${p.fillSentence.replace('___', '<span class="gap">___</span>')}</p>
    </div>
    <div class="opts-grid" id="optsGrid"></div>
    <div class="feedback" id="feedback"></div>
  `;

  const grid = card.querySelector('#optsGrid');
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => handleOpt(btn, grid, opt.correct, card));
    grid.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────────────
// 3. CONTEXT (dialogue)
// ─────────────────────────────────────────────────────────
function renderContext(p, card) {
  const lines = p.dialogue.map((line, i) => {
    const isMe   = i % 2 === 1;
    const cls    = isMe ? 'me' : 'them';
    const who    = isMe ? 'You' : 'Them';
    const text   = line.highlight ? highlightText(line.text, line.highlight) : line.text;
    return `
      <div class="dialogue-line ${cls}">
        <span class="d-who">${who}</span>
        <div class="d-bubble">${text}</div>
      </div>
    `;
  }).join('');

  card.innerHTML = `
    <div class="act-badge act-context">💬 In context</div>
    <p class="act-instruction">See how the phrase is used in a real conversation.</p>
    <div class="dialogue">${lines}</div>
  `;
}

// ─────────────────────────────────────────────────────────
// 4. CHOICE (best phrase)
// ─────────────────────────────────────────────────────────
function renderChoice(p, card) {
  const letters  = ['A','B','C','D'];
  const opts     = p.choiceOptions.map((text, i) => ({ text, correct: i === p.choiceCorrect }));

  card.innerHTML = `
    <div class="act-badge act-choice">🔤 Best phrase</div>
    <p class="act-instruction">Which option sounds most natural in English?</p>
    <div class="choice-list" id="choiceList"></div>
    <div class="feedback" id="feedback"></div>
  `;

  const list = card.querySelector('#choiceList');
  opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-ltr">${letters[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => handleChoice(btn, list, opt.correct, card));
    list.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────────────
// 5. SCRAMBLE
// ─────────────────────────────────────────────────────────
function renderScramble(p, card) {
  const correct = p.words;
  state.scramble = { bank: shuffle([...correct]), sentence: [], checking: false };

  card.innerHTML = `
    <div class="act-badge act-scramble">🔀 Unscramble</div>
    <p class="act-instruction">Tap the words in the correct order to rebuild the phrase.</p>
    <div class="scramble-sentence" id="scrambleSentence"></div>
    <div class="scramble-bank" id="scrambleBank"></div>
    <div class="feedback" id="feedback"></div>
    <button class="scramble-check-btn" id="checkBtn" style="display:none">Check ✓</button>
  `;

  renderScrambleState(card, correct);
}

function renderScrambleState(card, correct) {
  const sentEl = card.querySelector('#scrambleSentence');
  const bankEl = card.querySelector('#scrambleBank');
  const checkBtn = card.querySelector('#checkBtn');

  sentEl.innerHTML = '';
  bankEl.innerHTML = '';

  state.scramble.sentence.forEach((word, i) => {
    const chip = document.createElement('div');
    chip.className = 'word-chip in-sentence';
    chip.textContent = word;
    chip.addEventListener('click', () => {
      state.scramble.bank.push(word);
      state.scramble.sentence.splice(i, 1);
      renderScrambleState(card, correct);
    });
    sentEl.appendChild(chip);
  });

  state.scramble.bank.forEach((word, i) => {
    const chip = document.createElement('div');
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.addEventListener('click', () => {
      state.scramble.sentence.push(word);
      state.scramble.bank.splice(i, 1);
      renderScrambleState(card, correct);
    });
    bankEl.appendChild(chip);
  });

  checkBtn.style.display = state.scramble.bank.length === 0 ? 'block' : 'none';
  checkBtn.onclick = () => checkScramble(card, correct);
}

function checkScramble(card, correct) {
  const isCorrect = JSON.stringify(state.scramble.sentence) === JSON.stringify(correct);
  const sentEl    = card.querySelector('#scrambleSentence');
  const fb        = card.querySelector('#feedback');

  sentEl.classList.remove('correct-border','wrong-border');
  sentEl.classList.add(isCorrect ? 'correct-border' : 'wrong-border');

  if (isCorrect) {
    fb.className = 'feedback show correct';
    fb.innerHTML = `<span>✅</span><span>Perfect! That's the correct order.</span>`;
    state.streak++;
  } else {
    fb.className = 'feedback show wrong';
    fb.innerHTML = `<span>❌</span><span>Not quite. Correct: <strong>${correct.join(' ')}</strong></span>`;
    state.streak = 0;
  }
  localStorage.setItem('phraseup_streak', state.streak);
  document.getElementById('streakNum').textContent = state.streak;
}

// ─────────────────────────────────────────────────────────
// 6. SWAP
// ─────────────────────────────────────────────────────────
function renderSwap(p, card) {
  const opts = shuffle(
    p.swapOptions.map((text, i) => ({ text, correct: i === p.swapCorrect }))
  );

  const highlighted = p.phrase.replace(
    new RegExp(`(${p.swapHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
    '<mark>$1</mark>'
  );

  card.innerHTML = `
    <div class="act-badge act-swap">🔄 Verb swap</div>
    <p class="act-instruction">Which word or expression can replace the highlighted part?</p>
    <div class="phrase-box">
      <p class="phrase-box-text">${highlighted}</p>
    </div>
    <div class="opts-grid" id="optsGrid"></div>
    <div class="feedback" id="feedback"></div>
  `;

  const grid = card.querySelector('#optsGrid');
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => handleOpt(btn, grid, opt.correct, card));
    grid.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────────────
// 7. SIMILAR PHRASES
// ─────────────────────────────────────────────────────────
function renderSimilar(p, card) {
  const items = p.similar.map(s =>
    `<div class="list-item"><div class="list-dot"></div><span>"${s}"</span></div>`
  ).join('');

  card.innerHTML = `
    <div class="act-badge act-similar">🔗 Similar phrases</div>
    <p class="act-instruction">These expressions carry a similar meaning. Good to know!</p>
    <div class="list-items">${items}</div>
  `;
}

// ─────────────────────────────────────────────────────────
// 8. EXAMPLES
// ─────────────────────────────────────────────────────────
function renderExamples(p, card) {
  const items = p.examples.map(ex => {
    const highlighted = ex.replace(
      new RegExp(`(${p.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
      '<mark>$1</mark>'
    );
    return `<div class="list-item"><div class="list-dot"></div><span>${highlighted}</span></div>`;
  }).join('');

  card.innerHTML = `
    <div class="act-badge act-examples">📖 More examples</div>
    <p class="act-instruction">See the phrase used in different situations.</p>
    <div class="list-items">${items}</div>
  `;
}

// ─────────────────────────────────────────────────────────
// ANSWER HANDLERS
// ─────────────────────────────────────────────────────────
function handleOpt(btn, grid, isCorrect, card) {
  const allBtns = grid.querySelectorAll('.opt-btn');
  if ([...allBtns].some(b => b.disabled)) return;

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.textContent === (isCorrect ? btn.textContent : '') && !isCorrect) return;
  });

  allBtns.forEach(b => { if (b.dataset.correct === 'true') {} });

  // Mark correct ones green, wrong one red
  allBtns.forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
    state.streak++;
  } else {
    btn.classList.add('wrong');
    // find and highlight correct
    allBtns.forEach(b => {
      if (b !== btn) {
        // We need to know which is correct — store on dataset
      }
    });
    state.streak = 0;
  }

  showFeedback(card, isCorrect);
  localStorage.setItem('phraseup_streak', state.streak);
  document.getElementById('streakNum').textContent = state.streak;
}

function handleChoice(btn, list, isCorrect, card) {
  const allBtns = list.querySelectorAll('.choice-btn');
  if ([...allBtns].some(b => b.disabled)) return;

  allBtns.forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
    state.streak++;
  } else {
    btn.classList.add('wrong');
    state.streak = 0;
  }

  showFeedback(card, isCorrect);
  localStorage.setItem('phraseup_streak', state.streak);
  document.getElementById('streakNum').textContent = state.streak;
}

function showFeedback(card, isCorrect) {
  const fb = card.querySelector('#feedback');
  if (!fb) return;
  fb.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
  fb.innerHTML = isCorrect
    ? `<span>✅</span><span>Correct! Well done.</span>`
    : `<span>❌</span><span>Not quite — the correct answer is highlighted.</span>`;
}

// ─────────────────────────────────────────────────────────
// CLOCK
// ─────────────────────────────────────────────────────────
function updateClock() {
  const now = new Date();
  const el  = document.getElementById('sbTime');
  if (el) el.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
}

// ─────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────
function init() {
  state.phrases = shuffle(PHRASES);
  state.phraseIdx = 0;
  state.actIdx    = 0;

  document.getElementById('streakNum').textContent = state.streak;
  updateClock();
  setInterval(updateClock, 30000);

  renderPhrasePanel();
  renderActivity();
  startTimer();
}

init();
