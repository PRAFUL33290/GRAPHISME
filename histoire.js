const HISTOIRE_ACCENTS = [
  "#FF5C7A", "#FF9F45", "#FFD23F", "#8BD450", "#37C6A8",
  "#3AB4FF", "#6C6CE5", "#B15CFF", "#FF6FCF", "#2FBF71"
];

function renderParagraphs(paragraphs) {
  return paragraphs
    .map((p, j) => {
      const cls = j === 0 ? "histoire-p histoire-lead" : "histoire-p";
      return `<p class="${cls}">${p}</p>`;
    })
    .join("");
}

function renderHistoires() {
  const container = document.getElementById("histoire-list");
  if (!container) return;

  const frag = document.createDocumentFragment();
  let index = 0;

  HISTOIRES.filter((entry) => entry.id !== "intro").forEach((entry) => {
    const accent = HISTOIRE_ACCENTS[index % HISTOIRE_ACCENTS.length];
    index++;

    const article = document.createElement("article");
    article.className = "histoire-card";
    article.id = entry.id;
    article.style.setProperty("--accent", accent);

    const afficheBadge = entry.styleNum
      ? `<span class="histoire-affiche">Affiche n°${entry.styleNum}</span>`
      : "";

    const link = entry.styleNum
      ? `<a class="histoire-link-btn" href="index.html#style-${entry.styleNum}">Voir l'affiche du festival</a>`
      : "";

    article.innerHTML = `
      <header class="histoire-card-head">
        <div class="histoire-card-meta">
          ${entry.era ? `<span class="histoire-era">${entry.era}</span>` : ""}
          ${afficheBadge}
        </div>
        <h2>${entry.title}</h2>
      </header>
      <div class="histoire-card-body">
        ${renderParagraphs(entry.paragraphs)}
      </div>
      ${link ? `<footer class="histoire-card-footer">${link}</footer>` : ""}
    `;

    frag.appendChild(article);
  });

  container.appendChild(frag);
}

function renderToc() {
  const toc = document.getElementById("histoire-toc");
  if (!toc) return;

  HISTOIRES.filter((h) => h.id !== "intro").forEach((entry, i) => {
    const a = document.createElement("a");
    a.href = `#${entry.id}`;
    a.innerHTML = `<span class="toc-num">${i + 1}</span>${entry.title.replace(/^Le |^La |^L'/, "")}`;
    toc.appendChild(a);
  });
}

function renderConclusion() {
  const el = document.getElementById("histoire-conclusion");
  if (!el || !HISTOIRE_CONCLUSION_PARAS) return;

  el.innerHTML = HISTOIRE_CONCLUSION_PARAS
    .map((p, i) => `<p class="${i === 0 ? "histoire-outro-lead" : ""}">${p}</p>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHistoires();
  renderToc();
  renderConclusion();
});