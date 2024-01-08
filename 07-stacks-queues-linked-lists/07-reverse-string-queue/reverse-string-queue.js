const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  
  for (let index = str.length - 1; index >= 0; index--) {
    const lastChar = str[index];

    queue.enqueue(lastChar);
  }

  let reversedString = "";

  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
};

module.exports = reverseStringWithQueue;
