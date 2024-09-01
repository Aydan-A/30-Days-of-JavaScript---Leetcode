// Apply Transform Over Each Element in Array  without map() method 
// The map function takes an array arr and a function fn as input.
var map = function (arr, fn) {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    // For each element, the fn function is called
      returnedArray.push(fn(arr[i], i));  
  }
  return returnedArray;
};

fn = function plusI(n, i) {
  return n + i;
};
arr = [1, 2, 3];
const newArray = map(arr, plusone);
console.log(newArray);


 
