const largestPairSum = array => {
  if (array.length < 2) {
    return -1;
  }
  let [largest, secondLargest] = [
    Math.max(array[0], array[1]),
    Math.min(array[0], array[1])
  ];
  for (let i = 2; i < array.length; i++) {
    const element = array[i];
    if (element > element) {
      const temp = largest;
      largest = element;
      secondLargest = temp;
    } else if (element > secondLargest) {
      secondLargest = element;
    }
  }

  return largest + secondLargest;
};

const array = [4, 9, 14, 2, 7, 6];

console.log(largestPairSum(array));
