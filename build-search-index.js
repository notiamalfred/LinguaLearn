/* build-search-index.js — run with: node build-search-index.js */
const fs = require("fs");
const path = require("path");

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

/*  Each page's cards are wrapped in a known selector.
    Add or adjust these to match your real markup.                    */
const PAGE_CARD_SELECTORS = {
  "index.html":         ".feature-card",
  "reading.html":       "h3, h4, p, li",           // every heading + text block
  "listening.html":     "h3, h4, p, li",
  "speaking.html":      "h3, h4, p, li",
  "writing.html":       "h3, h4, p, li",
  "vocabulary.html":    "h3, p, li",
  "inspirational.html": "h3, p, li",
  "recommendation.html":"h3, p, li"
};

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

  /* Strip <script>, <style>, and <nav> so we don't index JS/CSS/nav text */
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");

  /* Pull out headings and paragraphs with a simple regex.
     For production you'd use a real HTML parser, but this is enough
     for a site like LinguaLearn.                                     */
  const blockRe = /<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  const seen = new Set();

  while ((match = blockRe.exec(stripped)) !== null) {
    const tag  = match[1].toLowerCase();
    const raw  = match[2];

    /* strip inner tags, decode a few common entities */
    const text = raw
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();

    if (text.length < 2) continue;
    if (seen.has(text)) continue;
    seen.add(text);

    /* Generate a slug from the text so we can deep-link to it.
       The page-side script will match this against an id.            */
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 80);

    index.push({
      page:  page.file,
      label: page.label,
      tag:   tag,
      text:  text,
      slug:  slug
    });
  }

  console.log(`  indexed ${page.file} (${index.length} entries so far)`);
}

fs.writeFileSync(
  path.join(__dirname, "search-index.json"),
  JSON.stringify(index, null, 0)
);

console.log(`\nWrote search-index.json — ${index.length} entries.`);