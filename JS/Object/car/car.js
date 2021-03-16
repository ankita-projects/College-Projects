class Car{
     constructor(licencePlate,carMaker,carModel,price,color){
       this.licencePlate=licencePlate;
       this.carMaker=carMaker;
       this.carModel=carModel;
       this.price=price;
       this.color=color;
    }
    discount(){
        let text1=document.getElementById("discount");
        if(this.price>20000){
            text1.textContent="You will get 25% discount";
        }
        if(this.price<5000){
            text1.textContent="You will get 10% discount";
        }
        else
        text1.textContent="You will get 15% discount";
    }
}
let carArray=[];
let text =document.getElementById("demo");
document.getElementById("button1").addEventListener("click", addNewCar);
function addNewCar(){
    let licencePlate = document.getElementById("plateNum").value;
    let carMaker = document.getElementById("carMake").value;
    let carModel = document.getElementById("carModel").value;
    let price = document.getElementById("carprice").value;
    let color = document.getElementById("carcolor").value;
    let car = new Car(licencePlate,carMaker,carModel,price,color);
    carArray.push(car);
    console.table(carArray);
    car.discount();
}
document.getElementById("button2").addEventListener("click", searchByLicensePlate);
function searchByLicensePlate(){
   let licencePlate = document.getElementById("plateNum").value;
   var carObject= carArray.find(object => object.licencePlate==licencePlate);
   console.log(carObject);
   text.textContent=`Your car make is ${carObject.carMaker}, and model is ${carObject.carModel}`;
}
 


