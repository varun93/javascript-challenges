const clone = (deepCopy = false, source) => {
  if (Array.isArray(source)) {
    let array = [];
    source.forEach((element, index) => {
      if (typeof element == "object") {
        array[index] = clone(deepCopy, element);
      } else {
        array[index] = element;
      }
    });

    return array;
  }

  return Object.keys(source).reduce((acc, key) => {
    const valueToBeCopied = source[key];

    if (typeof valueToBeCopied == "object") {
      valueToBeCopied = clone(deepCopy, valueToBeCopied);
      if (deepCopy) {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);

        descriptor.value = valueToBeCopied;
        valueToBeCopied = descriptor;
      }
    }

    acc[key] = valueToBeCopied;
    return acc;
  }, {});
};
