const getHex = group => {
  const mapping = {};
  mapping["0000"] = "0";
  mapping["0001"] = "1";
  mapping["0010"] = "2";
  mapping["0011"] = "3";
  mapping["0100"] = "4";
  mapping["0101"] = "5";
  mapping["0110"] = "6";
  mapping["0111"] = "7";
  mapping["1000"] = "8";
  mapping["1001"] = "9";
  mapping["1010"] = "A";
  mapping["1011"] = "B";
  mapping["1100"] = "C";
  mapping["1101"] = "D";
  mapping["1110"] = "E";
  mapping["1111"] = "F";
  return mapping[group];
};
const solution = binary => {
  let result = [];
  const length = binary.length;
  const extra = length % 4;
  for (let i = length; i > extra; i -= 4) {
    result.unshift(getHex(binary.slice(i - 4, i)));
  }

  result.unshift(
    getHex(new Array(4 - extra).fill("0").join("") + binary.slice(0, extra))
  );

  return result.join("");
};
