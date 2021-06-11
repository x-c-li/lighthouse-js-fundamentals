//INPUT
const sumLargestNumbers = function(data) {
  // Put your solution here
  let highest = "";
  let second = "";
  
  if (data.length <= 2) {
    highest = data[0];
    second = data[1];
  
  } else if (data.length > 2) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > data[i + 1]) {
        highest = data[i];
      } else if (data[i] < data[i + 1]) {
        highest = data[i + 1];
      }
    }
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1] && data[j] < highest) {
        second = data[j];
      } else if (data[j] < data[j + 1] && data[j + 1] < highest) {
        second = data[j + 1];
      }
    }
    
  }

  return highest + second;
};



//TESTING IT 
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/*
EXPECTED OUTPUT 
11
5
126
*/

/*
ONLINE SOLUTION

const sumLargestNUmbers = function(data) {
  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > highest) {
      highest === data[i];
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] > secondHIghest && data[j] < highest) {
      secondHighest === data[j];
    }
  }

  return highest + secondHighest;
};


*/

//OTHER CODE FOR REFERENCE

/*
const judgeVegetable = function (vegetables, metric) {
  
  var largestVal = 0;
  var largestValSubmitter = "";
  
  for (const veg of vegetables) {

    var currVal = veg[metric];
    var currSubmitter = veg.submitter;

    if (currVal >= largestVal) {
      largestVal = currVal;
      largestValSubmitter = currSubmitter;
    }

  }
  return largestValSubmitter;
};
*/