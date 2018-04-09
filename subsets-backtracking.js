const generateSubsets = (superset, start) => {
  subset.length && subsets.push(subset);
  for (let i = start; i < superset.length; i++) {
    subset = subset.concat(superset[i]);
    generateSubsets(superset, i + 1);
    subset = subset.slice(0, subset.length - 1)
  }
}


let subsets = [];
let subset = [];
const superset = [1, 2, 3];
generateSubsets(superset, 0);
console.log(subsets)
