let header = document.querySelector("header");
let buttonBackToTop=document.getElementById("backToTop");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");

window.onscroll = function () {
 scrollFunction();
};


const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    buttonBackToTop.style.display="block";
  } else {
    header.classList.remove("bg");
    buttonBackToTop.style.display="none";
  }
};

const getToTop=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
const mobMenu = () =>{
    navigator.classList.toggle("responsive");
};

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click",mobMenu);
