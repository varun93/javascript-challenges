// step1 write a backtrack,
// the important fact is to identify the subproblem and be convinced that there are actually
// overlapping subproblems
// step2 remove redundant variables
// identify the sub problem and hence the cache key

const backtrackWine = (start, end) => {
  if (start > end) {
    return 0;
  }

  if (cache[start][end]) {
    console.log(start, end, cache[start][end]);
    return cache[start][end];
  }
  //   year depicts the level of the recursion in the tree
  const year = wines.length - (end - start);
  const leftSum = year * wines[start] + backtrackWine(start + 1, end);
  const rightSum = year * wines[end] + backtrackWine(start, end - 1);

  const max = Math.max(rightSum, leftSum);
  cache[start][end] = max;
  return max;
};

const wines = [2, 3, 5, 1, 4];
const cache = [];
for (let i = 0; i < wines.length; i++) {
  cache[i] = [];
}
