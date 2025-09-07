// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Warkop menu di klik
document.querySelector("#Warkop-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik dilar sidebar untuk menghilangkan nav
const Warkop = document.querySelector("#Warkop-menu");

document.addEventListener("click", function (e) {
  if (!Warkop.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
