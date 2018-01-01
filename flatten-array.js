const flattenArray = array => {
  return array.reduce((acc, element, index) => {
    if (Array.isArray(element)) {
      element = flattenArray(element);
      acc.push(...element);
    } else {
      acc.push(element);
    }

    return acc;
  }, []);
};

// const input = [1, 3, [4, [5, 6, [7, 8, 9]]]];
