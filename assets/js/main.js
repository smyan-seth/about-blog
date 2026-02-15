const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navLinks.classList.remove("active");
    }
});
