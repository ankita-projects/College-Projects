let a=0;
let intervalID
intervalID = setInterval(Animation,1000);

function Animation(){
    a =a+10;
    let target =document.getElementById("box");
    target.style.marginLeft= a +"px";
}
document.getElementById("click").addEventListener("click",()=>{
    clearInterval(intervalID);
   
})
