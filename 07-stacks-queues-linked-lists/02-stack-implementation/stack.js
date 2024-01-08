class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(item) {
    if (this.isFull()) throw new Error('Max size exceeded.')

    this.top++;
    this.stack[this.top] = item;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.top--;

    return this.stack.pop();

  }

  peek() {
    if (this.isEmpty()) return null;
    
    return this.stack[this.top]
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }

  isEmpty() {
    return this.top === -1
  }
}

module.exports = Stack;
