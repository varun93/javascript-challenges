const flattenArray = array => {
  return array.reduce((acc, element, index) => {
    if (Array.isArray(element)) {
      element = flattenArray(element);
    }
    return acc.concat(element);
  }, []);
};

// const input = [1, 3, [4, [5, 6, [7, 8, 9]]]];
