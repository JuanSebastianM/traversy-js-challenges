const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(integers, targetSum) {
  const list = new DoublyLinkedList();

  for (const integer of integers) {
    list.append(integer)
  }

  let current = list.head;
  
  while (current !== null) {
    const diff = targetSum - current.data;

    if (list.contains(diff) && diff !== current.data) {
      return [current.data, diff];
    }

    current = current.next;
  }

  return null;
}

module.exports = findPairSum;
