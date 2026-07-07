// Menu burger — partagé par toutes les pages du site

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;

  function closeMenu() {
    links.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  burger.addEventListener("click", toggleMenu);
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!links.classList.contains("is-open")) return;
    if (links.contains(e.target) || burger.contains(e.target)) return;
    closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
});
