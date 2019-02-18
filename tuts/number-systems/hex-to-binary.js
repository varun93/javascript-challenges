const getBinary = group => {
  const mapping = {};
  mapping["0"] = "0000";
  mapping["1"] = "0001";
  mapping["2"] = "0010";
  mapping["3"] = "0011";
  mapping["4"] = "0100";
  mapping["5"] = "0101";
  mapping["6"] = "0110";
  mapping["7"] = "0111";
  mapping["8"] = "1000";
  mapping["9"] = "1001";
  mapping["A"] = "1010";
  mapping["B"] = "1011";
  mapping["C"] = "1100";
  mapping["D"] = "1101";
  mapping["E"] = "1110";
  mapping["F"] = "1111";
  return mapping[group];
};

const solution = hex => {
  return hex
    .split("")
    .map(digit => {
      return getBinary(digit);
    })
    .join("");
};
