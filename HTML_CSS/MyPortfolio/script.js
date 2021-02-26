let header = document.querySelector("#header");
let logo = document.querySelector("#logo");

const minHeader = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    if (window.matchMedia("(max-width: 576px)").matches) {
      logo.style.fontSize = "1rem";
      header.style.backgroundColor = "#0a101f";
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      logo.style.fontSize = "1.5rem";
      header.style.backgroundColor = "#0a101f";
    } else {
      header.style.backgroundColor = "#0a101f";
    }
  } else {
    if (window.matchMedia("(max-width: 576px)").matches) {
      logo.style.fontSize = "2rem";
      header.style.backgroundColor = "#0a101f";
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      logo.style.fontSize = "3rem";
      header.style.backgroundColor = "#0a101f";
    } else {
      header.style.backgroundColor = "#0a101f";
    }
  }
};
document.addEventListener("scroll", minHeader);

let backToTop = document.querySelector(".back-to-top");

const toTop = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    backToTop.style.bottom = "20px";
  } else {
    backToTop.style.bottom = "-50px";
  }
};
document.addEventListener("scroll", toTop);