const map = (array, mapper) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(mapper(array[i]));
  }

  return result;
};

const filter = (array, condition) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

const reduce = (array, callback, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(array[i], accumulator);
  }
  return accumulator;
};

// mapper
const multiplyByTwo = element => element * 2;

// filterer
const isEven = element => element % 2 == 0;

// reducer
const summer = (element, total = 0) => total + element;

const input = [1, 2, 3, 4, 5, 6];
//mapper test
console.log(map(input, multiplyByTwo));
//filter test
console.log(filter(input, isEven));
//reduce test
console.log(reduce(input, summer, 0));
