const intersect = (a, b) => {
  return a.filter(element => b.indexOf(element) !== -1);
};

const difference = (a, b) => {
  return a.filter(element => b.indexOf(element) === -1);
};

const union = (a, b) => {
  const intersection = intersect(a, b);
  return difference(a, intersection).concat(b);
};

const symmetricDifference = (a, b) => {
  const intersection = intersect(a, b);
  return difference(a.concat(b), intersection);
};
