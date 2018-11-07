// insertion i,j-1
// substitution i-1,j-1
// delete i-1, j
const backtrack = (i, j) => {
  if (i < 0 || j < 0) {
    return Math.max(i, j, 0);
  }
  if (A[i] === B[j]) {
    return backtrack(i - 1, j - 1);
  }
  return (
    1 +
    Math.min(backtrack(i - 1, j - 1), backtrack(i, j - 1), backtrack(i - 1, j))
  );
};

const A = "saturn";
const B = "sat";

console.log(backtrack(A.length - 1, B.length - 1));
