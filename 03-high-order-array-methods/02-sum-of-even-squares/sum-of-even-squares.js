function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);

  const evenSquaresSum = evenNumbers.reduce((totalSum, currentNumber) => {
    return totalSum + (currentNumber * currentNumber)
  }, 0)

  return evenSquaresSum;
}

module.exports = sumOfEvenSquares;
