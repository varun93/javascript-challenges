const merge = (arrayA, arrayB) => {
  let pointerA = 0,
    pointerB = 0,
    sortedArray = [];

  while (pointerA < arrayA.length && pointerB < arrayB.length) {
    if (arrayA[pointerA] < arrayB[pointerB]) {
      sortedArray.push(arrayA[pointerA]);
      pointerA++;
    } else {
      sortedArray.push(arrayB[pointerB]);
      pointerB++;
    }
  }
  if (pointerA < arrayA.length) {
    sortedArray = sortedArray.concat(arrayA.slice(pointerA));
  }
  if (pointerB < arrayB.length) {
    sortedArray = sortedArray.concat(arrayB.slice(pointerB));
  }

  return sortedArray;
};

const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
};

const array = [22, 18, -4, 58, 7, 31, 42];

const sortedArray = mergeSort(array);
console.log(sortedArray);
