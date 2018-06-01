const frequency = (string, character) => {
  return string.split("").reduce((count, c) => {
    return count + (c == character ? 1 : 0);
  }, 0);
};

const validParantheses = (N, store = "") => {
  const openBracketCount = frequency(store, "(");
  const closedBracketCount = frequency(store, ")");

  if (
    openBracketCount > N ||
    closedBracketCount > N ||
    closedBracketCount > openBracketCount
  ) {
    return;
  }

  if (store.length === 2 * N) {
    console.log(store);
    return;
  } else {
    validParantheses(N, store + "(");
    validParantheses(N, store + ")");
  }
};

let count = 0,
  calls = 0;
console.log(validParantheses(3, ""));
console.log(count, calls);
/*
Parantheses Conditions
1) Open < Count/2
2) Closed < Count/2
3) Open >= Closed
4) Open === Closed return;
*/
