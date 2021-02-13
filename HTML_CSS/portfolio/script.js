window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementsByName("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor ="#f1f1f1";
    header.style.padding ="10px";
  
  } else {
    header.style.background ="#transparent";
    header.style.fontSize = "60px";

  }
  
}

