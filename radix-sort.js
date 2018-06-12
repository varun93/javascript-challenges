const getNthDigit = (number, n) => {
  for (let i = 0; i < n; i++) {
    number = Math.floor(number / 10);
  }
  return number % 10;
};

const shouldStop = (array, dictionary) => {
  return dictionary.hasOwnProperty(0) && array.length === dictionary[0].length;
};

const extractElements = dictionary => {
  return Object.keys(dictionary).reduce((elements, key) => {
    return dictionary[key] ? elements.concat(dictionary[key]) : elements;
  }, []);
};

const radixSort = array => {
  let index = 0;
  while (true) {
    const dictionary = array.reduce((dict, element) => {
      const digit = getNthDigit(element, index);
      const elements = dict[digit] || [];
      dict[digit] = elements.concat(element);
      return dict;
    }, {});
    const extractedElements = extractElements(dictionary);
    array.length = 0;
    array.push(...extractedElements);
    if (shouldStop(array, dictionary)) {
      break;
    }
    index++;
  }
};

const array = [10, 21, 17, 34, 44, 11, 654, 123];
radixSort(array);
console.log(array);
