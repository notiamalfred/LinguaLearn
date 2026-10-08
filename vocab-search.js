const searchInput = document.getElementById("vocab-search-input");
const vocabGrid = document.getElementById("vocab-grid");
const cards = Array.from(vocabGrid.querySelectorAll(".skill-card"));

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const word = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = word.includes(query) ? "" : "none";
  });
});
