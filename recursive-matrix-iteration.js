const currentX = 1;
const currentY = 1;
const ROWS = 3;
const COLUMNS = 3;

const isReachable = (currentX, currentY, i, j) => {
  let isReachable = false;
  try {
    const slope = (j - currentY) / (i - currentX);
    isReachable = Math.abs(slope) === 1;
  } catch (e) {}
  return isReachable;
};

const iterateMatrix = (matrix, i, j, paths = []) => {
  if (i >= ROWS) {
    return;
  }
  if (j >= COLUMNS) {
    i = i + 1;
    j = 0;
  }
  if (i < ROWS && j < COLUMNS && isReachable(currentX, currentY, i, j)) {
      paths.push([i, j]);
  }

  iterateMatrix(matrix, i, j + 1, paths);
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
