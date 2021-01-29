
 calculateBmi=(weight,height)=>{
    return  weight/(height*height);
}

displayBmi=()=>{
    var weightGiven =parseInt(document.getElementById("weight").value);
    var heightGiven=parseFloat(document.getElementById("height").value );
    let BMI = calculateBmi(weightGiven,heightGiven);
    document.getElementById("BMI").innerHTML =BMI;
    
if(BMI<=18.5){
      document.getElementById("result").textContent="You are underweight";
 }
 else if(BMI>=18.5 && BMI<=24.9){
    document.getElementById("result").textContent="Normal and healthy weight";
 }
 else if(BMI>=25 && BMI<=29.9){
    document.getElementById("result").textContent="You are Overweight";
 }
 else(BMI>30)
    document.getElementById("result").textContent="You are Obese";
 
}

   