// Données des 20 styles graphiques — festival "Arc-en-Ciel"
const STYLES = [
  {
    num: 1, emoji: "🎨", title: "Minimaliste",
    kid: "Une affiche de festival épurée : peu d'éléments, beaucoup d'espace, deux couleurs. Chic et direct.",
    prompt: "Crée une affiche minimaliste pour un festival de musique. Fond blanc avec beaucoup d'espace vide, une seule guitare stylisée au centre, deux couleurs principales (noir et jaune), typographie moderne très grande, informations bien espacées, design suisse, élégant, premium, affiche A3 verticale."
  },
  {
    num: 2, emoji: "🌈", title: "Maximaliste",
    kid: "La fête à l'état pur : couleurs, confettis, foule, food trucks — tout y est, partout !",
    prompt: "Crée une affiche maximaliste pour un festival de musique. Explosion de couleurs, confettis, feux d'artifice, instruments de musique, foule, nourriture, ballons, étoiles, affiches collées, autocollants, nombreuses typographies, beaucoup d'informations, ambiance festive, extrêmement chargée mais amusante, affiche A3 verticale."
  },
  {
    num: 3, emoji: "🟦", title: "Flat Design",
    kid: "Scène de concert en formes simples et couleurs plates — lisible de loin sur un poteau d'affichage.",
    prompt: "Crée une affiche Flat Design pour un festival. Illustrations vectorielles simples, couleurs plates, personnages souriants, scène de concert, food trucks, guirlandes, soleil, formes géométriques modernes, style Google Flat Design."
  },
  {
    num: 4, emoji: "📐", title: "Bauhaus",
    kid: "Seulement des cercles, carrés et triangles, avec du rouge, bleu, jaune et noir.",
    prompt: "Crée une affiche Bauhaus pour un festival. Utilise uniquement des cercles, carrés, triangles, lignes, rouge, bleu, jaune, noir, typographie géométrique, composition artistique, très graphique."
  },
  {
    num: 5, emoji: "🇨🇭", title: "Swiss Design",
    kid: "Une grille bien rangée, énormément d'espace blanc, une photo en noir et blanc.",
    prompt: "Crée une affiche Swiss Design pour un festival. Grande grille typographique, immense espace blanc, Helvetica, une seule photo en noir et blanc, accents rouges, composition parfaitement alignée."
  },
  {
    num: 6, emoji: "💥", title: "Pop Art",
    kid: "Couleurs flashy, gros points, bulles de BD et des mots comme « BOOM ! » ou « WOW ! ».",
    prompt: "Crée une affiche Pop Art pour un festival. Couleurs ultra flashy, points Benday, bulles de BD, éclairs, onomatopées « BOOM! », « WOW! », style Roy Lichtenstein, ambiance très dynamique."
  },
  {
    num: 7, emoji: "📼", title: "Vintage",
    kid: "Un look ancien, papier vieilli, dessin peint à la main, comme dans les années 50.",
    prompt: "Crée une affiche vintage pour un festival. Papier vieilli, illustration peinte à la main, texture rétro, couleurs légèrement passées, style années 50, ambiance chaleureuse."
  },
  {
    num: 8, emoji: "🌅", title: "Années 80",
    kid: "Festival nocturne façon années 80 : néons, soleil couchant, palmiers et synthé.",
    prompt: "Crée une affiche rétro années 80 pour un festival. Soleil couchant néon, grille futuriste, palmiers, couleurs cyan et magenta, style Synthwave, ambiance Miami Vice."
  },
  {
    num: 9, emoji: "🌃", title: "Cyberpunk",
    kid: "Le festival de nuit dans une mégapole futuriste : néons, pluie, lasers et foule.",
    prompt: "Crée une affiche Cyberpunk pour un festival nocturne. Ville futuriste, pluie, néons roses et bleus, foule, lasers, écrans holographiques, ambiance Blade Runner."
  },
  {
    num: 10, emoji: "🟪", title: "Vaporwave",
    kid: "Statue grecque, coucher de soleil rétro, couleurs pastel et petits bugs « glitch ».",
    prompt: "Crée une affiche Vaporwave pour un festival. Statue grecque, coucher de soleil rétro, glitch, palmiers, couleurs pastel, ambiance années 90."
  },
  {
    num: 11, emoji: "😄", title: "Cartoon",
    kid: "Des personnages rigolos, une mascotte, plein de couleurs vives et de bonne humeur.",
    prompt: "Crée une affiche cartoon pour un festival familial. Personnages amusants, mascottes, château gonflable, musique, confettis, couleurs très vives, ambiance joyeuse."
  },
  {
    num: 12, emoji: "📖", title: "Bande dessinée",
    kid: "Des cases de BD, des bulles de dialogue et des onomatopées avec des contours épais.",
    prompt: "Crée une affiche style bande dessinée pour un festival. Cases de BD, bulles de dialogue, onomatopées, contours noirs épais, couleurs éclatantes."
  },
  {
    num: 13, emoji: "🇯🇵", title: "Manga",
    kid: "Des personnages à la japonaise, des expressions exagérées et des effets de vitesse.",
    prompt: "Crée une affiche manga pour un festival. Personnages manga, effets de vitesse, expressions exagérées, style japonais, composition dynamique."
  },
  {
    num: 14, emoji: "🎬", title: "Pixar (3D)",
    kid: "Comme dans un film d'animation 3D : personnages attachants et lumière de cinéma.",
    prompt: "Crée une affiche inspirée d'un film d'animation 3D pour un festival. Personnages attachants, lumière cinématographique, grande scène de concert, couleurs chaleureuses."
  },
  {
    num: 15, emoji: "🖌️", title: "Aquarelle",
    kid: "Des couleurs douces et des coups de pinceau visibles, comme une peinture à l'eau.",
    prompt: "Crée une affiche aquarelle pour un festival. Couleurs douces, coups de pinceau visibles, fleurs, musique, ambiance poétique."
  },
  {
    num: 16, emoji: "✏️", title: "Line Art",
    kid: "Juste des traits noirs fins, sans couleur ni remplissage. Tout en délicatesse.",
    prompt: "Crée une affiche Line Art pour un festival. Dessin uniquement en traits noirs fins, instruments de musique, guirlandes lumineuses, très élégant."
  },
  {
    num: 17, emoji: "🧩", title: "Collage",
    kid: "Des photos découpées, du papier déchiré, du masking tape, comme un scrapbook.",
    prompt: "Crée une affiche collage pour un festival. Photos découpées, papiers déchirés, masking tape, textures, affiches superposées, style scrapbooking."
  },
  {
    num: 18, emoji: "🧱", title: "Graffiti / Street Art",
    kid: "Un mur en béton couvert de graffitis colorés, façon peinture à la bombe.",
    prompt: "Crée une affiche Street Art pour un festival. Mur en béton couvert de graffitis, bombes de peinture, couleurs explosives, style urbain."
  },
  {
    num: 19, emoji: "🌿", title: "Nature",
    kid: "Beaucoup de plantes, de bois et de montagnes, avec des couleurs vertes et ocres.",
    prompt: "Crée une affiche pour un festival en pleine nature. Beaucoup de végétation, bois, montagnes, guirlandes lumineuses, couleurs vertes et ocres, ambiance écologique."
  },
  {
    num: 20, emoji: "💎", title: "Luxe",
    kid: "L'affiche VIP du festival : fond noir, dorures, typographie raffinée. Entrée exclusive.",
    prompt: "Crée une affiche premium pour un festival VIP. Fond noir profond, dorure, typographie élégante, éclairage raffiné, design haut de gamme."
  },
];

const ACCENTS = [
  "#FF5C7A", "#FF9F45", "#FFD23F", "#8BD450", "#37C6A8",
  "#3AB4FF", "#6C6CE5", "#B15CFF", "#FF6FCF", "#2FBF71"
];

const ASSETS_DIR = "Assets";
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

const ASSET_FILES = Object.fromEntries(
  Object.entries({
    1: "1. Minimaliste.png",
    2: "2. Maximaliste.png",
    3: "3. Flat Design.png",
    4: "4. Bauhaus.png",
    5: "5. Swiss Design.png",
    6: "6. Pop Art.png",
    7: "7. Vintage.png",
    8: "8. Années 80.png",
    9: "9. Cyberpunk.png",
    10: "10. Vaporwave.png",
    11: "11. Cartoon.png",
    12: "12. Bande dessinée.png",
    13: "13. Manga.png",
    14: "14. Pixar.png",
    15: "15. Aquarelle.png",
    16: "16. Line Art.png",
    17: "17. Collage.png",
    18: "18. Graffiti : Street Art.png",
    19: "19. Nature.png",
    20: "20. Luxe.png",
  }).map(([k, v]) => [k, v.normalize("NFD")])
);

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function fileBaseName(style) {
  const num = String(style.num).padStart(2, "0");
  return `${num}-${slugify(style.title)}`;
}

function assetCandidates(style) {
  const paths = [];
  const exact = ASSET_FILES[style.num];
  if (exact) paths.push(`${ASSETS_DIR}/${exact}`);

  const base = fileBaseName(style);
  const num = String(style.num).padStart(2, "0");
  const names = [
    `${style.num}. ${style.title}`.normalize("NFD"),
    base,
    `${num}-${style.title.toLowerCase()}`,
    num,
    String(style.num),
    slugify(style.title),
  ];
  const unique = [...new Set(names)];
  for (const name of unique) {
    for (const ext of IMAGE_EXTENSIONS) {
      const path = `${ASSETS_DIR}/${name}.${ext}`;
      if (!paths.includes(path)) paths.push(path);
    }
  }
  return paths;
}

function setupImage(img, placeholder, style) {
  const candidates = assetCandidates(style);
  let index = 0;

  function showPlaceholder() {
    img.style.display = "none";
    placeholder.style.display = "flex";
    img.dataset.loaded = "";
  }

  function tryNext() {
    if (index >= candidates.length) {
      showPlaceholder();
      return;
    }
    img.src = encodeURI(candidates[index++]);
  }

  img.addEventListener("load", () => {
    img.style.display = "block";
    placeholder.style.display = "none";
    img.dataset.loaded = img.src;
  });
  img.addEventListener("error", tryNext);
  tryNext();
}

function renderGrid() {
  const grid = document.getElementById("style-grid");
  if (!grid) return;
  const frag = document.createDocumentFragment();

  STYLES.forEach((style, i) => {
    const accent = ACCENTS[i % ACCENTS.length];
    const base = fileBaseName(style);

    const card = document.createElement("article");
    card.className = "style-card";
    card.id = `style-${style.num}`;
    card.style.setProperty("--accent", accent);

    card.innerHTML = `
      <div class="style-media" data-role="media">
        <img
          alt="Affiche style ${style.title}"
          loading="lazy"
          data-role="img"
        >
        <div class="style-placeholder" data-role="placeholder">
          <span class="placeholder-emoji">${style.emoji}</span>
          <span>Image à venir</span>
          <code>${ASSETS_DIR}/${base}.jpg</code>
        </div>
      </div>
      <div class="style-body">
        <p class="style-num">Affiche n°${style.num}</p>
        <h3>${style.emoji} ${style.title}</h3>
        <p class="style-kid">${style.kid}</p>
        <button type="button" class="style-btn" data-role="open">Voir la consigne festival</button>
      </div>
    `;

    const img = card.querySelector('[data-role="img"]');
    const placeholder = card.querySelector('[data-role="placeholder"]');
    setupImage(img, placeholder, style);

    const openBtn = card.querySelector('[data-role="open"]');
    openBtn.addEventListener("click", () => openLightbox(style, accent, base, img.dataset.loaded));
    card.querySelector('[data-role="media"]').addEventListener("click", () => openLightbox(style, accent, base, img.dataset.loaded));

    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

function openLightbox(style, accent, base, imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const body = document.getElementById("lightbox-body");
  body.style.setProperty("--accent", accent);
  const preview = imageSrc
    ? `<img class="lb-preview" src="${imageSrc}" alt="Affiche ${style.title}">`
    : "";
  body.innerHTML = `
    ${preview}
    <p class="lb-num">Affiche festival n°${style.num}</p>
    <h2>${style.emoji} ${style.title}</h2>
    <p class="lb-kid">${style.kid}</p>
    <h4>Consigne pour ton affiche de festival</h4>
    <p class="lb-prompt">${style.prompt}</p>
  `;
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

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setupGroupTool() {
  const btn = document.getElementById("shuffle-btn");
  const input = document.getElementById("group-count");
  const result = document.getElementById("group-result");
  if (!btn || !input || !result) return;

  btn.addEventListener("click", () => {
    let count = parseInt(input.value, 10);
    if (!count || count < 1) count = 1;
    if (count > STYLES.length) count = STYLES.length;

    const shuffled = shuffle(STYLES);
    const groups = Array.from({ length: count }, () => []);
    shuffled.forEach((style, i) => groups[i % count].push(style));

    result.innerHTML = groups
      .map((styles, i) => `
        <div class="group-item">
          <h4>Groupe ${i + 1}</h4>
          <ul>
            ${styles.map((s) => `<li>${s.emoji} ${s.title}</li>`).join("")}
          </ul>
        </div>
      `)
      .join("");
  });
}

function scrollToHash() {
  const hash = location.hash;
  if (!hash) return;
  requestAnimationFrame(() => {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("style-card--highlight");
    setTimeout(() => el.classList.remove("style-card--highlight"), 2200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  setupLightbox();
  setupGroupTool();
  scrollToHash();
});
