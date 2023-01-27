const nav = document.querySelector(".header__nav");

const capimgUp1 = document.querySelector(".header__li--up1");
const capimgUp2 = document.querySelector(".header__li--up2");
const capimgDown1 = document.querySelector(".header__li--down1");
const capimgDown2 = document.querySelector(".header__li--down2");

const xMenu = document.getElementById('xMenu');
const hamburguerIcon = document.getElementById('hamburguerIcon');
const Hamburger = document.querySelector(".header__Hamburger");
const liSubmenu1 = document.querySelector(".header__li--submenu1");
const liSubmenu2 = document.querySelector(".header__li--submenu2");
const header__Submenu1 = document.querySelector(".header__Submenu1");
const header__Submenu2 = document.querySelector(".header__Submenu2");
const tittle1 = document.getElementById("tittle1");
const tittle2= document.getElementById("tittle2");

Hamburger.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  xMenu.classList.toggle("header__nav--deactivate");
  hamburguerIcon.classList.toggle("header__nav--deactivate")
});

const active = (tittleNav, tittle, active1, active2, active3) => {
  tittleNav.addEventListener("click", () => {
  active1.classList.toggle("header__nav--active");
  tittle.classList.toggle("black");
  active2.classList.toggle("header__nav--active");
  active3.classList.toggle("header__nav--deactivate");
});
}

active(liSubmenu1, tittle1, header__Submenu1, capimgUp1, capimgDown1);
active(liSubmenu2, tittle2, header__Submenu2, capimgUp2, capimgDown2);
