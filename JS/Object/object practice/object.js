const text=document.getElementById("demo");
const text=document.getElementById("other");

let car = {make:"Audi",year:2021,owner:"Ankita",city:"Helsinki",  calcAge: function(){
this.age=2025-this.year;
return this.age;
}};
console.log(car);
console.log(car.year);
console.log(car.city);
car.color="silver";
console.log(car);
car.color="pink";
console.log(car);

text.innerHTML=f


function Car(mark,year,ownerName,city){
    this.carType = mark;
    this.carYear = year;
    this.carOwnerName = ownerName;
    this.carCity = city;
}
    let audi = new Car("audi", 2020, "Ankit","Espoo")

    
text.innerHTML=`Your car is ${audi.carType}, ${audi.carYear}, year ${car.carCity} ${car.carOwnerName}`;
    
