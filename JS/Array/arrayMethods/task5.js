let newArray = [];
let result =[];
let tenthArray = ['one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]]
//let tenthArray = [1, 2, 3, [45, "78980"]];
//[1,2,3,45,"78980"]
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



















