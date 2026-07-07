// Galerie plein écran — s'appuie sur STYLES / ACCENTS / assetCandidates (script.js)

let galerieIndex = 0;

function loadGalerieSlide(index) {
  galerieIndex = (index + STYLES.length) % STYLES.length;
  const style = STYLES[galerieIndex];
  const accent = ACCENTS[galerieIndex % ACCENTS.length];

  const viewer = document.getElementById("viewer");
  viewer.style.setProperty("--accent", accent);

  const img = document.getElementById("viewer-image");
  const placeholder = document.getElementById("viewer-placeholder");
  document.getElementById("viewer-emoji").textContent = style.emoji;
  img.style.display = "none";
  placeholder.style.display = "flex";
  img.alt = `Affiche style ${style.title}`;

  const candidates = assetCandidates(style);
  let ci = 0;
  function tryNext() {
    if (ci >= candidates.length) return;
    img.src = encodeURI(candidates[ci++]);
  }
  img.onload = () => { img.style.display = "block"; placeholder.style.display = "none"; };
  img.onerror = tryNext;
  tryNext();

  document.getElementById("viewer-num").textContent = `Affiche n°${style.num}`;
  document.getElementById("viewer-title").textContent = `${style.emoji} ${style.title}`;
  document.getElementById("viewer-kid").textContent = style.kid;
  document.getElementById("viewer-index").textContent = galerieIndex + 1;

  [...document.querySelectorAll(".thumb-item")].forEach((el, i) => {
    el.classList.toggle("is-active", i === galerieIndex);
  });
  const activeThumb = document.querySelector(`.thumb-item[data-index="${galerieIndex}"]`);
  if (activeThumb) {
    const strip = document.getElementById("thumb-strip");
    const stripRect = strip.getBoundingClientRect();
    const thumbRect = activeThumb.getBoundingClientRect();
    const offset = thumbRect.left - stripRect.left - stripRect.width / 2 + thumbRect.width / 2;
    strip.scrollBy({ left: offset, behavior: "smooth" });
  }
}

function buildThumbStrip() {
  const strip = document.getElementById("thumb-strip");
  STYLES.forEach((style, i) => {
    const accent = ACCENTS[i % ACCENTS.length];
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "thumb-item";
    thumb.dataset.index = i;
    thumb.style.setProperty("--accent", accent);
    thumb.innerHTML = `
      <span class="thumb-media">
        <img alt="" loading="lazy">
        <span class="thumb-emoji">${style.emoji}</span>
      </span>
      <span class="thumb-label">${style.num}. ${style.title}</span>
    `;
    const img = thumb.querySelector("img");
    const candidates = assetCandidates(style);
    let ci = 0;
    function tryNext() {
      if (ci >= candidates.length) return;
      img.src = encodeURI(candidates[ci++]);
    }
    img.addEventListener("load", () => thumb.classList.add("has-image"));
    img.addEventListener("error", tryNext);
    tryNext();

    thumb.addEventListener("click", () => loadGalerieSlide(i));
    strip.appendChild(thumb);
  });
}

function toggleFullscreen() {
  const viewer = document.getElementById("viewer");
  if (!document.fullscreenElement) {
    viewer.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("viewer-total").textContent = STYLES.length;
  buildThumbStrip();
  loadGalerieSlide(0);

  document.getElementById("viewer-prev").addEventListener("click", () => loadGalerieSlide(galerieIndex - 1));
  document.getElementById("viewer-next").addEventListener("click", () => loadGalerieSlide(galerieIndex + 1));
  document.getElementById("viewer-fullscreen").addEventListener("click", toggleFullscreen);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") loadGalerieSlide(galerieIndex - 1);
    if (e.key === "ArrowRight") loadGalerieSlide(galerieIndex + 1);
    if (e.key === "f" || e.key === "F") toggleFullscreen();
  });

  let touchStartX = null;
  const frame = document.querySelector(".viewer-frame");
  frame.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; });
  frame.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) loadGalerieSlide(galerieIndex + (diff < 0 ? 1 : -1));
    touchStartX = null;
  });
});
