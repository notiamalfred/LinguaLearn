/* Practice questions: sign in -> choose Core or M2 -> choose a topic -> (choose a question type) -> do the questions.
   The questions themselves live in question-data.js (QUESTIONS_DATA) and are shown exactly as written. */
(function () {
  "use strict";

  // The two syllabuses, in the order they appear. "key" must match the keys in QUESTIONS_DATA.
  const GROUPS = [
    { key: "core", label: "Core" },
    { key: "m2", label: "M2" },
  ];

  // Optional nicer names for topic keys. Anything not listed is made readable automatically
  // (e.g. "coordinate_geometry" -> "Coordinate Geometry").
  const TOPIC_LABELS = {
    trigonometry: "Trigonometry",
    quadratic_equation: "Quadratic Equation",
    functions_and_graphs: "Functions and Graphs",
    more_about_trigonometric_functions: "More about Trigonometric Functions",
  };

  // Saved progress lives in this Supabase table (see supabase-practice-progress.sql).
  const PROGRESS_TABLE = "practice_progress";

  const $ = (id) => document.getElementById(id);
  const els = {
    status: $("status"), app: $("app"), crumbs: $("crumbs"),
    stepSyllabus: $("step-syllabus"), stepTopic: $("step-topic"), stepType: $("step-type"), stepQuiz: $("step-quiz"),
    titleSyllabus: $("title-syllabus"), titleTopic: $("title-topic"), titleType: $("title-type"), titleQuiz: $("title-quiz"),
    typeChoices: $("type-choices"), backToTopicsFromTypes: $("back-to-topics-from-types"),
    backToTypes: $("back-to-types"), doneTypes: $("done-types"), saveLabel: $("save-label"),
    syllabusChoices: $("syllabus-choices"), topicChoices: $("topic-choices"), topicEmpty: $("topic-empty"),
    backToSyllabus: $("back-to-syllabus"), backToTopics: $("back-to-topics"),
    quizBody: $("quiz-body"), progress: $("progress"), bar: $("bar"),
    saveBox: $("save-progress"), saveStatus: $("save-status"), qimages: $("qimages"), steps: $("steps"), stepsText: $("steps-text"), stepsImages: $("steps-images"),
    level: $("level"), question: $("question"), answer: $("answer"), answerText: $("answer-text"),
    prev: $("prev"), next: $("next"), toggleAnswer: $("toggle-answer"),
    done: $("done"), doneTitle: $("done-title"), doneText: $("done-text"),
    restart: $("restart"), doneTopics: $("done-topics"),
    signOut: $("signout"), who: $("user"),
  };

  function fail(text) {
    els.status.hidden = false;
    els.status.className = "ml-message ml-message--error";
    els.status.textContent = text;
  }

  if (!window.ML) {
    fail("Accounts aren't set up on this site yet.");
    return;
  }

  // ---- helpers --------------------------------------------------------------
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  function topicLabel(key) {
    if (TOPIC_LABELS[key]) return TOPIC_LABELS[key];
    return key.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function groupLabel(key) {
    const g = GROUPS.find((x) => x.key === key);
    return g ? g.label : key;
  }

  // Topics of a syllabus that actually have questions.
  function topicsOf(groupKey) {
    const group = (window.__ML_QUESTIONS || {})[groupKey] || {};
    return Object.keys(group).filter((k) => Array.isArray(group[k]) && group[k].length > 0);
  }

  // ---- question types ---------------------------------------------------------
  // A question may carry  type: "Centers of Triangle"  in question-data.js. A topic offers a choice of types
  // when its questions use two or more different types (shown in the order they first appear).
  // If only some questions have a type, the rest are grouped under "Other".
  const OTHER_TYPE = "Other";
  function typeOfQuestion(q) { return q.type || OTHER_TYPE; }
  function typesOf(groupKey, topicKey) {
    const qs = ((window.__ML_QUESTIONS || {})[groupKey] || {})[topicKey] || [];
    if (!qs.some((q) => q.type)) return [];
    const out = [];
    qs.forEach((q) => { const t = typeOfQuestion(q); if (!out.includes(t)) out.push(t); });
    return out.length >= 2 ? out : [];
  }
  function questionsFor(groupKey, topicKey, type) {
    const qs = window.__ML_QUESTIONS[groupKey][topicKey];
    return type ? qs.filter((q) => typeOfQuestion(q) === type) : qs;
  }
  function slug(text) { return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
  function progressKeyFor(topicKey, type) { return type ? topicKey + "#" + slug(type) : topicKey; }
  function scopeWord() { return state.type ? "question type" : "topic"; }

  // Load the question bank only now that sign-in is confirmed.
  function loadQuestionData() {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "question-data.js";
      s.onload = () => {
        // QUESTIONS_DATA is a top-level `const` in question-data.js, so it is visible by name, not on window.
        if (typeof QUESTIONS_DATA === "undefined" || !QUESTIONS_DATA || typeof QUESTIONS_DATA !== "object") {
          reject(new Error("QUESTIONS_DATA missing"));
          return;
        }
        window.__ML_QUESTIONS = QUESTIONS_DATA;
        resolve();
      };
      s.onerror = () => reject(new Error("question-data.js failed to load"));
      document.head.appendChild(s);
    });
  }

  // Ask MathJax to render \( ... \) inside `node`. Safe to call before MathJax has loaded:
  // MathJax typesets the whole page by itself once it finishes loading.
  function typeset(node) {
    const mj = window.MathJax;
    if (!mj || !mj.startup || !mj.startup.promise) return;
    mj.startup.promise
      .then(() => {
        if (mj.typesetClear) mj.typesetClear([node]);
        return mj.typesetPromise([node]);
      })
      .catch((err) => console.error("MathJax:", err));
  }

  // ---- state & rendering -----------------------------------------------------
  // `list` is the questions of the current topic in the order this person sees them.
  // `saved` is true when they chose to keep their progress for this topic.
  // `type` is the chosen question type (null = all questions of the topic); `hasTypes` says whether this topic offers a choice.
  // `progressKey` is what saved progress is filed under: the topic key, or "topic#type-name" for one question type.
  const state = { group: null, topic: null, type: null, hasTypes: false, progressKey: null, index: 0, revealed: false, list: [], saved: false, userId: null, loadToken: 0 };

  // ---- order & saved progress -------------------------------------------------
  // Fisher-Yates shuffle (returns a new array).
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Put `questions` in the saved order of ids. Ids that no longer exist are skipped;
  // questions added since the order was saved go at the end (in the order they appear in question-data.js).
  function applySavedOrder(questions, savedIds) {
    const byId = new Map(questions.map((q) => [q.id, q]));
    const used = new Set();
    const out = [];
    (Array.isArray(savedIds) ? savedIds : []).forEach((id) => {
      const q = byId.get(id);
      if (q && !used.has(id)) { out.push(q); used.add(id); }
    });
    questions.forEach((q) => { if (!used.has(q.id)) out.push(q); });
    return out;
  }

  async function loadSavedProgress(group, topic) {
    const { data, error } = await window.ML.db
      .from(PROGRESS_TABLE)
      .select("question_order, position")
      .eq("user_id", state.userId).eq("syllabus", group).eq("topic", topic)
      .maybeSingle();
    if (error) throw error;
    return data; // null when nothing is saved
  }

  // Writes are queued so they always reach the server in the order they were made.
  let writeChain = Promise.resolve();
  function queueWrite(task) {
    writeChain = writeChain.then(task).then(
      () => { setSaveHint(); },
      (err) => { console.error("Saving progress failed:", err); setSaveHint("We couldn't reach the server, so your progress may not be saved."); }
    );
  }

  // Save (or update) the order and position of the current topic. Does nothing unless "Save my progress" is ticked.
  function persistProgress() {
    if (!state.saved) return;
    const row = {
      user_id: state.userId, syllabus: state.group, topic: state.progressKey,
      question_order: state.list.map((q) => q.id),
      position: state.index,
      updated_at: new Date().toISOString(),
    };
    queueWrite(async () => {
      const { error } = await window.ML.db.from(PROGRESS_TABLE).upsert(row, { onConflict: "user_id,syllabus,topic" });
      if (error) throw error;
    });
  }

  // Forget the saved progress of the current topic (next visit: a fresh random order).
  function clearProgress() {
    const { userId, group, topic } = { userId: state.userId, group: state.group, topic: state.progressKey };
    queueWrite(async () => {
      const { error } = await window.ML.db.from(PROGRESS_TABLE).delete()
        .eq("user_id", userId).eq("syllabus", group).eq("topic", topic);
      if (error) throw error;
    });
  }

  function setSaveHint(problem) {
    els.saveStatus.classList.toggle("ml-message--error", !!problem);
    els.saveStatus.textContent = problem ||
      (state.saved
        ? "Saved. When you come back to this " + scopeWord() + ", the questions will be in this same order and you'll continue from where you stopped."
        : "Not saved. The questions are shuffled each time you open this " + scopeWord() + ".");
  }

  function renderCrumbs(step) {
    els.crumbs.textContent = "";
    let parts, current;
    if (step === "syllabus") { parts = ["Syllabus"]; current = 0; }
    else if (step === "topic") { parts = [groupLabel(state.group), "Topic"]; current = 1; }
    else if (step === "type") { parts = [groupLabel(state.group), topicLabel(state.topic), "Question type"]; current = 2; }
    else {
      parts = [groupLabel(state.group), topicLabel(state.topic)];
      if (state.hasTypes) parts.push(state.type || "All question types");
      parts.push("Questions");
      current = parts.length - 1;
    }
    parts.forEach((text, i) => {
      const span = document.createElement("span");
      span.textContent = text;
      if (i === current) { span.className = "is-current"; span.setAttribute("aria-current", "step"); }
      els.crumbs.appendChild(span);
    });
  }

  function choiceButton(name, meta, onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ml-choice";
    const n = document.createElement("span");
    n.className = "ml-choice-name";
    n.textContent = name;
    const m = document.createElement("span");
    m.className = "ml-choice-meta";
    m.textContent = meta;
    b.append(n, m);
    b.addEventListener("click", onClick);
    return b;
  }

  function show(step, focusTitle) {
    els.stepSyllabus.hidden = step !== "syllabus";
    els.stepTopic.hidden = step !== "topic";
    els.stepType.hidden = step !== "type";
    els.stepQuiz.hidden = step !== "quiz";
    els.titleQuiz.textContent = (state.hasTypes ? "4" : "3") + ". Questions";
    renderCrumbs(step);
    if (focusTitle) {
      const t = { syllabus: els.titleSyllabus, topic: els.titleTopic, type: els.titleType, quiz: els.titleQuiz }[step];
      t.focus();
    }
  }

  function showSyllabus(focus) {
    state.group = null; state.topic = null; state.type = null; state.hasTypes = false; state.index = 0; state.loadToken++;
    els.syllabusChoices.textContent = "";
    GROUPS.forEach((g) => {
      const n = topicsOf(g.key).length;
      const meta = n ? plural(n, "topic") : "Coming soon";
      els.syllabusChoices.appendChild(choiceButton(g.label, meta, () => showTopics(g.key, true)));
    });
    show("syllabus", focus);
  }

  function showTopics(groupKey, focus) {
    state.group = groupKey; state.topic = null; state.type = null; state.hasTypes = false; state.index = 0; state.loadToken++;
    els.topicChoices.textContent = "";
    const keys = topicsOf(groupKey);
    keys.forEach((k) => {
      const count = window.__ML_QUESTIONS[groupKey][k].length;
      els.topicChoices.appendChild(choiceButton(topicLabel(k), plural(count, "question"), () => chooseTopic(k, true)));
    });
    els.topicEmpty.hidden = keys.length > 0;
    if (!keys.length) {
      els.topicEmpty.textContent = "No " + groupLabel(groupKey) + " topics have been added yet. Check back soon, or choose another syllabus.";
    }
    show("topic", focus);
  }

  // After a topic is picked: topics with several question types ask which one; the others go straight to the questions.
  function chooseTopic(topicKey, focus) {
    if (typesOf(state.group, topicKey).length) showTypes(topicKey, focus);
    else { state.hasTypes = false; startQuiz(topicKey, null, focus); }
  }

  function showTypes(topicKey, focus) {
    state.topic = topicKey; state.type = null; state.hasTypes = true; state.index = 0; state.loadToken++;
    els.typeChoices.textContent = "";
    const all = window.__ML_QUESTIONS[state.group][topicKey];
    els.typeChoices.appendChild(choiceButton("All question types", plural(all.length, "question"), () => startQuiz(topicKey, null, true)));
    typesOf(state.group, topicKey).forEach((t) => {
      const n = questionsFor(state.group, topicKey, t).length;
      els.typeChoices.appendChild(choiceButton(t, plural(n, "question"), () => startQuiz(topicKey, t, true)));
    });
    show("type", focus);
  }

  async function startQuiz(topicKey, type, focus) {
    const token = ++state.loadToken;
    state.topic = topicKey; state.type = type; state.progressKey = progressKeyFor(topicKey, type);
    state.index = 0; state.revealed = false; state.saved = false; state.list = [];
    els.done.hidden = true;
    els.quizBody.hidden = true;
    els.backToTypes.hidden = !state.hasTypes;
    els.doneTypes.hidden = !state.hasTypes;
    els.saveLabel.textContent = "Save my progress in this " + scopeWord();
    els.saveStatus.classList.remove("ml-message--error");
    els.saveStatus.textContent = "Loading…";
    show("quiz", focus);

    const questions = questionsFor(state.group, topicKey, type);
    let saved = null, problem = "";
    try {
      saved = await loadSavedProgress(state.group, state.progressKey);
    } catch (err) {
      console.error("Couldn't load saved progress:", err);
      problem = "We couldn't check your saved progress, so these questions are shuffled and won't be saved this time.";
    }
    if (token !== state.loadToken) return; // the person has gone somewhere else meanwhile

    if (saved && Array.isArray(saved.question_order)) {
      state.list = applySavedOrder(questions, saved.question_order);
      state.index = Math.min(Math.max(parseInt(saved.position, 10) || 0, 0), state.list.length - 1);
      state.saved = true;
    } else {
      state.list = shuffle(questions);
    }

    els.saveBox.checked = state.saved;
    els.saveBox.disabled = !!problem;
    els.quizBody.hidden = false;
    renderQuestion();
    setSaveHint(problem);
    if (state.saved && state.index > 0) {
      els.saveStatus.textContent = "Welcome back. You're continuing from where you stopped, in your saved order.";
    }
  }

  function renderQuestion() {
    const list = state.list;
    const q = list[state.index];
    const total = list.length;

    els.progress.textContent = "Question " + (state.index + 1) + " of " + total;
    els.bar.style.width = ((state.index + 1) / total * 100) + "%";

    els.level.hidden = q.level == null;
    els.level.textContent = q.level == null ? "" : "Level " + q.level;

    // textContent keeps the question exactly as written in question-data.js; MathJax then renders the maths.
    if (window.MathJax && window.MathJax.typesetClear) {
      try { window.MathJax.typesetClear([els.question, els.answerText, els.stepsText]); } catch (e) { /* ignore */ }
    }
    els.question.textContent = q.question;
    // Optional figures under the question: images: [{ src: "images/qe-2a-ex8.png", width: 168, alt: "..." }]
    showImages(els.qimages, q.images, "Figure for this question");
    els.answerText.textContent = q.answer;
    // Optional worked solution: "steps" is text written like the question (maths in the usual brackets), "\n" starts a new line; stepsImages works like images.
    els.steps.hidden = !(q.steps || (q.stepsImages && q.stepsImages.length));
    els.stepsText.textContent = q.steps || "";
    showImages(els.stepsImages, q.stepsImages, "Figure in the worked solution");

    state.revealed = false;
    applyReveal();

    els.prev.disabled = state.index === 0;
    els.next.textContent = state.index === total - 1 ? "Finish" : "Next →";

    typeset(els.question);
  }

  function applyReveal() {
    els.answer.hidden = !state.revealed;
    els.toggleAnswer.textContent = state.revealed ? "Hide answer" : "Show answer";
    els.toggleAnswer.setAttribute("aria-expanded", String(state.revealed));
    if (state.revealed) { typeset(els.answerText); typeset(els.stepsText); }
  }

  function showImages(box, list, fallbackAlt) {
    box.replaceChildren();
    (list || []).forEach((im, i) => {
      const img = document.createElement("img");
      img.className = "ml-qimage";
      img.src = im.src;
      img.alt = im.alt || (fallbackAlt + (list.length > 1 ? " (" + (i + 1) + " of " + list.length + ")" : ""));
      if (im.width) img.width = im.width;
      box.appendChild(img);
    });
    box.hidden = !(list && list.length);
  }

  function finishQuiz() {
    const total = state.list.length;
    els.quizBody.hidden = true;
    els.done.hidden = false;
    els.doneTitle.textContent = "You've finished " + topicLabel(state.topic) + (state.type ? " – " + state.type : "") + " (" + groupLabel(state.group) + ").";
    els.doneText.textContent = "That was all " + plural(total, "question") + " in this " + scopeWord() + "." +
      (state.saved ? " Your saved order is kept, and \"Start again\" begins from question 1." : " \"Start again\" gives you a new random order.");
    if (state.saved) { state.index = 0; persistProgress(); }
    els.restart.focus();
  }

  // ---- events ----------------------------------------------------------------
  els.toggleAnswer.addEventListener("click", () => { state.revealed = !state.revealed; applyReveal(); });
  els.prev.addEventListener("click", () => { if (state.index > 0) { state.index--; renderQuestion(); persistProgress(); } });
  els.next.addEventListener("click", () => {
    const total = state.list.length;
    if (state.index < total - 1) { state.index++; renderQuestion(); persistProgress(); }
    else finishQuiz();
  });
  els.saveBox.addEventListener("change", () => {
    state.saved = els.saveBox.checked;
    setSaveHint();
    if (state.saved) persistProgress(); else clearProgress();
  });
  els.restart.addEventListener("click", () => {
    // Saved topic: same order, back to question 1. Not saved: a new random order.
    if (!state.saved) state.list = shuffle(state.list);
    state.index = 0; state.revealed = false;
    els.done.hidden = true; els.quizBody.hidden = false;
    renderQuestion(); persistProgress();
    els.titleQuiz.focus();
  });
  els.doneTopics.addEventListener("click", () => showTopics(state.group, true));
  els.doneTypes.addEventListener("click", () => showTypes(state.topic, true));
  els.backToTypes.addEventListener("click", () => showTypes(state.topic, true));
  els.backToTopicsFromTypes.addEventListener("click", () => showTopics(state.group, true));
  els.backToTopics.addEventListener("click", () => showTopics(state.group, true));
  els.backToSyllabus.addEventListener("click", () => showSyllabus(true));

  // ---- start-up ------------------------------------------------------------------
  async function main() {
    const { db } = window.ML;

    // 1. Is someone really signed in? (asks the server; redirects to login.html if not)
    const user = await window.ML.requireUser();
    if (!user) return;
    state.userId = user.id;
    els.who.textContent = user.email || "";
    els.signOut.addEventListener("click", () => window.ML.signOut());
    db.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") location.replace("login.html");
    });

    // 2. Only now fetch the questions.
    try {
      await loadQuestionData();
    } catch (err) {
      console.error(err);
      fail("We couldn't load the questions. Please refresh the page.");
      return;
    }

    els.status.hidden = true;
    els.app.hidden = false;
    showSyllabus(false);
  }

  // If the page is restored from the back/forward cache after signing out, check again.
  window.addEventListener("pageshow", (e) => { if (e.persisted) location.reload(); });

  main().catch((err) => {
    console.error(err);
    fail("Something went wrong. Please refresh the page.");
  });
})();
