const firstOccurence = (array, searchElement, low, high) => {
  if (low > high) {
    return -1;
  }
  const mid = low + Math.floor((high - low) / 2);
  if (
    (mid === 0 || array[mid - 1] < searchElement) &&
    array[mid] === searchElement
  ) {
    return mid;
  }
  if (array[mid] < searchElement) {
    return firstOccurence(array, searchElement, mid + 1, high);
  } else {
    return firstOccurence(array, searchElement, low, mid - 1);
  }
};

const array = [0, 0, 1, 1, 2, 3, 5, 5];
const searchElement = 5;
console.log(firstOccurence(array, searchElement, 0, array.length - 1));
