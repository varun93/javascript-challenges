const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    swap(array, i, smallest);
  }
};

const array = [4, 5, 1, 3, 2];
selectionSort(array);
console.log(array);
