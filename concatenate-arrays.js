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



console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);