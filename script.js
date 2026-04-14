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
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) return false; // Ctrl+Shift+J
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) return false; // Ctrl+U (View Source)
};

// Efek peringatan ala Facebook di Console
(function () {
  const title = "BERHENTI!";
  const message =
    "Ini adalah fitur browser yang ditujukan untuk pengembang. Jika seseorang meminta Anda menyalin dan menempelkan sesuatu di sini untuk mengaktifkan fitur atau 'meretas' akun seseorang, itu adalah penipuan.";
  const warning = "Menempelkan kode di sini dapat memberikan akses kepada penipu ke akun email/medsos anda.";

  // Gaya teks Judul (Besar & Merah)
  const titleStyle = "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;";

  // Gaya teks Pesan (Hitam/Putih Standar tapi agak besar)
  const messageStyle = "font-size: 18px;";

  console.log("%c" + title, titleStyle);
  console.log("%c" + message, messageStyle);
  console.log("%c" + warning, "font-size: 18px; font-weight: bold; color: red;");
})();
