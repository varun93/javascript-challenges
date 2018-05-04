const generateSubsets = (superset) => {
  subset.length && subsets.push(subset);
  for (let i = 0; i < superset.length; i++) {
    subset = subset.concat(superset[i]);
    generateSubsets(superset.slice(i + 1));
    subset = subset.slice(0, subset.length - 1)
  }
}

let subsets = [];
let subset = [];
const superset = "abc";
generateSubsets(superset);
console.log(subsets);
