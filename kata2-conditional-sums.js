/*we'll be adding only the numbers in the array 
which match the given condition.

Create a function named conditionalSum that will be given an 
array of numbers and a condition, 
in this case odd or even. 
Given this condition, add up only the values which match 
that condition. If no values match the condition, return 0.

Do not use: Array.prototype.filter()
*/

const conditionalSum = function(values, condition) {
  // Your code here
  flist = [];
  flist2 = 0;


  if (values === []) {
    flist.push[0];
  } else {
    for (let i = 0; i < values.length; i++) {
      if (condition === "even" && values[i] % 2 === 0) {
        flist.push(values[i]);
      } else if (condition === "odd" && values[i] % 2 !== 0) {
        flist.push(values[i]);
      }
    }
  }
  
  for (let j = 0; j < flist.length; j++) {
    flist2 = flist[j] + flist2; 
  }

  return flist2;
};

//TEST CASES
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//EXPECTED OUTPUT
/*
6
9
144
0
*/