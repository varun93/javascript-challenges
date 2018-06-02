const changeProblem = (n, changes, denominations, i) => {
  if (i >= changes.length) {
    return;
  }
  if (n === 0) {
    counter++;
    console.log(denominations);
    return;
  }
  const denomination = changes[i];
  if (n - denomination >= 0) {
    denominations = denominations.concat(denomination);
    changeProblem(n - denomination, changes, denominations, i);
    denominations = denominations.slice(0, denominations.length - 1);
  }
  return changeProblem(n, changes, denominations, i + 1);
};

let counter = 0;
const n = 4;
const changes = [3, 2, 1];
changeProblem(n, changes, [], 0);
console.log(counter);
