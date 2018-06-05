const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort = array => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
  }
};

const array = [4, 5, 1, 3, 2];
bubbleSort(array);
console.log(array);
