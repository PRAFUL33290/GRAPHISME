// Créations du jour — modèle + résultat pour chaque enfant

const CREATIONS = [
  {
    names: "Naya",
    model: "images/creations-du-jour/naya-model.png",
    result: "images/creations-du-jour/naya-resultat.png",
    accent: "#ff6fcf",
  },
  {
    names: "Kaylan, Léo et Hugo",
    model: "images/creations-du-jour/kaylan-leo-hugo-model.png",
    result: "images/creations-du-jour/kaylan-leo-hugo-resultat.png",
    accent: "#37c6a8",
  },
  {
    names: "Agathe et Daphné",
    model: "images/creations-du-jour/agathe-daphne-model.png",
    result: "images/creations-du-jour/agathe-daphne-resultat.png",
    accent: "#ffb454",
  },
];

function buildCreationCard(creation) {
  const card = document.createElement("article");
  card.className = "creation-card";
  card.style.setProperty("--accent", creation.accent);

  card.innerHTML = `
    <h2 class="creation-name">${creation.names}</h2>
    <div class="creation-pair">
      <figure class="creation-item" data-role="model">
        <span class="creation-tag">Modèle</span>
        <div class="creation-media">
          <img src="${encodeURI(creation.model)}" alt="Modèle de ${creation.names}" loading="lazy">
        </div>
      </figure>
      <span class="creation-arrow" aria-hidden="true">→</span>
      <figure class="creation-item" data-role="result">
        <span class="creation-tag creation-tag--result">Résultat</span>
        <div class="creation-media">
          <img src="${encodeURI(creation.result)}" alt="Création finale de ${creation.names}" loading="lazy">
        </div>
      </figure>
    </div>
  `;

  card.querySelectorAll(".creation-media img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  return card;
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const body = document.getElementById("lightbox-body");
  body.innerHTML = `<img class="lb-preview" src="${src}" alt="${alt}">`;
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.classList.remove("no-scroll");
}

function setupLightbox() {
  const closeBtn = document.getElementById("lightbox-close");
  const lightbox = document.getElementById("lightbox");
  if (!closeBtn || !lightbox) return;
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("creations-grid");
  const frag = document.createDocumentFragment();
  CREATIONS.forEach((creation) => frag.appendChild(buildCreationCard(creation)));
  grid.appendChild(frag);
  setupLightbox();
});
