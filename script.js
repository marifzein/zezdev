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

// Disable Klik Kanan
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Shortcut F12, Inspect Element, dll
document.onkeydown = function (e) {
  if (e.keyCode == 123) return false; // F12
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) return false; // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) return false; // Ctrl+Shift+C
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) return false; // Ctrl+U (View Source)
};
