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

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));

//answer
//"Old Man Franklin"