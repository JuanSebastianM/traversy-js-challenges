function reverseString(str) {
  if (str === "") {
    console.log(`reverseString(${str}) returns "" empty string`);
    return ""
  };
  
  console.log(`reverseString(${str}) calls reverseString(${str.substr(1)}) + ${str.charAt(0)}`)

  const result = reverseString(str.substr(1)) + str.charAt(0);
  console.log(`reverseString(${str}) returns ${result}`);

  return result
}

module.exports = reverseString;
