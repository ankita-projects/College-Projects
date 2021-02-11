const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';
let newArray=[];
let wordsArray = sample.split(" ");
console.log(wordsArray);
for (let index = 0; index < wordsArray.length; index++) {
    const element = wordsArray[index];
    if(element.includes("o")){
         newArray.push(1);
    }
    else{
        newArray.push(0);
    }
    
}
console.log(newArray);