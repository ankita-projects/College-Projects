/*function calculate(){
    let price =parseInt(document.getElementById("price").value);
    let money =parseInt(document.getElementById("money").value);
    let answer= document.getElementById("answer");
    console.log(price);
    console.log(money);
    console.log(price*money);
    answer.textContent=money / price;
}*/

 calculate = () => {
    let price =parseInt(document.getElementById("price").value);
    let money =parseInt(document.getElementById("money").value);
    let answer= document.getElementById("answer");
    let gasolineYouGet = money / price;
    let text;
    answer.textContent=money / price;
    let solution =document.getElementById("solution");
    answer.textContent=Math.floor(gasolineYouGet);
    if(gasolineYouGet>=10){
        text=("Good you can escape now")
    }
     else{
        text=("Ups, you have to stay here")
     }
    
     solution.textContent =text;
}
















/*function whoareyou(){
    let yourName=prompt("What is your name?");
    let surName=prompt("What is your surname?");
    greeting(yourName,surName);
}
function greeting(name,secondname){
    document.write(name);
    document.write(secondname);
}
hello();*/