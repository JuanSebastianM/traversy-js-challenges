const Stack = require('./stack');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// with normal array as the stack
// function depthFirstTraversal(root) {
//   if (!root) return [];

//   const result = [];
//   const stack = [];

//   stack.push(root);

//   while (stack.length > 0) {
//     const current = stack.pop();

//     result.push(current.value)

//     if (current.right) {
//       stack.push(current.right)
//     }

//     if (current.left) {
//       stack.push(current.left)
//     }
//   }

//   return result;
// }

// with class Stack as the stack
function depthFirstTraversal(root) {
  if (!root) return [];

  const result = [];
  const stack = new Stack();

  stack.push(root);

  while (!stack.isEmpty()) {
    const current = stack.pop();

    result.push(current.value)

    if (current.right) {
      stack.push(current.right)
    }

    if (current.left) {
      stack.push(current.left)
    }
  }

  return result;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
