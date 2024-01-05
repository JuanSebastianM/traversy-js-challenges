const HashTable = require('./HashTable');

// Iterate through each word > sort them alphabetically > store the sorted word in the hashtable as a key and the original word as its value
// If the sorted word is already an existing key, push the original word as a new value.

const hashTable = new HashTable();

function anagramGrouping(words) {
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (hashTable.has(sortedWord)) {
      const previousGroupingValue = hashTable.get(sortedWord);
      const newGroupingValue = [...previousGroupingValue, word]

      hashTable.set(sortedWord, newGroupingValue)
    } else {
      hashTable.set(sortedWord, [word])
    }
  }
  
  return hashTable.getValues()
}

module.exports = anagramGrouping;
