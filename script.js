// Données des 20 styles graphiques — festival "Arc-en-Ciel"
const STYLES = [
  {
    num: 1, emoji: "🎨", title: "Minimaliste",
    kid: "Très peu d'éléments, beaucoup de vide, 2 couleurs seulement. Simple et élégant.",
    prompt: "Crée une affiche minimaliste pour un festival de musique. Fond blanc avec beaucoup d'espace vide, une seule guitare stylisée au centre, deux couleurs principales (noir et jaune), typographie moderne très grande, informations bien espacées, design suisse, élégant, premium, affiche A3 verticale."
  },
  {
    num: 2, emoji: "🌈", title: "Maximaliste",
    kid: "Tout l'inverse du minimalisme : plein de couleurs, de détails et d'objets partout !",
    prompt: "Crée une affiche maximaliste pour un festival de musique. Explosion de couleurs, confettis, feux d'artifice, instruments de musique, foule, nourriture, ballons, étoiles, affiches collées, autocollants, nombreuses typographies, beaucoup d'informations, ambiance festive, extrêmement chargée mais amusante, affiche A3 verticale."
  },
  {
    num: 3, emoji: "🟦", title: "Flat Design",
    kid: "Des formes et personnages tout simples, en couleurs plates, sans ombre ni relief.",
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
    kid: "Soleil couchant néon, grille futuriste, palmiers, couleurs cyan et rose fluo.",
    prompt: "Crée une affiche rétro années 80 pour un festival. Soleil couchant néon, grille futuriste, palmiers, couleurs cyan et magenta, style Synthwave, ambiance Miami Vice."
  },
  {
    num: 9, emoji: "🌃", title: "Cyberpunk",
    kid: "Une ville futuriste la nuit, néons roses et bleus, pluie et lasers.",
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
    kid: "Fond noir profond, dorure, typographie élégante : un style chic et haut de gamme.",
    prompt: "Crée une affiche premium pour un festival VIP. Fond noir profond, dorure, typographie élégante, éclairage raffiné, design haut de gamme."
  },
];

const ACCENTS = [
  "#FF5C7A", "#FF9F45", "#FFD23F", "#8BD450", "#37C6A8",
  "#3AB4FF", "#6C6CE5", "#B15CFF", "#FF6FCF", "#2FBF71"
];

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

function renderGrid() {
  const grid = document.getElementById("style-grid");
  const frag = document.createDocumentFragment();

  STYLES.forEach((style, i) => {
    const accent = ACCENTS[i % ACCENTS.length];
    const base = fileBaseName(style);

    const card = document.createElement("article");
    card.className = "style-card";
    card.style.setProperty("--accent", accent);

    card.innerHTML = `
      <div class="style-media" data-role="media">
        <img
          src="images/${base}.jpg"
          alt="Exemple d'affiche style ${style.title}"
          loading="lazy"
          data-role="img"
        >
        <div class="style-placeholder" data-role="placeholder">
          <span class="placeholder-emoji">${style.emoji}</span>
          <span>Ajoute ton image ici</span>
          <code>images/${base}.jpg</code>
        </div>
      </div>
      <div class="style-body">
        <p class="style-num">Style n°${style.num}</p>
        <h3>${style.emoji} ${style.title}</h3>
        <p class="style-kid">${style.kid}</p>
        <button type="button" class="style-btn" data-role="open">Voir la consigne complète</button>
      </div>
    `;

    const img = card.querySelector('[data-role="img"]');
    const placeholder = card.querySelector('[data-role="placeholder"]');
    img.addEventListener("error", () => {
      img.style.display = "none";
      placeholder.style.display = "flex";
    });

    const openBtn = card.querySelector('[data-role="open"]');
    openBtn.addEventListener("click", () => openLightbox(style, accent, base));
    card.querySelector('[data-role="media"]').addEventListener("click", () => openLightbox(style, accent, base));

    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

function openLightbox(style, accent, base) {
  const lightbox = document.getElementById("lightbox");
  const body = document.getElementById("lightbox-body");
  body.style.setProperty("--accent", accent);
  body.innerHTML = `
    <p class="lb-num">Style n°${style.num}</p>
    <h2>${style.emoji} ${style.title}</h2>
    <p class="lb-kid">${style.kid}</p>
    <h4>Consigne pour créer ton affiche</h4>
    <p class="lb-prompt">${style.prompt}</p>
    <p class="lb-file">Nom d'image attendu : <code>images/${base}.jpg</code></p>
  `;
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.classList.remove("no-scroll");
}

function setupLightbox() {
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
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

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  setupLightbox();
  setupGroupTool();
});
