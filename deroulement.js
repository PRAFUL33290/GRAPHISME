// Étape 1 — Devine le style : quiz à partir des données STYLES (script.js)

function pickQuizOptions(correctIndex) {
  const indices = new Set([correctIndex]);
  while (indices.size < Math.min(4, STYLES.length)) {
    indices.add(Math.floor(Math.random() * STYLES.length));
  }
  return shuffle([...indices]);
}

function loadQuizRound() {
  const correctIndex = Math.floor(Math.random() * STYLES.length);
  const style = STYLES[correctIndex];
  const options = pickQuizOptions(correctIndex);

  const img = document.getElementById("quiz-image");
  const placeholder = document.getElementById("quiz-placeholder");
  img.style.display = "none";
  placeholder.style.display = "flex";
  img.src = "";

  const candidates = assetCandidates(style);
  let ci = 0;
  function tryNext() {
    if (ci >= candidates.length) return;
    img.src = encodeURI(candidates[ci++]);
  }
  img.onload = () => { img.style.display = "block"; placeholder.style.display = "none"; };
  img.onerror = tryNext;
  tryNext();

  const optionsWrap = document.getElementById("quiz-options");
  const feedback = document.getElementById("quiz-feedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";
  optionsWrap.innerHTML = "";

  options.forEach((idx) => {
    const opt = STYLES[idx];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option-btn";
    btn.textContent = `${opt.emoji} ${opt.title}`;
    btn.addEventListener("click", () => {
      const isCorrect = idx === correctIndex;
      [...optionsWrap.children].forEach((c) => (c.disabled = true));
      btn.classList.add(isCorrect ? "is-correct" : "is-wrong");
      if (!isCorrect) {
        const correctBtn = [...optionsWrap.children].find((c) => c.textContent.includes(style.title));
        if (correctBtn) correctBtn.classList.add("is-correct");
      }
      feedback.textContent = isCorrect
        ? `✅ Bravo, c'était bien "${style.title}" !`
        : `❌ Pas tout à fait — la bonne réponse était "${style.title}".`;
      feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
    });
    optionsWrap.appendChild(btn);
  });
}

function renderWordBank() {
  const wrap = document.getElementById("word-bank-list");
  wrap.innerHTML = STYLES.map((s) => `<span class="word-chip">${s.emoji} ${s.title}</span>`).join("");
}

// Étape 2 — Consigne : style + contenu + date (avec vérification jours fériés)

function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function frenchHolidays(year) {
  const easter = easterSunday(year);
  const fixed = [
    { name: "Jour de l'An", date: new Date(year, 0, 1) },
    { name: "Fête du Travail", date: new Date(year, 4, 1) },
    { name: "Victoire 1945", date: new Date(year, 4, 8) },
    { name: "Fête Nationale", date: new Date(year, 6, 14) },
    { name: "Assomption", date: new Date(year, 7, 15) },
    { name: "Toussaint", date: new Date(year, 10, 1) },
    { name: "Armistice 1918", date: new Date(year, 10, 11) },
    { name: "Noël", date: new Date(year, 11, 25) },
  ];
  const movable = [
    { name: "Lundi de Pâques", date: addDays(easter, 1) },
    { name: "Ascension", date: addDays(easter, 39) },
    { name: "Lundi de Pentecôte", date: addDays(easter, 50) },
  ];
  const map = {};
  [...fixed, ...movable].forEach((h) => (map[toISODate(h.date)] = h.name));
  return map;
}

function checkHoliday(isoDate) {
  if (!isoDate) return null;
  const year = parseInt(isoDate.slice(0, 4), 10);
  const holidays = frenchHolidays(year);
  return holidays[isoDate] || null;
}

function populateStyleSelect() {
  const select = document.getElementById("form-style");
  select.innerHTML = STYLES.map((s) => `<option value="${s.num}">${s.emoji} ${s.title}</option>`).join("");
}

function formatDateFr(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function updatePromptOutput() {
  const styleNum = parseInt(document.getElementById("form-style").value, 10);
  const style = STYLES.find((s) => s.num === styleNum);
  const content = document.getElementById("form-content").value.trim();
  const isoDate = document.getElementById("form-date").value;
  const output = document.getElementById("prompt-output");
  const warning = document.getElementById("date-warning");

  const holiday = checkHoliday(isoDate);
  if (holiday) {
    warning.hidden = false;
    warning.textContent = `⚠️ Attention, cette date tombe un jour férié (${holiday}) !`;
  } else {
    warning.hidden = true;
  }

  if (!content && !isoDate) {
    output.textContent = "Remplis les champs ci-dessus pour voir ta consigne se construire ici.";
    output.classList.remove("has-content");
    return;
  }

  const parts = [];
  if (style) parts.push(`Style graphique : ${style.title}.`);
  if (content) parts.push(`Contenu de l'affiche : ${content}.`);
  if (isoDate) parts.push(`Date du festival affichée sur l'affiche : ${formatDateFr(isoDate)}${holiday ? " (jour férié : " + holiday + ")" : ""}.`);
  parts.push("Format affiche A3 verticale, texte lisible, informations du festival bien visibles.");
  output.textContent = parts.join(" ");
  output.classList.add("has-content");
}

// Étape 3 — 3 générations, sélection définitive façon imprimerie

function setupImageSlots() {
  const wrap = document.getElementById("image-slots");
  const resultBox = document.getElementById("validation-result");
  const resetBtn = document.getElementById("reset-slots");
  let validated = false;

  function buildSlot(n) {
    const slot = document.createElement("div");
    slot.className = "image-slot";
    slot.dataset.slot = n;
    slot.innerHTML = `
      <p class="image-slot-label">Génération n°${n}</p>
      <div class="image-slot-preview" data-role="preview">
        <span>Aucune image</span>
      </div>
      <input type="file" accept="image/*" data-role="file" id="slot-file-${n}">
      <label for="slot-file-${n}" class="ghost-btn ghost-btn--small">📁 Déposer l'image</label>
      <button type="button" class="select-btn" data-role="select" disabled>Valider cette affiche →</button>
    `;
    const fileInput = slot.querySelector('[data-role="file"]');
    const preview = slot.querySelector('[data-role="preview"]');
    const selectBtn = slot.querySelector('[data-role="select"]');

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      preview.innerHTML = `<img src="${url}" alt="Génération ${n}">`;
      selectBtn.disabled = false;
    });

    selectBtn.addEventListener("click", () => {
      if (validated) return;
      validated = true;
      const chosenImg = preview.querySelector("img");
      [...wrap.querySelectorAll(".image-slot")].forEach((s) => {
        s.classList.add("is-locked");
        const btn = s.querySelector('[data-role="select"]');
        const input = s.querySelector('[data-role="file"]');
        const label = s.querySelector("label");
        btn.disabled = true;
        input.disabled = true;
        label.classList.add("is-disabled");
      });
      slot.classList.add("is-chosen");
      selectBtn.textContent = "✅ Affiche validée";

      resultBox.hidden = false;
      resultBox.innerHTML = `
        <p class="validation-title">🖨️ Affiche validée pour l'impression !</p>
        ${chosenImg ? `<img class="validation-preview" src="${chosenImg.src}" alt="Affiche validée">` : ""}
        <p>Cette version est désormais définitive, comme un tirage d'imprimerie — direction l'étape musique !</p>
      `;
      resetBtn.hidden = false;
    });

    return slot;
  }

  [1, 2, 3].forEach((n) => wrap.appendChild(buildSlot(n)));

  resetBtn.addEventListener("click", () => {
    validated = false;
    wrap.innerHTML = "";
    [1, 2, 3].forEach((n) => wrap.appendChild(buildSlot(n)));
    resultBox.hidden = true;
    resultBox.innerHTML = "";
    resetBtn.hidden = true;
  });
}

// Étape 4 — Musique

function setupMusicRecap() {
  const genre = document.getElementById("music-genre");
  const notes = document.getElementById("music-notes");
  const recap = document.getElementById("music-recap");

  function update() {
    if (!genre.value.trim() && !notes.value.trim()) {
      recap.textContent = "";
      return;
    }
    recap.innerHTML = `
      <p class="music-recap-title">🎵 Fiche musique de l'équipe</p>
      ${genre.value.trim() ? `<p><strong>Style musical :</strong> ${genre.value.trim()}</p>` : ""}
      ${notes.value.trim() ? `<p><strong>Ambiance :</strong> ${notes.value.trim()}</p>` : ""}
    `;
  }
  genre.addEventListener("input", update);
  notes.addEventListener("input", update);
}

document.addEventListener("DOMContentLoaded", () => {
  renderWordBank();
  loadQuizRound();
  document.getElementById("quiz-next").addEventListener("click", loadQuizRound);

  populateStyleSelect();
  ["form-style", "form-content", "form-date"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updatePromptOutput);
  });
  updatePromptOutput();

  setupImageSlots();
  setupMusicRecap();
});
