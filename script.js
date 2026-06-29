/* ===================================
   NovaCore Studio V2
   Script.js Part 1
=================================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});

// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "🌙";

    }

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// Close Menu After Click

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});
/* ===================================
   NovaCore Studio V2
   Script.js Part 2
=================================== */

// Wishlist Counter

let wishlistCount = 0;

const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistValue = wishlistBtn.querySelector("span");

wishlistBtn.addEventListener("click", () => {

    wishlistCount++;

    wishlistValue.textContent = wishlistCount;

});

// Cart Counter

let cartCount = 0;

const cartBtn = document.getElementById("cartBtn");
const cartValue = cartBtn.querySelector("span");

document.querySelectorAll(".product-card button").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartValue.textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(() => {

            button.textContent = "Add To Cart";

        }, 1500);

    });

});

// Newsletter

const newsletterForm = document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for subscribing!");

    newsletterForm.reset();

});

// Login Button

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    alert("Login System Coming Soon!");

});

// Contact Button

const whatsappBtn = document.querySelector(".contact .btn");

whatsappBtn.addEventListener("click", () => {

    console.log("Opening WhatsApp...");

});
/* ===================================
   NovaCore Studio V2
   Script.js Part 3
=================================== */

// Sticky Header

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Scroll Reveal Animation

const cards = document.querySelectorAll(
".category-card, .product-card, .brand-box, .review-card"
);

const revealCards = () => {

    const trigger = window.innerHeight - 100;

    cards.forEach(card => {

        if (card.getBoundingClientRect().top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

});

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// Console Message

console.log(
"🚀 NovaCore Studio V2 - Luxury Shopping Mall Loaded Successfully"
);
