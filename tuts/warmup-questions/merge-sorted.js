const mergeSortedArrays = (A, B) => {
  let i = 0,
    j = 0;
  const result = [];
  while (A[i] || B[j]) {
    if (A[i] !== undefined) {
      result.push(B[j++]);
    }
    if (B[j] !== undefined) {
      result.push(A[i++]);
    }
    if (A[i] < B[j]) {
      result.push(A[i++]);
    }
    if (B[j] < A[i]) {
      result.push(B[j++]);
    } else {
      result.push(A[i++]);
      result.push(B[j++]);
    }
  }
  return result;
};
console.log(mergeSortedArrays([2, 5, 6, 9], [1, 2, 3, 29]));
