let newArray = [];
let result =[];
let tenthArray = ['one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]]
flatternArray=(array)=>{

  array.forEach(element => {
    if(Array.isArray(element)){
       flatternArray(element);
    }
    else{
    result.push(element);
  }
  });

  
}
flatternArray(tenthArray);
console.log(result);



















