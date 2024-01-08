class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  get(index) {
    let current = this.head;

    let currentNodeIndex = 0;

    while (currentNodeIndex < index) {
      current = current.next;
      currentNodeIndex++;
    }

    return current.data;
  }
  
  getByValue(value, head = this.head) {
    if (head === null) return null;

    if (head.data === value) return head;

    return this.getByValue(value, head.next);
  }

  insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++
      }

      const node = new Node(data);
      node.next = current;
      previous.next = node;
      
    }
  }

  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++
      }

      previous.next = current.next;

    }
  }

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  countNodes() {
    let current = this.head;

    let count = 0;

    while (current !== null) {
      current = current.next;
      count++
    }

    return count;
  }
}

module.exports = { Node, LinkedList };
