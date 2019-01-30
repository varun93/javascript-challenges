const removeDuplicateChar = string => {
  const map = string.split("").reduce((map, character) => {
    map[character] = true;
    return map;
  }, {});

  return Object.keys(map).join("");
};
