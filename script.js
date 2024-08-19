/* nav bar */
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const menu = document.querySelector(".list-menu");
/* image click */
const image = document.querySelector(".profile-img img")
const profile = document.querySelector("h3");
/* single page */
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact")

const homePage = document.querySelector(".home-page")
const aboutPage = document.querySelector(".about-page")
const portfolioPage = document.querySelector(".portfolio-page")
const contactPage = document.querySelector(".contact-page")

/* single page */
home.addEventListener("click", function () {
    homePage.classList.remove("dn")
    aboutPage.classList.add("dn")
    portfolioPage.classList.add("dn")
    contactPage.classList.add("dn")
})
about.addEventListener("click", function () {
    aboutPage.classList.remove("dn")
    homePage.classList.add("dn")
    portfolioPage.classList.add("dn")
    contactPage.classList.add("dn")
})
portfolio.addEventListener("click", function () {
    portfolioPage.classList.remove("dn")
    homePage.classList.add("dn")
    aboutPage.classList.add("dn")
    contactPage.classList.add("dn")

})
contact.addEventListener("click", function () {
    contactPage.classList.remove("dn")
    homePage.classList.add("dn")
    aboutPage.classList.add("dn")
    portfolioPage.classList.add("dn")
})

/* nav bar */
bars.addEventListener("click", function () {
    menu.classList.toggle("dg")

    bars.classList.add("hidden")
    xmark.classList.remove("hidden")

});

xmark.addEventListener("click", function () {
    menu.classList.toggle("dg")

    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
});

/*profile image*/
image.addEventListener("click", function () {
    profile.classList.toggle("dn")
});