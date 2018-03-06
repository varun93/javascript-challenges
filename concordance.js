const sentenceMapper = (sentences) => {
  return sentences.reduce((map,sentence,index) => {
      return sentence.split(" ").reduce((map,word) => {
        if(word.trim().length < 1) return map;
        const sentenceList = map[word] || [];
        map[word] = sentenceList.concat(index);
        return map;
      },map);
  },{}); 
}

const sentenceTokenizer = (abbreviations,document) => {
  return document.split(" ").map((word) => {
	  return	abbreviations.indexOf(word) !== -1 ? word.replace(".","@") : word;
  }).join(" ").split(".").map((sentence) => {
 		return sentence.replace("@",".");
 });
}
