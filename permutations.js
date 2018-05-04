const permute = (rest) => {
   if(!rest.length) {
      permutations.push(permutation.join(""));
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      permutation = permutation.concat(rest[i]);
      permute(rest.split("").filter(c => c !== rest[i]).join(""));
      permutation = permutation.slice(0, permutation.length - 1);
    }
  }
  
  let permutations = [];
  let permutation = [];
  const input = "abc";
  permute(input);
  console.log(permutations);
  
