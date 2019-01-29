const reverse = (str, index = 0) => {
  if (index === str.length - 1) {
    return str[index];
  }
  return reverse(str, index + 1) + str[index];
};
console.log(reverse("varun"));
