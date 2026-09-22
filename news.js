// Fallback items shown only if the live feed can't be reached
const fallbackNews = [
  {
    title: "World news is temporarily unavailable",
    pubDate: new Date().toISOString(),
    link: "#",
    description: "Please check your connection and refresh the page to see the latest headlines."
  }
];

const RSS_FEED_URL = "http://feeds.bbci.co.uk/news/world/rss.xml";
const RSS2JSON_ENDPOINT =
  "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(RSS_FEED_URL);
const MAX_ITEMS = 6;

function stripHtml(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function renderNews(items) {
  const grid = document.getElementById("news-grid");
  if (!grid) return;

  grid.innerHTML = "";

  items.slice(0, MAX_ITEMS).forEach((item) => {
    const card = document.createElement("div");
    card.className = "news-card";

    const dateEl = document.createElement("span");
    dateEl.className = "news-date";
    dateEl.textContent = formatDate(item.pubDate);

    const titleEl = document.createElement("h3");
    titleEl.textContent = item.title;

    const summaryEl = document.createElement("p");
    const rawSummary = stripHtml(item.description).trim();
    summaryEl.textContent =
      rawSummary.length > 140 ? rawSummary.slice(0, 140).trim() + "…" : rawSummary;

    const linkEl = document.createElement("a");
    linkEl.href = item.link;
    linkEl.className = "news-link";
    linkEl.target = "_blank";
    linkEl.rel = "noopener";
    linkEl.textContent = "Read more →";

    card.appendChild(dateEl);
    card.appendChild(titleEl);
    card.appendChild(summaryEl);
    card.appendChild(linkEl);

    grid.appendChild(card);
  });
}

function loadNews() {
  fetch(RSS2JSON_ENDPOINT)
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    })
    .then((data) => {
      if (data && data.status === "ok" && Array.isArray(data.items) && data.items.length) {
        renderNews(data.items);
      } else {
        renderNews(fallbackNews);
      }
    })
    .catch(() => {
      renderNews(fallbackNews);
    });
}

loadNews();
