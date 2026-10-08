const quoteElement = document.getElementById("daily-quote");
const learnMoreBtn = document.getElementById("learn-more-btn");

function renderQuote(text, author) {
  quoteElement.innerHTML = "";

  const textEl = document.createElement("p");
  textEl.className = "daily-quote-text";
  textEl.textContent = `"${text}"`;

  const authorEl = document.createElement("footer");
  authorEl.className = "daily-quote-author";
  authorEl.textContent = `— ${author}`;

  quoteElement.appendChild(textEl);
  quoteElement.appendChild(authorEl);

  learnMoreBtn.href =
    "https://www.google.com/search?q=" + encodeURIComponent(`"${text}" ${author}`);
}

function renderFallback() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const quote = quotes[dayOfYear % quotes.length];
  renderQuote(quote.text, quote.author);
}

fetch("https://dummyjson.com/quotes/random")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.quote) {
      renderQuote(data.quote, data.author);
    } else {
      renderFallback();
    }
  })
  .catch(() => {
    renderFallback();
  });
