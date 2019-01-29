//sieve of erasthenes
const printPrimes = n => {
  const primes = [];

  for (let i = 2; i < n; i++) {
    primes[i] = true;
  }

  for (let i = 2; i < n / 2; i++) {
    if (primes[i]) {
      for (let j = i + i; j <= n; j = i + j) {
        primes[j] = false;
      }
    }
  }
  return primes.reduce((result, bool, index) => {
    if (bool) result.push(index);
    return result;
  }, []);
};

console.log(printPrimes(10));
