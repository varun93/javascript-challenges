//can have a mapping instead of this
const getHex = digit => {
  digit = parseInt(digit);
  if (digit > 9) {
    return String.fromCharCode(55 + digit);
  }
  return digit + "";
};

const solution = decimal => {
  if (decimal < 16) {
    return getHex(decimal);
  }
  return solution(Math.floor(decimal / 16)) + getHex(decimal % 2);
};

console.log(solution(160));
