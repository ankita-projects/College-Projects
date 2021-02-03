let a=0;
setInterval(Animation,1000);

function Animation(){
    a =a+10;
    let target =document.getElementById("box");
    target.style.marginLeft= a +"px";
}
