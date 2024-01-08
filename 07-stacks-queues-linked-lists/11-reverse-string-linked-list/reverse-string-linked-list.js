const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  const linkedList = new LinkedList();

  for (const char of str) {
    linkedList.add(char);
  }

  let reversedString = "";
  let index = str.length - 1;

  while (index >= 0) {
    reversedString += linkedList.get(index)

    index--;
  }

  return reversedString;
}

module.exports = reverseStringLinkedList;
