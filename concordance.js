const sentenceTokenizer = (abbreviations, document) => {
  return document
    .split(" ")
    .map(word => {
      return abbreviations.indexOf(word) !== -1 ? word.replace(".", "@") : word;
    })
    .join(" ")
    .split(".")
    .map(sentence => {
      return sentence.replace("@", ".");
    });
};

const sentenceMapper = sentences => {
  return sentences.reduce((map, sentence, index) => {
    return sentence.split(" ").reduce((map, word) => {
      const sentenceList = map[word] || [];
      map[word] =
        sentenceList.indexOf(index) === -1
          ? sentenceList.concat(index)
          : sentenceList;
      return map;
    }, map);
  }, {});
};
