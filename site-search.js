/* site-search.js — site-wide search for LinguaLearn
   Place one <script> tag on every page. It fetches search-index.json
   once, caches it, and searches across all pages.                     */
(function () {
  "use strict";

  var CONFIG = {
    inputId:  "skillSearch",
    clearId:  "skillSearchClear",
    statusId: "skillSearchStatus",
    resultsId: "searchResults",     // container for the dropdown
    indexUrl: "search-index.json",
    maxResults: 20,
    debounceMs: 120
  };

  /* ------------------------------------------------------------------ */
  /*  State                                                             */
  /* ------------------------------------------------------------------ */
  var FULL_INDEX = null;      // loaded once
  var loading = false;
  var pendingQuery = "";

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                           */
  /* ------------------------------------------------------------------ */
  function normalize(str) {
    return (str || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  }

  function loadIndex(cb) {
    if (FULL_INDEX) return cb(FULL_INDEX);
    if (loading) {
      /* queue the callback until the fetch finishes */
      setTimeout(function () { loadIndex(cb); }, 50);
      return;
    }
    loading = true;

    fetch(CONFIG.indexUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        FULL_INDEX = data.map(function (item) {
          item._n = normalize(item.text);
          return item;
        });
        loading = false;
        cb(FULL_INDEX);
      })
      .catch(function (err) {
        loading = false;
        console.warn("[site-search] could not load index:", err);
        cb([]);
      });
  }

  /* ------------------------------------------------------------------ */
  /*  Search                                                            */
  /* ------------------------------------------------------------------ */
  function search(query) {
    var q = normalize(query);
    if (!q) return [];
    var terms = q.split(" ");
    var out = [];

    for (var i = 0; i < FULL_INDEX.length; i++) {
      var item = FULL_INDEX[i];
      var ok = true;
      for (var t = 0; t < terms.length; t++) {
        if (item._n.indexOf(terms[t]) === -1) { ok = false; break; }
      }
      if (ok) out.push(item);
      if (out.length >= CONFIG.maxResults) break;
    }
    return out;
  }

  /* ------------------------------------------------------------------ */
  /*  Navigation                                                        */
  /* ------------------------------------------------------------------ */
  function goToResult(item) {
    var currentPage = location.pathname.split("/").pop() || "index.html";
    var hash = "#search-" + encodeURIComponent(item.slug);

    if (currentPage === item.page) {
      /* same page — just scroll */
      scrollToSlug(item.slug);
      history.replaceState(null, "", hash);
    } else {
      /* different page — navigate with hash so the next page scrolls */
      location.href = item.page + hash;
    }
  }

  /*  On page load, if the URL has #search-xxx, find the element whose
      text matches and scroll to it.                                    */
  function scrollToSlug(slug) {
    var decoded = decodeURIComponent(slug).replace(/-/g, " ").toLowerCase();
    var candidates = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li");
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      var txt = normalize(el.textContent).slice(0, decoded.length);
      if (txt === decoded) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("is-search-hit");
        setTimeout(function () {
          el.classList.remove("is-search-hit");
        }, 2200);
        return true;
      }
    }
    return false;
  }

  /* ------------------------------------------------------------------ */
  /*  Init                                                              */
  /* ------------------------------------------------------------------ */
  function init() {
    var input   = document.getElementById(CONFIG.inputId);
    var clearBtn= document.getElementById(CONFIG.clearId);
    var status  = document.getElementById(CONFIG.statusId);
    var results = document.getElementById(CONFIG.resultsId);

    if (!input) return;   // this page has no search bar

    /* --- render results dropdown ---------------------------------- */
    function renderResults(items, query) {
      if (!results) return;
      results.innerHTML = "";
      if (!items.length) { results.hidden = true; return; }

      items.forEach(function (item) {
        var a = document.createElement("a");
        a.className = "search-result";
        a.href = "#";
        a.innerHTML =
          '<span class="search-result__page">' + item.label + "</span>" +
          '<span class="search-result__text">' + item.text + "</span>";
        a.addEventListener("click", function (e) {
          e.preventDefault();
          goToResult(item);
          results.hidden = true;
          input.blur();
        });
        results.appendChild(a);
      });
      results.hidden = false;
    }

    function setStatus(query, count) {
      if (!status) return;
      if (!normalize(query)) { status.textContent = ""; return; }
      if (count === 0) {
        status.textContent = "No results for \u201C" + query.trim() + "\u201D.";
      } else {
        status.textContent = count + (count === 1 ? " result" : " results");
      }
    }

    /* --- the search routine --------------------------------------- */
    var run = debounce(function () {
      var query = input.value;
      clearBtn.hidden = !normalize(query);

      if (!normalize(query)) {
        if (results) results.hidden = true;
        setStatus("", 0);
        return;
      }

      loadIndex(function () {
        var hits = search(query);
        renderResults(hits, query);
        setStatus(query, hits.length);
      });
    }, CONFIG.debounceMs);

    /* --- events ---------------------------------------------------- */
    input.addEventListener("input", run);

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        reset();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (FULL_INDEX) {
          var hits = search(input.value);
          if (hits.length) goToResult(hits[0]);
        }
      }
    });

    clearBtn.addEventListener("click", function () {
      reset();
      input.focus();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      var t = e.target;
      var tag = (t.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select" ||
          t.isContentEditable) return;
      e.preventDefault();
      input.focus();
      input.select();
    });

    function reset() {
      input.value = "";
      if (results) { results.hidden = true; results.innerHTML = ""; }
      if (status) status.textContent = "";
      clearBtn.hidden = true;
    }

    /* --- handle deep-link on load ---------------------------------- */
    if (location.hash.indexOf("#search-") === 0) {
      var slug = location.hash.slice(8);   // strip "#search-"
      loadIndex(function () {
        setTimeout(function () { scrollToSlug(slug); }, 300);
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Boot                                                              */
  /* ------------------------------------------------------------------ */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();