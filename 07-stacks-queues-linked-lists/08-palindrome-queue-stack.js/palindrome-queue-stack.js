const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(string) {
  const queue = new Queue();
  const stack = new Stack();

  const formattedString = string.toLowerCase().replace(/\W+/g, "");

  for (let index = 0; index < formattedString.length; index++) {
    const character = formattedString[index];
    
    queue.enqueue(character)
    stack.push(character)
  }

  let originalStringFormat = "";
  let reversedStringFormat = "";

  while (!queue.isEmpty() && !stack.isEmpty()) {
    originalStringFormat += queue.dequeue();
    reversedStringFormat += stack.pop()
  }

  return originalStringFormat === reversedStringFormat;
}

module.exports = isPalindromeQueueStack;
