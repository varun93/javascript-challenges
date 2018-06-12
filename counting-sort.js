const countSort = array => {
  let frequencyDist = array.reduce((frequencyDist, element) => {
    const count = frequencyDist[element] || 0;
    frequencyDist[element] = count + 1;
    return frequencyDist;
  }, {});

  let sortedArray = Object.keys(frequencyDist).reduce((sortedArray, key) => {
    const count = frequencyDist[key];
    if (count) {
      for (let i = 0; i < count; i++) {
        sortedArray.push(parseInt(key));
      }
    }
    return sortedArray;
  }, []);

  array.length = 0;
  array.push(...sortedArray);
  sortedArray = null;
  frequencyDist = null;
};

const array = [5, 2, 9, 5, 2, 3, 5];
countSort(array);
console.log(array);
