
/* body */
const tapGesture = document.querySelector(".lm-tap-gesture")
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

/* tapGesture */
tapGesture.addEventListener('click', function () {
    menu.classList.toggle("dg")

    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    tapGesture.classList.add("dn")
});

/* single page */
home.addEventListener("click", function () {
    homePage.classList.remove("hidden")
    aboutPage.classList.add("hidden")
    portfolioPage.classList.add("hidden")
    contactPage.classList.add("hidden")

    tapGesture.classList.add("dn")
    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    menu.classList.remove("dg")
})
about.addEventListener("click", function () {
    aboutPage.classList.remove("hidden")
    homePage.classList.add("hidden")
    portfolioPage.classList.add("hidden")
    contactPage.classList.add("hidden")

    tapGesture.classList.add("dn")
    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    menu.classList.remove("dg")
})
portfolio.addEventListener("click", function () {
    portfolioPage.classList.remove("hidden")
    homePage.classList.add("hidden")
    aboutPage.classList.add("hidden")
    contactPage.classList.add("hidden")

    tapGesture.classList.add("dn")
    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    menu.classList.remove("dg")

})
contact.addEventListener("click", function () {
    contactPage.classList.remove("hidden")
    homePage.classList.add("hidden")
    aboutPage.classList.add("hidden")
    portfolioPage.classList.add("hidden")

    tapGesture.classList.add("dn")
    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    menu.classList.remove("dg")
})

/* nav bar */
bars.addEventListener("click", function () {
    menu.classList.toggle("dg")

    bars.classList.add("hidden")
    xmark.classList.remove("hidden")
    tapGesture.classList.remove("dn")


});

xmark.addEventListener("click", function () {
    menu.classList.toggle("dg")

    bars.classList.remove("hidden")
    xmark.classList.add("hidden")
    tapGesture.classList.add("dn")

});

/*profile image*/
image.addEventListener("click", function () {
    profile.classList.toggle("dn")
});



