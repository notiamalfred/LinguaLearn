/* Daily Review: five flashcards a day, built from vocabulary.html.
   - Front shows the word; either button flips the card to the explanation.
   - "I don't know" words are asked again in the user's next review. */
(function () {
  "use strict";

  const SESSION_SIZE = 5;
  const FLIP_MS = 500; // keep in sync with the transition on .fc-card in flashcards.css
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (id) => document.getElementById(id);
  const els = {
    status: $("fc-status"), app: $("fc-app"), progress: $("fc-progress"),
    card: $("fc-card"), front: $("fc-front"), back: $("fc-back"),
    word: $("fc-word"), wordBack: $("fc-word-back"), details: $("fc-details"),
    choices: $("fc-choices"), know: $("fc-know"), dontKnow: $("fc-dont-know"),
    after: $("fc-after"), feedback: $("fc-feedback"),
    saveError: $("fc-save-error"), retry: $("fc-retry"), next: $("fc-next"),
    done: $("fc-done"), summary: $("fc-summary"),
    retryWrap: $("fc-retry-wrap"), retryList: $("fc-retry-list"),
    signOut: $("fc-signout"), who: $("fc-user"),
  };

  function fail(text) {
    els.status.hidden = false;
    els.status.className = "fc-message fc-message--error";
    els.status.textContent = text;
  }

  if (!window.LL || !window.LL.loadVocab) {
    fail("Accounts aren't set up on this site yet.");
    els.signOut.hidden = true;
    return;
  }

  // YYYY-MM-DD in the user's own time zone, so "today" matches their day.
  function localDate(d = new Date()) {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + mm + "-" + dd;
  }

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  async function main() {
    const { db } = window.LL;

    const user = await window.LL.requireUser();
    if (!user) return;
    els.who.textContent = user.email || "";
    els.signOut.addEventListener("click", () => window.LL.signOut());
    db.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") location.replace("login.html");
    });

    let vocab;
    try {
      vocab = await window.LL.loadVocab();
    } catch (err) {
      console.error(err);
      fail("We couldn't load the vocabulary list. Please refresh the page.");
      return;
    }
    const byId = new Map(vocab.map((w) => [w.id, w]));
    const today = localDate();

    // ---- choosing today's five words ---------------------------------------
    async function pickWords() {
      const { data, error } = await db.from("word_progress").select("word_id, status, last_reviewed");
      if (error) throw error;

      const rows = data.filter((r) => byId.has(r.word_id));
      const seen = new Set(rows.map((r) => r.word_id));
      const picked = [];
      const take = (ids) => {
        for (const id of ids) {
          if (picked.length < SESSION_SIZE && !picked.includes(id)) picked.push(id);
        }
      };

      // 1) Words missed in the latest review that had any misses, then older misses (oldest first).
      const unknown = rows.filter((r) => r.status === "unknown");
      if (unknown.length) {
        const latest = unknown.reduce((m, r) => (r.last_reviewed > m ? r.last_reviewed : m), "");
        take(shuffle(unknown.filter((r) => r.last_reviewed === latest).map((r) => r.word_id)));
        take(
          unknown
            .filter((r) => r.last_reviewed !== latest)
            .sort((a, b) => a.last_reviewed.localeCompare(b.last_reviewed))
            .map((r) => r.word_id)
        );
      }
      // 2) Words never shown before.
      take(shuffle(vocab.filter((w) => !seen.has(w.id)).map((w) => w.id)));
      // 3) Still short (small word list, or nearly everything learned)? Re-use the least recently seen known words.
      take(
        rows
          .filter((r) => r.status === "known")
          .sort((a, b) => a.last_reviewed.localeCompare(b.last_reviewed))
          .map((r) => r.word_id)
      );

      return shuffle(picked);
    }

    // One session per day: reloading the page never re-rolls the cards.
    async function getOrCreateSession() {
      const existing = await db
        .from("daily_sessions")
        .select("word_ids, answered")
        .eq("session_date", today)
        .maybeSingle();
      if (existing.error) throw existing.error;
      if (existing.data) return existing.data;

      const wordIds = await pickWords();
      const { error } = await db
        .from("daily_sessions")
        .insert({ user_id: user.id, session_date: today, word_ids: wordIds, answered: {} });
      if (error) {
        if (error.code === "23505") { // another tab created it first: use that one
          const again = await db
            .from("daily_sessions")
            .select("word_ids, answered")
            .eq("session_date", today)
            .single();
          if (again.error) throw again.error;
          return again.data;
        }
        throw error;
      }
      return { word_ids: wordIds, answered: {} };
    }

    let sessionRow;
    try {
      sessionRow = await getOrCreateSession();
    } catch (err) {
      console.error(err);
      fail("We couldn't load today's review. Check your connection and refresh the page.");
      return;
    }

    const answered = sessionRow.answered || {};
    const ids = sessionRow.word_ids.filter((id) => byId.has(id));
    const queue = ids.filter((id) => !answered[id]);
    const total = ids.length;
    let index = 0;
    let busy = false;
    let lastAttempt = null;

    // ---- saving answers ---------------------------------------------------
    async function saveAnswer(wordId, status) {
      const [progress, session] = await Promise.all([
        db.from("word_progress").upsert(
          { user_id: user.id, word_id: wordId, status, last_reviewed: today },
          { onConflict: "user_id,word_id" }
        ),
        db.from("daily_sessions").update({ answered }).eq("session_date", today),
      ]);
      if (progress.error) throw progress.error;
      if (session.error) throw session.error;
    }

    async function persist(wordId, status) {
      lastAttempt = { wordId, status };
      els.next.disabled = true;
      try {
        await saveAnswer(wordId, status);
        els.saveError.hidden = true;
        els.next.disabled = false;
        els.next.focus();
      } catch (err) {
        console.error(err);
        els.saveError.hidden = false;
      }
    }

    // ---- rendering --------------------------------------------------------
    function renderBack(w) {
      els.wordBack.textContent = w.word;
      els.details.replaceChildren();
      const ordered = w.details.slice().sort((a, b) => (b.label === "Meaning") - (a.label === "Meaning"));
      for (const { label, value } of ordered) {
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        els.details.append(dt, dd);
      }
    }

    function setFlipped(flipped) {
      els.card.classList.toggle("is-flipped", flipped);
      els.back.setAttribute("aria-hidden", flipped ? "false" : "true");
      els.front.setAttribute("aria-hidden", flipped ? "true" : "false");
    }

    function showCard(first) {
      const w = byId.get(queue[index]);
      const doneCount = total - (queue.length - index);
      els.progress.textContent = "Word " + (doneCount + 1) + " of " + total;
      els.word.textContent = w.word;
      els.next.textContent = index === queue.length - 1 ? "Finish" : "Next word";

      els.after.hidden = true;
      els.saveError.hidden = true;
      els.choices.hidden = false;
      setFlipped(false);

      // Swap the back's text only once it has turned out of sight, so the next answer never flashes.
      busy = true;
      els.know.disabled = true;
      els.dontKnow.disabled = true;
      const finishSwap = () => {
        renderBack(w);
        els.know.disabled = false;
        els.dontKnow.disabled = false;
        busy = false;
      };
      if (first || reduceMotion) finishSwap();
      else setTimeout(finishSwap, FLIP_MS);
      if (!first) els.front.focus({ preventScroll: true });
    }

    function finish() {
      const known = ids.filter((id) => answered[id] === "known").length;
      const missed = ids.filter((id) => answered[id] === "unknown");
      els.summary.textContent = total
        ? "You knew " + known + " of " + total + (known === total ? ". Nicely done." : ".")
        : "There are no words to review yet.";
      els.retryList.replaceChildren();
      for (const id of missed) {
        const li = document.createElement("li");
        li.textContent = byId.get(id).word;
        els.retryList.append(li);
      }
      els.retryWrap.hidden = missed.length === 0;
      els.app.hidden = true;
      els.done.hidden = false;
    }

    function answer(status) {
      if (busy) return;
      busy = true;
      const wordId = queue[index];
      answered[wordId] = status;

      els.know.disabled = true;
      els.dontKnow.disabled = true;
      els.choices.hidden = true;
      els.feedback.textContent =
        status === "known"
          ? "Marked as known."
          : "No problem. This word will come back in your next review.";
      els.after.hidden = false;
      setFlipped(true);
      els.back.focus({ preventScroll: true });

      persist(wordId, status);
    }

    els.know.addEventListener("click", () => answer("known"));
    els.dontKnow.addEventListener("click", () => answer("unknown"));
    els.retry.addEventListener("click", () => {
      if (lastAttempt) persist(lastAttempt.wordId, lastAttempt.status);
    });
    els.next.addEventListener("click", () => {
      index += 1;
      if (index >= queue.length) finish();
      else showCard(false);
    });

    // ---- start --------------------------------------------------------------
    els.status.hidden = true;
    if (queue.length === 0) {
      finish(); // today's review was already completed
    } else {
      els.app.hidden = false;
      showCard(true);
    }
  }

  main().catch((err) => {
    console.error(err);
    fail("Something went wrong. Please refresh the page.");
  });
})();
