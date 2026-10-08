const passagesContainer = document.getElementById("passages");

passages.forEach((passage, index) => {
  const card = document.createElement("article");
  card.className = "passage-card";

  const topic = document.createElement("h3");
  topic.className = "passage-topic";
  topic.textContent = `${index + 1}. ${passage.topic}`;

  const text = document.createElement("p");
  text.className = "passage-text";
  text.textContent = passage.text;

  card.appendChild(topic);
  card.appendChild(text);
  passagesContainer.appendChild(card);
});
