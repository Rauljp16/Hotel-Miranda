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

//header en desktop

const divHeaderDesktop = document.querySelector("#divHeaderDesktop");
const hoverZone = document.querySelector("#hoverZone");
let scrollPercentage;

window.addEventListener("load", () => {
  const update = () => {
    scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    if (scrollPercentage < 0.5 || scrollPercentage > 95) {
      divHeaderDesktop.style.transform = "translateY(0%)";
    } else {
      divHeaderDesktop.style.transform = "translateY(-150px)";
    }
  };
  update();
  window.addEventListener("scroll", update);
});

hoverZone.addEventListener("mouseenter", () => {
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercentage > 0.5 && scrollPercentage < 95) {
    divHeaderDesktop.style.transform = "translateY(0%)";
  }
});
hoverZone.addEventListener("mouseleave", () => {
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercentage > 0.5 && scrollPercentage < 95) {
    divHeaderDesktop.style.transform = "translateY(-150px)";
  }
});
