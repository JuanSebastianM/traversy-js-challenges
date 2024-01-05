function symmetricDifference(arr1, arr2) {
  const firstArrUniqueValues = new Set(arr1);
  const secondArrUniqueValues = new Set(arr2);

  const symmetricDifferenceArray = [];

  for (const value of firstArrUniqueValues) {
    if (secondArrUniqueValues.has(value)) {
      secondArrUniqueValues.delete(value);
    } else {
      symmetricDifferenceArray.push(value)
    }
    
  }

  symmetricDifferenceArray.push(...secondArrUniqueValues)

  return symmetricDifferenceArray;
}

module.exports = symmetricDifference;
