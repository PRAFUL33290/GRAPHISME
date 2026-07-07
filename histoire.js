const HISTOIRE_ACCENTS = [
  "#FF5C7A", "#FF9F45", "#FFD23F", "#8BD450", "#37C6A8",
  "#3AB4FF", "#6C6CE5", "#B15CFF", "#FF6FCF", "#2FBF71"
];

function getTimelineEntries() {
  return HISTOIRES
    .filter((entry) => entry.id !== "intro")
    .slice()
    .sort((a, b) => (a.year || 0) - (b.year || 0));
}

function renderParagraphs(paragraphs) {
  return paragraphs
    .map((p) => `<p class="frise-p">${p}</p>`)
    .join("");
}

function renderHistoires() {
  const container = document.getElementById("histoire-list");
  if (!container) return;

  const entries = getTimelineEntries();
  const frag = document.createDocumentFragment();

  entries.forEach((entry, index) => {
    const accent = HISTOIRE_ACCENTS[index % HISTOIRE_ACCENTS.length];

    const item = document.createElement("div");
    item.className = "frise-item";
    item.style.setProperty("--accent", accent);

    const afficheBadge = entry.styleNum
      ? `<span class="histoire-affiche">Affiche n°${entry.styleNum}</span>`
      : "";

    const link = entry.styleNum
      ? `<a class="histoire-link-btn" href="index.html#style-${entry.styleNum}">Voir l'affiche</a>`
      : "";

    const [lead, ...rest] = entry.paragraphs;
    const more = rest.length
      ? `<details class="frise-more">
          <summary>Lire la suite</summary>
          <div class="frise-more-body">${renderParagraphs(rest)}</div>
        </details>`
      : "";

    item.innerHTML = `
      <div class="frise-marker">
        <span class="frise-dot"></span>
      </div>
      <article class="frise-card" id="${entry.id}">
        <div class="frise-card-head">
          ${entry.era ? `<span class="histoire-era">${entry.era}</span>` : ""}
          ${afficheBadge}
        </div>
        <h2 class="frise-title">${entry.title}</h2>
        <p class="frise-p frise-lead">${lead}</p>
        ${more}
        ${link ? `<footer class="frise-card-footer">${link}</footer>` : ""}
      </article>
    `;

    frag.appendChild(item);
  });

  container.appendChild(frag);
}

function renderToc() {
  const toc = document.getElementById("histoire-toc");
  if (!toc) return;

  getTimelineEntries().forEach((entry, i) => {
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
