const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partiton = (array, low, high) => {
  const pivotIndex = high;
  const pivotElement = array[pivotIndex];
  let i = low,
    j = pivotIndex - 1;
  while (true) {
    while (array[i] < pivotElement) {
      i++;
    }
    while (array[j] >= pivotElement) {
      j--;
    }
    if (i > j) {
      break;
    } else {
      swap(array, i, j);
    }
  }
  swap(array, i, pivotIndex);
  return i;
};

const quickSort = (array, low, high) => {
  if (low > high) {
    return;
  } else {
    const pivotIndex = partiton(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
};

const array = [9, 5, 2, 6, 1, 11, 3];
quickSort(array, 0, array.length - 1);
console.log(array);
