/* build-search-index.js — run with: node build-search-index.js */
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

/* ------------------------------------------------------------------ */
/*  CONFIG — what to index and how                                    */
/* ------------------------------------------------------------------ */
const PAGES = [
  { file: "index.html",          label: "Home" },
  { file: "reading.html",        label: "Reading" },
  { file: "listening.html",      label: "Listening" },
  { file: "speaking.html",       label: "Speaking" },
  { file: "writing.html",        label: "Writing" },
  { file: "vocabulary.html",     label: "Vocabulary" },
  { file: "inspirational.html",  label: "Inspirational Words" },
  { file: "recommendation.html", label: "Recommendations" }
];

/* ------------------------------------------------------------------ */
/*  Build                                                             */
/* ------------------------------------------------------------------ */
const index = [];

for (const page of PAGES) {
  const filePath = path.join(__dirname, page.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  skip (missing): ${page.file}`);
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const $ = cheerio.load(html);

  /* Strip anything we never want to index */
  $("script, style, noscript, template, nav").remove();

  const seen = new Set();

  $("h1, h2, h3, h4, h5, h6, p, li").each((_, el) => {
    const tag = el.tagName.toLowerCase();
    const text = $(el).text().replace(/\s+/g, " ").trim();

    if (text.length < 2) return;
    if (seen.has(text)) return;
    seen.add(text);

    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 80);

    index.push({
      page: page.file,
      label: page.label,
      tag,
      text,
      slug
    });
  });

  console.log(`  indexed ${page.file} (${index.length} entries so far)`);
}

/* ------------------------------------------------------------------ */
/*  Index passages.js content (used by inspirational.html)            */
/* ------------------------------------------------------------------ */
const passagesPath = path.join(__dirname, "passages.js");
if (fs.existsSync(passagesPath)) {
  try {
    const passagesCode = fs.readFileSync(passagesPath, "utf8");
    /* Run passages.js in its own scope and grab the array */
    const passagesData = new Function(passagesCode + "; return passages;")();

    const seen = new Set();

    for (const passage of passagesData) {
      const topic = (passage.topic || "").trim();
      const text  = (passage.text  || "").trim();

      /* Index the topic */
      if (topic.length >= 2 && !seen.has(topic)) {
        seen.add(topic);
        index.push({
          page: "inspirational.html",
          label: "Inspirational Words",
          tag: "h3",
          text: topic,
          slug: topic.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .slice(0, 80)
        });
      }

      /* Index the passage body */
      if (text.length >= 2 && !seen.has(text)) {
        seen.add(text);
        index.push({
          page: "inspirational.html",
          label: "Inspirational Words",
          tag: "p",
          text: text,
          slug: text.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .slice(0, 80)
        });
      }
    }

    console.log(`  indexed passages.js (${index.length} entries so far)`);
  } catch (err) {
    console.warn("  could not parse passages.js:", err.message);
  }
}

fs.writeFileSync(
  path.join(__dirname, "search-index.json"),
  JSON.stringify(index, null, 0)
);

console.log(`\nWrote search-index.json — ${index.length} entries.`);
