
const lastIndexOf = function(array, val) {
  for (let i = array.length - 1 ; i >= 0; i--) {
    if (array === undefined || val === undefined) {
      return -1; 
    } else if (array[i] === val) {
      return i;
    } 
  }
  return -1;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);