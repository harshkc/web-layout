const hamMenu = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});

const navItem = document.querySelector(".nav-item");

navItem.forEach((element) => {
  element.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    mainNav.classList.remove("active");
  });
});
