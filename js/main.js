const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
});
const navLinks = document.querySelectorAll(".nav-list a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
    });
});
