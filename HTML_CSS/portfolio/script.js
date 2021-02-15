let header = document.getElementById("main-nav");

const scrollHeader = () =>{
  if(
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ){
    header.style.fontSize = "30px";
    header.style.padding ="10px";
  }else{
    header.style.fontSize ="60px";
    header.style.padding ="10px";
  }
};

window.addEventListener("scroll",scrollHeader);

