class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("Max size exceeded.")

    this.queue[this.tail] = item;
    this.tail++;

    return true;
  }

  dequeue() {
    const item = this.queue[this.head];

    this.head++;

    return item;
  }

  peek() {
    return this.queue[this.head];
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  getLength() {
    return this.tail - this.head
  }
}

module.exports = Queue;
