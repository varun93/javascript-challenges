const primeFactors = n => {
  let divisor = 2;
  const result = [];
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return result;
};

console.log(primeFactors(2));
