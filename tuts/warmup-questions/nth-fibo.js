const getFibo = n => {
  let a = 0,
    b = 1;

  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};

console.log(getFibo(6));
