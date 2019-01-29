const lastOccurence = (array, searchElement, low, high) => {
  if (low > high) {
    return -1;
  }
  const mid = low + Math.floor((high - low) / 2);
  if (
    (mid === array.length - 1 || array[mid + 1] > searchElement) &&
    array[mid] === searchElement
  ) {
    return mid;
  }
  if (array[mid] > searchElement) {
    return lastOccurence(array, searchElement, low, mid - 1);
  } else {
    return lastOccurence(array, searchElement, mid + 1, high);
  }
};

const array = [0, 0, 1, 1, 2, 3, 5, 5];
const searchElement = 0;
console.log(lastOccurence(array, searchElement, 0, array.length - 1));
