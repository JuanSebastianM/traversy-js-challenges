function longestConsecutiveSequence(integers) {
  const uniqueIntegers = new Set(integers.sort((a, b) => a - b));

  const sequenceSet = new Set();

  const integersArr = Array.from(uniqueIntegers)

  for (let index = 0; index < integersArr.length; index++) {
    const currentInt = integersArr[index];
    const nextInt = integersArr[index + 1];

    console.log({nextInt});

    sequenceSet.add(currentInt);

    console.log({sequenceSet});
    if (nextInt === undefined) {
      return sequenceSet.size;
    }

    if ((currentInt + 1) === nextInt) {
      sequenceSet.add(nextInt)

      continue;
    }

    sequenceSet.clear();

  }

  return sequenceSet.size;
}

module.exports = longestConsecutiveSequence;
