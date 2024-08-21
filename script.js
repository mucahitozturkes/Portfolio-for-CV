const tapGesture = document.querySelector(".lm-tap-gesture");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const menu = document.querySelector(".list-menu");
const pages = {
  home: document.querySelector(".home-page"),
  about: document.querySelector(".about-page"),
  portfolio: document.querySelector(".portfolio-page"),
  contact: document.querySelector(".contact-page")
};

function toggleMenu() {
  menu.classList.toggle("dg");
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");
  tapGesture.classList.toggle("dn");
}

function showPage(page) {
  Object.values(pages).forEach(p => p.classList.add("hidden"));
  pages[page].classList.remove("hidden");
  toggleMenu();
}

tapGesture.addEventListener('click', toggleMenu);
bars.addEventListener("click", toggleMenu);
xmark.addEventListener("click", toggleMenu);

document.querySelector(".profile-img img").addEventListener("click", () => {
  document.querySelector("h3").classList.toggle("dn");
});

["home", "about", "portfolio", "contact"].forEach(page => {
  document.querySelector(`.${page}`).addEventListener("click", () => showPage(page));
});
