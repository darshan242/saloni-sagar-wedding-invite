// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menuBtn.innerHTML = isMenuOpen
    ? '<img src="times-close-error-fail-failure-failed-x-cross-bad-svgrepo-com.svg">'
    : '<img src="hamburger-menu-mobile-svgrepo-com.svg">';
  navLinks.classList.toggle("active");
});

// Image Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = document.querySelector("header").offsetHeight;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerHeight -50;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = '<img src="hamburger-menu-mobile-svgrepo-com.svg">';
      isMenuOpen = false;
    }
  });
});
