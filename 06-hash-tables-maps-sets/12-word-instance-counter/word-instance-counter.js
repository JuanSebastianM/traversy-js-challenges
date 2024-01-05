const HashTable = require('./HashTable');

const hashTable = new HashTable();

function wordInstanceCounter(str, targetWord) {
  const wordsSet = str.toLowerCase().replace(/[\.?!,]/g, "").split(" ");

  for (const word of wordsSet) {
    hashTable.set(word, (hashTable.get(word) ?? 0) + 1)
  }

  hashTable.printTable()
  console.log(hashTable.getValues())
  return hashTable.get(targetWord) ?? 0
}

module.exports = wordInstanceCounter;
