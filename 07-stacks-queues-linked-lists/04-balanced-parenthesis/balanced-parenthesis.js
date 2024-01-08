const Stack = require('./stack');

function balancedParenthesis(string) {
  const stack = new Stack();

  for (const parenthesis of string) {
    if (parenthesis === "(") {
      stack.push(parenthesis)
    } else {
      if (stack.isEmpty()) return false;

      stack.pop()
    }
  }

  return stack.isEmpty()
}

module.exports = balancedParenthesis;
