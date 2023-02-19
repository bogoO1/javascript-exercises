const removeFromArray = function (array, ...remove) {
  // array is the array to check, remove is an array of elements that are to be removed

  function isIn(element, index, array) {
    for (let k = 0; k < remove.length; k++) {
      console.log(remove[k] + " " + element);
      if (element === remove[k]) {
        console.log("true " + remove[k] + " " + element);
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    while (remove.find((element) => element === array[i])) {
      console.log("REMOVING " + i);
      for (let j = i; j < array.length - 1; j++) {
        console.log("moving " + array[j + 1] + " to  " + array[j]);
        array[j] = array[j + 1];
      }
      array.length = array.length - 1;
    }
  }
  console.log(array);
  return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
