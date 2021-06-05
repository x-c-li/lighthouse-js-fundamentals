/*
const concat = function (list1, list2) {
  
  let list12 = [];

  if (list1.length > 0 ) {
    if (list2.length > 0) {
      for (var list in list1) {
        list12.push(list1[list]);
      } 
      for (list in list2) {
        list12.push(list2[list]);
      }
    } else if (list2.length === 0) {
      for (var i  in list1) {
        list12.push(list1[i]);
      }
    }
  } else if (list1.length === 0) {
    for (var x in list2) {
      list12.push(list2[x]);
    }
  }  
  return list12;
  
  
};
*/
//console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
//console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
//console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
//console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

const merge = function (list1, list2) {
  
  let list12 = [];

  if (list1.length > 0 && list2.length > 0) {
    for (var list in list1) {
      list12.push(list1[list]);
    } 
    for (list in list2) {
      list12.push(list2[list]);
    }

  } else if (list1.length === 0) {
    for (var x in list2) {
      list12.push(list2[x]);
    }
  } else if (list1.length > 0 && list2.length === 0) {
    for (var i  in list1) {
      list12.push(list1[i]);
    }
  } 
  return list12.sort();

};



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);


//AN ALTERNATE SOLUTION THAT DOESN'T USE SORT

function merge(a, b) {
  for (var i = 0; i < b.length; i++) {
    a.push(b[i]);
  } 
  for (i = 0; i < a.length; i++) {
    for (var j = i+1; j < a.length; j++) {
      if (a[i] > a[j]) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp; 
      }
    }
  }
  return a;
}
//*/