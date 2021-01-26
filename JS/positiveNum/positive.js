calculate = () => {
    let Number1 =parseInt(document.getElementById("number1").value);
    let Number2 =parseInt(document.getElementById("number2").value);
    let Number3 =parseInt(document.getElementById("number3").value);
    let text1;
    let text2;
 
    let solution1 =document.getElementById("solution1");
    let solution2 =document.getElementById("solution2");
  
    if(Number1>0 && Number2>0 && Number3>0){
        text1=(Number1+Number2+Number3);
      
        if(Number1>0 && Number2>0 && Number3>0){
        text2= (Number1*Number2*Number3) ;
        } 
    }
      
     solution1.textContent =text1;
     solution2.textContent =text2;
}