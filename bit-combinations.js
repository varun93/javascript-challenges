const combinations = (n) => {
    if (n == 0) {
        result.push(combination);
        return;
    }
    combination = combination.concat(0);
    combinations(n - 1);
    combination = combination.slice(0, combination.length - 1);
    combination = combination.concat(1);
    combinations(n - 1);
    combination = combination.slice(0, combination.length - 1);
}

const n = 2;
const result = [];
let combination = [];
combinations(n);
console.log(result);
