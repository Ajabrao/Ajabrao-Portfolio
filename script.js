/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* ===============================
   CLOSE MENU AFTER CLICK
================================ */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   FOOTER YEAR
================================ */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ===============================
   SCROLL REVEAL
================================ */

const cards = document.querySelectorAll(
    ".project-card, .skill, .profile-card, .education-card, .info-box"
);

function revealOnScroll() {

    cards.forEach(function (card) {

        const position = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}


/* Initial state */

cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition = "0.6s ease";

});


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===============================
   ACTIVE NAVIGATION
================================ */

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section");

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#2563eb";

        }

    });

});