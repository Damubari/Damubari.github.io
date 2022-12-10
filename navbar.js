const toggleBtn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const btn = document.querySelector(".nav-play");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  btn.classList.toggle("active");
});
