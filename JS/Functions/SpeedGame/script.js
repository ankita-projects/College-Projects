let bulb1 = document.getElementById("bulb1");
let bulb2 = document.getElementById("bulb2");
let bulb3 = document.getElementById("bulb3");
let bulb4 = document.getElementById("bulb4");
let myVar = setInterval(myTimer, 1000);                //Tmer runing in every 1sec
const myTimer = ()=> {                                 // function generating random 4 no. for four bulbs
  var d = Math.floor(Math.random() * 5);
  document.getElementById("bulb"+d).style.backgroundColor="red";   //background color of bulb changes 
}
document.getElementById("start").addEventListener("click", myTimer);