const balancedParanthesis = (N, paranthesis = [], openCount, closedCount) => {
  if (
    closedCount > openCount ||
    paranthesis.length > 2 * N ||
    openCount > N ||
    closedCount > N
  ) {
    return;
  }
  if (paranthesis.length === 2 * N) {
    console.log(paranthesis.join(""));
    return;
  }

  paranthesis = paranthesis.concat("(");
  balancedParanthesis(N, paranthesis, openCount + 1, closedCount);
  paranthesis = paranthesis.slice(0, paranthesis.length - 1);
  paranthesis = paranthesis.concat(")");
  balancedParanthesis(N, paranthesis, openCount, closedCount + 1);
};

const N = 3;
balancedParanthesis(N, [], 0, 0);

