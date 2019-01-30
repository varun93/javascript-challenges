const reverseWordsInPlace = sentence => {
  return sentence
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};

console.log(reverseWordsInPlace("What are you doing"));
