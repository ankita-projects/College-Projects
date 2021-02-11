    let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world',500];
     let newFifthArray =[];
     fifthArray.forEach(element => {
       if(!newFifthArray.includes(element)){
            newFifthArray.push(element);
       }
     });
     fifthArray= newFifthArray;
     console.log(newFifthArray)