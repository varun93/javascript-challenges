//using reduce
const solution = binary => {
  return binary.split("").reduce((result, bit, index) => {
    return (
      result + parseInt(binary[binary.length - index - 1]) * Math.pow(2, index)
    );
  }, 0);
};

const usingForLoops = binary => {
  let result = 0,
    power = 1;

  for (let index = binary.length - 1; index >= 0; index--) {
    if (binary[index] === "1") {
      result += power * binary[index];
    }
    power *= 2;
  }
  return result;
};

console.log(usingForLoops("101"));
