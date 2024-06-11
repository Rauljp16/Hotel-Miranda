// Menu desplegable

const menuBurguerSvg = document.getElementById("menuBurguerSvg");
const menuBurguer = document.getElementById("menuBurguer");

menuBurguerSvg.addEventListener("click", () => {
  menuBurguer.classList.toggle("menuDown");
  if (menuBurguer.className != "menuDesktop") {
    menuBurguerSvg.src = "./svg/close.svg";
    menuBurguerSvg.style.transform = "rotate(" + 180 + "deg)";
  } else {
    menuBurguerSvg.src = "./svg/menuBurguer.svg";
    menuBurguerSvg.style.transform = "rotate(" + -180 + "deg)";
  }
});

// const nav__svg = document.querySelector(".nav__svg");

// const toggleMenu = () => {
//   menuBurguer.classList.remove("menuDown");
//   nav__svg.src = "./svg/Menu.svg";
//   nav__svg.style.transform = "rotate(" + -180 + "deg)";
// };
