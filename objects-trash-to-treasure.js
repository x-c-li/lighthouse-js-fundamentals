/*
Our function will receive two arguments:

1.  trash, is a string that will tell our function 
what type of item is being submitted.

2. The second argument, bins, is an object containing 
three properties (waste, recycling, and compost), 
which hold some numerical value. Our function must 
increase the correct value in the bins object, and then 
return the newly updated object.
*/
/*
const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let i of keys) {
    if (trash === i) {
      bins[i]++;
    }
  }return bins;
};
*/

const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let key of keys) {
    if (trash === key) {
      bins[key]++;
    }
  }return bins;
};




//testing the function
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/* RESULT SHOULD BE: 

{
  waste: 4,
  recycling: 3,
  compost: 5
}

*/