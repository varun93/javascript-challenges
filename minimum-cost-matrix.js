const dynamicProgramming = () => {
  const DP = [];
  for (let i = 0; i < columns; i++) {
    DP[i] = [];
  }
  DP[0][0] = matrix[0][0];

  for (let row = 1; row < rows; row++) {
    DP[row][0] = DP[row - 1][0] + matrix[row][0];
  }
  for (let col = 1; col < columns; col++) {
    DP[0][col] = DP[0][col - 1] + matrix[0][col];
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < columns; col++) {
      DP[row][col] =
        matrix[row][col] +
        Math.min(DP[row - 1][col - 1], DP[row - 1][col], DP[row][col - 1]);
    }
  }

  console.log(DP[rows - 1][columns - 1]);
};

const solution = (row, col) => {
  if (row < 0 || col < 0) {
    return Number.POSITIVE_INFINITY;
  } else if (row === 0 && col === 0) {
    return matrix[row][col];
  } else {
    const right = solution(row - 1, col - 1);
    const down = solution(row - 1, col);
    const diagnol = solution(row, col - 1);
    return matrix[row][col] + Math.min(right, down, diagnol);
  }
};

const destX = 2;
const destY = 2;
const matrix = [[1, 2, 3], [4, 8, 2], [1, 5, 3]];
const rows = matrix.length;
const columns = matrix[0].length;
console.log(dynamicProgramming());
