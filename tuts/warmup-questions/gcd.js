//a > b
const gcd = (a, b) => {
  if (b < 2) {
    return 1;
  }
  if (a % b === 0) {
    return b;
  }
  const diff = Math.abs(a - b);

  return gcd(Math.max(diff, b), Math.min(diff, b));
};

// why this works?
// if you compare this solution with the previous one you can see that
// we were doing gcd(Math.max(diff, b), Math.min(diff, b))
// we want the value of b to converge and have a constraint that b > a
// b > a % b, so it works in our case
const gcdEuclidean = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

console.log(gcd(36, 24));
