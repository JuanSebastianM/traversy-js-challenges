function anagramGrouping(words) {
  const anagramsMap = new Map();

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');

    if (anagramsMap.has(sortedWord)) {
      anagramsMap.get(sortedWord).push(word);
    } else {
      anagramsMap.set(sortedWord, [word])
    }
  }

  return Array.from(anagramsMap.values())
}

module.exports = anagramGrouping;
