const shiftElements = (array, from, to) => {
  const toElement = array[to];
  while (to != from) {
    array[to] = array[to - 1];
    --to;
  }
  array[from] = toElement;
};

const insertionSort = array => {
  let iterations = 0;
  let i = 0,
    j;
  while (i < array.length - 1) {
    j = 0;
    const toCompare = i + 1;
    while (j <= i) {
      iterations++;
      if (array[toCompare] < array[j]) {
        shiftElements(array, j, toCompare);
        break;
      }
      j++;
    }
    i++;
    console.log("array is now: " + array);
  }
  console.log(iterations);
};

const array = [-31, 1, 0, 83, 4];
insertionSort(array);
console.log(array);
