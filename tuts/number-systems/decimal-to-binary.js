const solution = decimal => {
  if (decimal < 2) {
    return decimal + "";
  }
  return solution(Math.floor(decimal / 2)) + (decimal % 2);
};

console.log(solution(1));
