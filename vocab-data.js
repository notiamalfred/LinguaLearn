/* Reads the vocabulary straight from vocabulary.html, so there is ONE source of truth.
   Add or edit a word there and the flashcards pick it up automatically.
   Each word's id is the <article id="..."> and must stay stable (progress is saved against it). */
(function () {
  "use strict";
  if (!window.LL) return;

  async function loadVocab() {
    const res = await fetch("vocabulary.html", { credentials: "same-origin", cache: "no-cache" });
    if (!res.ok) throw new Error("Could not load vocabulary.html (" + res.status + ")");
    const html = await res.text();

    // DOMParser never runs scripts from the fetched page.
    const doc = new DOMParser().parseFromString(html, "text/html");
    const words = [];

    doc.querySelectorAll("#vocab-grid article.skill-card").forEach((article) => {
      const id = article.id;
      const heading = article.querySelector("h3");
      if (!id || !heading) return;

      const details = [];
      article.querySelectorAll("p").forEach((p) => {
        const labelEl = p.querySelector("strong");
        if (!labelEl) return;
        const label = labelEl.textContent.replace(/:\s*$/, "").trim();
        const clone = p.cloneNode(true);
        clone.querySelector("strong").remove();
        const value = clone.textContent.replace(/\s+/g, " ").trim();
        if (label && value) details.push({ label, value });
      });

      words.push({ id, word: heading.textContent.trim(), details });
    });

    return words;
  }

  window.LL.loadVocab = loadVocab;
})();
