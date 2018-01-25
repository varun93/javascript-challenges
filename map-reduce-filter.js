const reduce = (array, callback, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(array[i], accumulator);
  }
  return accumulator;
};

const filterUsingReduce = (array, condition) => {
  return reduce(
    array,
    (element, accumulator) => {
      if (condition(element)) {
        accumulator.push(element);
      }
      return accumulator;
    },
    []
  );
};

const mapUsingReduce = (array, mapper) => {
  return reduce(
    array,
    (element, accumulator) => {
      accumulator.push(mapper(element));
      return accumulator;
    },
    []
  );
};

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
//filter using reduce
console.log(filterUsingReduce(input, isEven));
//map using reduce
console.log(mapUsingReduce(input, multiplyByTwo));
