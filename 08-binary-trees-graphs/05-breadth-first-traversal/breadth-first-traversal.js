const Queue = require('./queue');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function breadthFirstTraversal(root) {
//   if (!root) {
//     return [];
//   };
  
//   const result = [];
//   const queue = [];

//   queue.push(root);

//   while (queue.length > 0) {
//     const head = queue.shift();

//     result.push(head.data);

//     if (head.left) {
//       queue.push(head.left)
//     }

//     if (head.right) {
//       queue.push(head.right)
//     }

//   }
  
//   return result;
// }

// using the Queue class
function breadthFirstTraversal(root) {
  if (!root) {
    return [];
  };
  
  const result = [];
  const queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const head = queue.dequeue();

    result.push(head.data);

    if (head.left) {
      queue.enqueue(head.left)
    }

    if (head.right) {
      queue.enqueue(head.right)
    }

  }
  
  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
