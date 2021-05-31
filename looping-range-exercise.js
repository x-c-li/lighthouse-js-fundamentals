let range = function (start, end, step) {
  listRange = [];
  if (start === undefined || end === undefined || step === undefined || (start > end) ||(step === 0 || step < 0) ) {
    listRange = [];
  } else {
    for (var i =  start; i <= end; i = i + step) {
      listRange.push(i);
    }
  }
  return listRange;
};


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


/*
if (start === "" || end === "" || step === "") {
  listRange = [];
} else if (start > end) {
  listRange = []; 
} else if (step === 0 || step < 0) {
  listRange = [];
} else {
    for (i = start; i <= end; i + step) {
      listRange.push(i);
    }
} 
*/