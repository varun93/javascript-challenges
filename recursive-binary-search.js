const binarySearch = (array, searchElement, lowerBound, upperBound) => {
  lowerBound = lowerBound || 0;
  upperBound = upperBound || array.length - 1;
  if (lowerBound > upperBound) {
    return false;
  }

  const midIndex = Math.floor(lowerBound  + (upperBound - lowerBound) / 2);
  const midElement = array[midIndex];

  if (searchElement === midElement) {
    return midIndex;
  } else if (searchElement > midElement) {
    return binarySearch(array, searchElement, midIndex + 1, upperBound);
  } else {
    return binarySearch(array, searchElement, lowerBound, midIndex - 1);
  }
};
