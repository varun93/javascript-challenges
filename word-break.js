let dictionary = [
  "i",
  "like",
  "love",
  "sam",
  "sung",
  "samsung",
  "mobile",
  "ice",
  "cream",
  "icecream",
  "man",
  "and",
  "go",
  "mango"
];

const presentInDictionary = input => {
  return dictionary.indexOf(input.join("")) !== -1;
};

// the undo function not upto the mark
const backtrack = (input, result = []) => {
  for (let i = 1; i < input.length; i++) {
    const left = input.slice(0, i);
    const rest = input.slice(i);

    if (presentInDictionary(left)) {
      result.push(left.join(""));

      if (presentInDictionary(rest)) {
        result.push(rest.join(""));
        console.log(result);
        result.pop();
      }
      backtrack(rest, result);
      result.pop();
    }
  }
};

const input = "ilovesamsungmobile";
const result = [];
backtrack(input.split(""), result);
// console.log(result);
