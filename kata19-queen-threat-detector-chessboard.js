/*
KATA 19
-chess board is 8 arrays in one array (8 columns, 8 rows)

*/

//PART 1: MAKING THE CHESS BOARD

//TEST CASE 1
let whiteQueen = [0, 5];
let blackQueen = [5, 0];

//TEST CASE 2 
//let whiteQueen = [0, 0];
//let blackQueen = [5, 7];


let generateBoard = function(whiteQueen, blackQueen) {
  
  let board = []; 

  for (let i = 0; i < 8; i++) {
    board.push([]);
  }

  for (let h = 0; h < board.length; h++) {
    for (let j = 0; j < 8; j++) {
      board[h].push(0);
    } 
  }

  //console.log(board);
  //LOL DO IT LIKE THIS NEXT TIME 
  //board[whiteQueen[0]][whiteQueen[1]] = 1;

  let twoQueens = []; 
  twoQueens.push(whiteQueen, blackQueen);
  //console.log(twoQueens);

  for (let tq = 0; tq < twoQueens.length; tq++) {
    //console.log(twoQueens[tq]);
    for (let t = 0; t < twoQueens[tq].length; t++) {
      //console.log(twoQueens[tq][t]);
      for (let x = 0; x < board.length; x++) {
        if (twoQueens[tq][t] === x) {
          for (let y = 0; y < board[x].length; y++) {
            if (twoQueens[tq][t + 1] === y) {
              board[x][y] = 1;
            }
          }
        }
      }
    }
  }

  return board;
  //console.log(board);
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);


const queenThreat = function(generatedBoard) {
 

  for (let w = 0; w < 8; w++) {
    let x = whiteQueen[0] + w; 
    let y = whiteQueen[1] + w;
    if (x < 8 && y < 8) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;
      }
    }
  } 
  
  for (let w = 0; w < 8; w++) {
    x = whiteQueen[0] - w; 
    y = whiteQueen[1] - w;
    if (x >= 0 && y >= 0) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;
      }
    }
  } 
  
  for (let h = 0; h < 8; h++) {
    x = whiteQueen[0];
    y = whiteQueen[1] - h;
    if (y >= 0) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;
      }
    }
  }

  for (let h = 0; h < 8; h++) {
    x = whiteQueen[0] - h;
    y = whiteQueen[1];
    if (x >= 0) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;
      }
    }
  }
  
  for (let h = 0; h < 8; h++) {
    x = whiteQueen[0] + h;
    y = whiteQueen[1];
    if (x < 8) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;
      }
    }    
  }
  
  for (let q = 0; q < 8; q++) {
    x = whiteQueen[0]; 
    y = whiteQueen[1] + q;
    if (y < 8) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;    
      }
    }
  }
  
  for (let e = 0; e < 8; e++) {
    x = whiteQueen[0] + e; 
    y = whiteQueen[1] - e;
    if (x < 8 && y >= 0) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;    
      }
    }
  }
  
  for (let e = 0; e < 8; e++) {
    x = whiteQueen[0] - e; 
    y = whiteQueen[1] + e;
    if (x >= 0 && y < 8) {
      if (x === blackQueen[0] && y === blackQueen[1]) {
        return true;    
      }
    }
  }
  
  return false;
  
}


console.log(queenThreat(generatedBoard));


//TEST CASES
//let whiteQueen = [0, 5];
//let blackQueen = [5, 0];
//let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));

//let whiteQueen = [0, 0];
//let blackQueen = [5, 7];
//let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));

/*
EXPECTED OUTCOME

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true


[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/




/* EXTRA STUFF I'M SCARED TO THROW AWAY

for (let c = 0; c < coordinates[cood].length; c++) {
        for (let gen = 0; gen < generatedBoard.length; gen++) {
          for (let g = 0; g < generatedBoard[gen].length; g++) {

            if (gen === coordinates[cood][0]) {
              if (g === coordinates[cood][1]) {
                if (generatedBoard[gen][g] === 1) {
                  return true //queen
                }
              }
            }
    
          }
        }




const queenThreat = function(generatedBoard) {

  let coordinates = [];
  
  let twoQueens = []; 
  twoQueens.push(whiteQueen, blackQueen);

  for (let tq = 0; tq < twoQueens.length; tq++) {  
    for (let t = 0; t < twoQueens[tq].length; t++) {
      for (let xCoord = 0; xCoord < 8; xCoord++) {
        for (let yCoord = 0; yCoord < 8; yCoord++) {

          xCoord = twoQueens[tq][t] + 1; 
          yCoord = twoQueens[tq][t + 1] + 1;

          if (yCoord < 8 && xCoord < 8) {
            coordinates.push([xCoord, yCoord]);
          }

        }

      }
    }
  }

  //console.log(coordinates);
  //console.log(twoQueens);

  for (let i = 0; i < twoQueens.length; i++) {
    for (let c = 0; c < coordinates.length; c++) {      
      if (twoQueens[i] === coordinates[c]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
*/