const firstNonRepeatingCharacterConstantSpace = string => {
  for (let index = 0; index < string.length; index++) {
    if (string.lastIndexOf(string[index]) === index) {
      return string[index];
    }
  }
};

const firstNonRepeatingCharacterLinearTime = string => {
  const freqCount = string.split("").reduce((freqCount, character) => {
    const count = freqCount[character] || 0;
    freqCount[character] = count + 1;
    return freqCount;
  }, {});

  for (let index = 0; index < string.length; index++) {
    if (freqCount[string[index]] === 1) {
      return string[index];
    }
  }
};
console.log(
  firstNonRepeatingCharacterLinearTime(
    "the quick brown fox jumps then quickly blow air"
  )
);
