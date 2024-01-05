function wordFrequencyCounter(str) {
  const wordsCount = new Map();

  const formattedString = str.replace(/[^a-zA-Z ]/g, "");

  const separatedWords = formattedString.toLowerCase().split(" ");

  for (let i = 0; i < separatedWords.length; i++) {
    const currentWord = separatedWords[i];
    
    if (currentWord === "") continue;

    const currentWordCount = wordsCount.get(currentWord) || 0;
    
    wordsCount.set(currentWord, currentWordCount + 1)
  }

  return wordsCount;
}

module.exports = wordFrequencyCounter;
