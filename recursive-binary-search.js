const binarySearch = (array, searchElement, lowerBound = 0, upperBound) => {
  if (lowerBound > upperBound) {
    return false;
  }

  const midIndex = Math.floor((lowerBound + upperBound) / 2);
  const midElement = array[midIndex];

  if (searchElement === midElement) {
    return midIndex;
  } else if (searchElement > midElement) {
    return binarySearch(array, searchElement, midIndex + 1, upperBound);
  } else {
    return binarySearch(array, searchElement, lowerBound, midIndex - 1);
  }
};
