compairArray = (array1, array2) => {
  if (array1.length != array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (!array2.includes(element)) {
      return false;
    }
  }
  return true;
};
console.log(compairArray([1,2,3,4],[1,2,3,4]));

