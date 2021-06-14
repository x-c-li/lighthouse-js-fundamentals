/*
KATA 8 - REPEATING NUMBERS - DESCRIPTION 

Create a function named repeatNumbers that will return a string 
with each of the given values repeated the appropriate number of times, 
if there are multiple sets of values each set should be separated by a comma. 
If there is only one set of values then you should omit the comma.

[[1, 2], [2, 3]]

The first will be the value to repeat, 
the second will be the amount of times to repeat that value.

*/

const repeatNumbers = function(data) {
  // Put your solution here

  num = "";

  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[j][1]; i++) {
      num += data[j][0];
    } 
    if (j++ < (data.length - 1)) {
      num = num + ", ";
      --j;
    } 
  } 

  return num;
};


//TEST CASES 
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));



/*
EXPECTED ANSWERS 
  1111111111
  11, 222
  10101010, 343434343434, 9292
*/