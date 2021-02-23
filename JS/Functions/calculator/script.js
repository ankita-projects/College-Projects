function putDisplay(event){
    var source = event.target || event.srcElement;                  //to determine source of the event(which button is clicked)
    var displayElement = document.getElementById("display");
    var existingValue = displayElement.innerHTML;   
    var newValue = existingValue + source.value;   // concatinating numbers to create higher numbers
    displayElement.innerHTML = newValue;
}

function calculate(){
    var displayElement=document.getElementById("display");
    var equation = displayElement.innerHTML;
    if(equation.indexOf("+")>0){
        var number = equation.split("+");
        var firstNumber = parseInt(number[0]);
        var secondNumber = parseInt(number[1]);
        var result = firstNumber + secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }

    if(equation.indexOf("-")>0){
        var number = equation.split("-");
        var firstNumber = parseInt(number[0]);
        var secondNumber = parseInt(number[1]);
        var result = firstNumber - secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }

    if(equation.indexOf("×")>0){
        var number = equation.split("×");
        var firstNumber = parseInt(number[0]);
        var secondNumber = parseInt(number[1]);
        var result = firstNumber * secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }
    if (equation.indexOf("÷") > 0) {
        var numbers = equation.split("÷");
        console.log(numbers);

        var firstNum = parseInt(numbers[0]);
        var secondNum = parseInt(numbers[1]);
        var result = firstNum / secondNum;
        displayElement.innerHTML = result;
      }
     
}
function clearDisplay() {
    var clear = document.getElementById("display");
    clear.innerHTML = "";
  }