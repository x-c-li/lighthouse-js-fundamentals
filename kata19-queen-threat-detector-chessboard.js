/*
KATA 19
-chess board is 8 arrays in one array (8 columns, 8 rows)

*/

//PART 1: MAKING THE CHESS BOARD
let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let twoQueens = []; 
twoQueens.push(whiteQueen, blackQueen);

let generatedBoard = function(array1, array2) {
  
  let board = []

  for (let i = 0; i < 8; i++) {
    board.push([]);
  }

  for (let h = 0; h < board.length; h++) {
    for (let j = 0; j < 8; j++) {
      board[h].push(0);
    } 
  }

  //console.log(board);


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



for (let tq = 0; tq < twoQueens.length; tq++) {
  //console.log(twoQueens[tq]);
  for (t = 0; t < twoQueens[tq].length; t++) {
    let diagonalLeftRight = []
    diagonalLeftRight.push((twoQueens[tq][t] + 1), (twoQueens[tq][t + 1] + 1));
    console.log(diagonalLeftRight);
  }
}

//PART 1: TEST CASES
//console.log(generatedBoard(whiteQueen, blackQueen));
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));

/*
PART 1: EXPECTED OUTCOME

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
*/

/*
for (let x = 0; x < board.length; x++) {
      if (tq[t] === x) {
        for (let y = 0; y < x.length; y++) {
          if (tq[t] === y) {
            board[x][y] = 1;
            console.log("here")
          }
        }
      }
    }


*/