const removeDuplicatesUnorted = array => {
  //
  const map = array.reduce((map, element) => {
    if (!map[element]) {
      map[element] = true;
    }
    return map;
  }, {});

  return Object.keys(map).map(element => parseInt(element));
};

const removeDuplicatesSorted = array => {
  let lagger = 1;
  for (let i = 1; i < array.length - 1; i++) {
    while (array[i] === array[i - 1]) {
      i++;
    }
    array[lagger++] = array[i];
  }
  array.length = lagger;
};

// const array = [1, 2, 1, 1, 4, 6];
// console.log(removeDuplicatesUnorted(array));
const array = [1, 1, 1, 3, 3, 4, 4, 5, 6, 6];
removeDuplicatesSorted(array);
console.log(array);
