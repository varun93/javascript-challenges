const N = 8;
const PLACE_QUEEN = 1;
const REMOVE_QUEEN = 0;

const canQueensAttack = (x1, y1, x2, y2) => {
  return x1 === x2 || y1 === y2 || Math.abs((y2 - y1) / (x2 - x1)) === 1;
};

const isSafe = (X, Y) => {
  let isSafe = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] && canQueensAttack(i, j, X, Y)) {
        isSafe = false;
        break;
      }
    }
  }
  return isSafe;
};

const placeQueen = (x, y) => {
  board[x][y] = PLACE_QUEEN;
};

const removeQueen = (x, y) => {
  board[x][y] = REMOVE_QUEEN;
};

const initBoard = col => {
  if (col >= board.length) {
    return;
  }
  board[col] = new Array(N);
  for (let row = 0; row < board[col].length; row++) {
    board[col][row] = 0;
  }
  initBoard(col + 1);
};

// the function return immediately when a solution is found
const nQueensSingleSolution = col => {
  if (col >= N) {
    console.log(board);
    return true;
  } else {
    for (let row = 0; row < N; row++) {
      if (isSafe(row, col)) {
        // place the queen in a given position
        placeQueen(row, col);
        if (nQueensSingleSolution(col + 1)) {
          return true;
        }
        // remove the queen; if the queen cannot be placed in the position
        removeQueen(row, col);
      }
    }
    return false;
  }
};

// this gives all possible solutions to nQueens Problem
const nQueensAllSolutions = col => {
  if (col >= N) {
    console.log(board);
  } else {
    for (let row = 0; row < N; row++) {
      if (isSafe(row, col)) {
        placeQueen(row, col);
        nQueensAllSolutions(col + 1);
        removeQueen(row, col);
      }
    }
  }
};

let board = new Array(N);
initBoard(0);
// board[0][0] = PLACE_QUEEN;
nQueensSingleSolution(0);
