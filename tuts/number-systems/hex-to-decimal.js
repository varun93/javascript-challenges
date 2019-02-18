let convertHex = digit => {
  return mapping[digit];
};
//using reduce
const solution = hex => {
  return hex.split("").reduce((result, bit, index) => {
    return (
      result + convertHex(hex[hex.length - index - 1]) * Math.pow(16, index)
    );
  }, 0);
};

const usingForLoops = hex => {
  let result = 0,
    power = 1;

  for (let index = hex.length - 1; index >= 0; index--) {
    result += power * convertHex(hex[index]);
    power *= 16;
  }
  return result;
};
const mapping = {};
mapping["0"] = 0;
mapping["1"] = 1;
mapping["2"] = 2;
mapping["3"] = 3;
mapping["4"] = 4;
mapping["5"] = 5;
mapping["6"] = 6;
mapping["7"] = 7;
mapping["8"] = 8;
mapping["9"] = 9;
mapping["A"] = 10;
mapping["B"] = 11;
mapping["C"] = 12;
mapping["D"] = 13;
mapping["E"] = 14;
mapping["F"] = 15;

console.log(solution("A0"));
