const combinationSum = (superset, start, sum) => {
    if (sum < 0) return;
    subset.length && sum === 0 && subsets.push(subset);
    for (let i = start; i < superset.length; i++) {
        subset = subset.concat(superset[i]);
        combinationSum(superset, i + 1, sum - superset[i]);
        subset = subset.slice(0, subset.length - 1);
    }
}

let subsets = [];
let subset = [];
const superset = [1, 2, 3, 4, 1, 6, 7];
combinationSum(superset, 0, 7);
console.log(subsets);
