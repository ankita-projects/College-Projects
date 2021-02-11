 reverse=(array) => {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  console.log(reverse([1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000]));