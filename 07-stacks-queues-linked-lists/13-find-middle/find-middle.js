function findMiddle(linkedList) {
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = findMiddle;
