function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  // if empty
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // prev node of new Node will be the current tail (before adding the new node to the list)
    newNode.prev = this.tail;
    // current tail's next node is the new Node (that is yet to be added)
    this.tail.next = newNode;
    // new tail is now the new Node
    this.tail = newNode;
  }

  this.length++;
}

DoublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  // if empty
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const currentHead = this.head;

    newNode.next = currentHead
    this.head.prev = newNode;

    this.head = newNode;
  }

  this.length++;
}

DoublyLinkedList.prototype.insertAt = function(targetIndex, data) {
  if (targetIndex < 0 || targetIndex > this.length) {
    return null;
  }

  if (targetIndex === 0) {
    return this.prepend(data)
  }

  if (targetIndex === this.length) {
    return this.append(data)
  }

  const newNode = new Node(data);

  let currentNode = this.head;

  for (let i = 0; i < targetIndex - 1; i++) {
    currentNode = currentNode.next;
  }

  console.log({currentNode});

  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next = newNode;

  console.log(currentNode.next);

  this.length++;
}

DoublyLinkedList.prototype.printAll = function() {
  let current = this.head;

   while (current) {
    console.log(current.data);

    current = current.next;
   }
}

module.exports = DoublyLinkedList;
