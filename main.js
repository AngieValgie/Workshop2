const nav = document.querySelector(".header__nav");

const capimgUp1 = document.querySelector(".header__li--up1");
const capimgUp2 = document.querySelector(".header__li--up2");
const capimgDown1 = document.querySelector(".header__li--down1");
const capimgDown2 = document.querySelector(".header__li--down2");

const Hamburger = document.querySelector(".header__Hamburger");
const liSubmenu1 = document.querySelector(".header__li--submenu1");
const liSubmenu2 = document.querySelector(".header__li--submenu2");
const header__Submenu1 = document.querySelector(".header__Submenu1");
const header__Submenu2 = document.querySelector(".header__Submenu2");

Hamburger.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});

liSubmenu1.addEventListener("click", () => {
  header__Submenu1.classList.toggle("header__nav--active");
  capimgUp1.classList.toggle("header__nav--deactivate");
  capimgDown1.classList.toggle("header__nav--active");
});

liSubmenu2.addEventListener("click", () => {
  header__Submenu2.classList.toggle("header__nav--active");
  capimgUp2.classList.toggle("header__nav--deactivate");
  capimgDown2.classList.toggle("header__nav--active");
});
