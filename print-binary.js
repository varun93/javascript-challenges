const printBinary = number => {
  number = Math.floor(number);
  if (number < 2) {
    return number + "";
  } else {
    return printBinary(number / 2) + number % 2;
  }
};

const number = 43;
console.log(printBinary(number));
