const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  sideMenu.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  sideMenu.style.left = "-100%";
});

// Close menu when clicking menu item
document.querySelectorAll("#sideMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.style.left = "-100%";
  });
});
