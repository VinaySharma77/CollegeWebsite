const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav-links");
const menu = document.getElementById("menu");
const close_menu = document.getElementById("close-menu");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  // menu.style.display = "none";
  // close_menu.style.display = "block";
};
mobile_nav.addEventListener("click", () => toggleNavbar());