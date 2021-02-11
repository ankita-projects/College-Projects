let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];
for (let index = 0; index < fifthArray.length; index++) {
    const element = fifthArray[index];
    const lastIndexOfElement =fifthArray.lastIndexOf(element);
    if(index!=lastIndexOfElement){
      fifthArray.splice(lastIndexOfElement,1);
    }
    }

