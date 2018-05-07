const isPalindrome = input => {
  const inputLength = input.length;
  if (!inputLength) {
    return true;
  }
  if (input[0] !== input[inputLength - 1]) {
    return false;
  }
  return isPalindrome(input.slice(1, inputLength - 1));
};

const input = "madam";
console.log(isPalindrome(input.toLowerCase()));
