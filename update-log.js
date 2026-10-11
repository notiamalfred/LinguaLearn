/* update-log.js — Fetches and renders the latest commits from GitHub */

(function () {
  "use strict";

  /* Your Cloudflare Worker URL. Update this if you redeploy with a
     different subdomain or worker name. */
  var WORKER_URL = "https://lingualearn.YOUR-SUBDOMAIN.workers.dev";

  /* How many commits to display after filtering. */
  var MAX_COMMITS = 10;

  /* Commit messages matching any of these patterns will be hidden.
     Case-insensitive. */
  var HIDDEN_PATTERNS = [
    /^chore: rebuild search index/i
  ];

  var container = document.getElementById("commit-list");

  if (!container) return;

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                           */
  /* ------------------------------------------------------------------ */
  function isHidden(commit) {
    var message = (commit.commit && commit.commit.message) || "";
    for (var i = 0; i < HIDDEN_PATTERNS.length; i++) {
      if (HIDDEN_PATTERNS[i].test(message)) return true;
    }
    return false;
  }

  function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function renderCommits(commits) {
    /* Drop hidden commits (e.g. automated search-index rebuilds) */
    var visible = commits.filter(function (c) { return !isHidden(c); });

    if (!visible.length) {
      container.innerHTML = "<p>No recent updates found.</p>";
      return;
    }

    container.innerHTML = "";

    visible.slice(0, MAX_COMMITS).forEach(function (commit) {
      var a = document.createElement("a");
      a.className = "commit-item";
      a.href = commit.html_url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      var messageEl = document.createElement("span");
      messageEl.className = "commit-message";
      messageEl.textContent = commit.commit.message;

      var metaEl = document.createElement("span");
      metaEl.className = "commit-meta";

      var authorEl = document.createElement("span");
      authorEl.className = "commit-author";
      authorEl.textContent = commit.commit.author.name;

      var dateEl = document.createElement("span");
      dateEl.className = "commit-date";
      dateEl.textContent = formatDate(commit.commit.author.date);

      metaEl.appendChild(authorEl);
      metaEl.appendChild(dateEl);
      a.appendChild(messageEl);
      a.appendChild(metaEl);
      container.appendChild(a);
    });
  }

  /* ------------------------------------------------------------------ */
  /*  Fetch                                                             */
  /* ------------------------------------------------------------------ */
  container.innerHTML = "<p>Loading recent updates...</p>";

  fetch(WORKER_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Worker request failed with status " + response.status);
      }
      return response.json();
    })
    .then(renderCommits)
    .catch(function (error) {
      console.error("Error fetching commits:", error);
      container.innerHTML =
        '<p>Could not load updates at this time. Please try again later.</p>';
    });
})();
