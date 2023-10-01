function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const developerText = document.querySelector(".developer-text");

function typeText() {
  developerText.classList.remove("erasing");
  developerText.classList.add("typing");
}

function eraseText() {
  developerText.classList.remove("typing");
  developerText.classList.add("erasing");
}
