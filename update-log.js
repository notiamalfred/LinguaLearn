/* update-log.js — Fetches and renders the latest commits from GitHub */

(function () {
  "use strict";

  var GITHUB_USER = "notiamalfred";
  var GITHUB_REPO = "LinguaLearn";
  var MAX_COMMITS = 10; // Number of commits to show

  var container = document.getElementById("commit-list");

  if (!container) return;

  function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function renderCommits(commits) {
    if (!commits || commits.length === 0) {
      container.innerHTML = "<p>No recent updates found.</p>";
      return;
    }

    container.innerHTML = ""; // Clear loading message

    commits.slice(0, MAX_COMMITS).forEach(function (commit) {
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

  // Show a loading message
  container.innerHTML = "<p>Loading recent updates...</p>";

  // Fetch commits from the GitHub API
  fetch(
    "https://api.github.com/repos/" +
      GITHUB_USER +
      "/" +
      GITHUB_REPO +
      "/commits?per_page=" +
      MAX_COMMITS
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API request failed with status " + response.status);
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
