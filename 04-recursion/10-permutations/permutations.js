function permutations(str) {
  let permutations = [];

  if (str === "") {
    permutations.push(str);

    return permutations
  }


  for (let i = 0; i < str.length; index++) {
    const mainChar = str[i];
    
    for (let j = 1; j < str.length; j++) {
      const subChar = str[j];
      
    }
  }
}

module.exports = permutations;
