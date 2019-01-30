const swap = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [b, a];
};
