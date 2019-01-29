const justGreaterThan = (element, array, low, high) => {
  //
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (element < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low === array.length ? -1 : array[low];
};

const array = [0, 1, 2, 3, 4, 5, 6];
const element = 6;
console.log(justGreaterThan(element, array, 0, array.length - 1));
