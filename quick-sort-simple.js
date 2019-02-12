// Note : This is not a in place quick sort; but example gives a good intuition about the algorithm
// Credits : https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1
const quickSort = (arr) => {
  // base case; An array with less than 2 elements is always sorted  
  if (arr.length <= 1) return arr;
  // Choose a random pivot
  const pivot = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1);
  const left = [];
  const right = [];
  // left has all the elements lesser than pivot; right has elements greater than pivot
  arr.forEach(el => el < pivot ? left.push(el) : right.push(el));
  // recursively call on the left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  // now combine the sortedLeft, pivot(remember it is sandwiched between left and right), sortedRight
  return [...sortedLeft, ...pivot, ...sortedRight];
}
