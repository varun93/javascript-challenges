const fiboRecursive = n => {
  if (n < 2) {
    return n;
  } else {
    return fiboRecursive(n - 1) + fiboRecursive(n - 2);
  }
};

const fibo = n => {
  const array = [];
  let i = 2;
  array.push(0);
  array.push(1);
  while (i < n) {
    array.push(array[i - 1] + array[i - 2]);
    i++;
  }
  return array[i - 1];
};

const spaceOptimizedFibo = n => {
  let a = 0,
    b = 1,
    c,
    i = 3;

  while (i <= n) {
    c = a + b;
    a = b;
    b = c;
    ++i;
  }

  return c;
};
