const Stack = require('./stack');

function reverseStringStack(string) {
  const stringStack = new Stack();

  const reversedCharacters = [];

  for (const character of string) {
    stringStack.push(character)
  }
  
  for (let index = 0; index <= string.length; index++) {
    const poppedChar = stringStack.pop();
    
    reversedCharacters.push(poppedChar)
  }

  return reversedCharacters.join("");
}

module.exports = reverseStringStack;
