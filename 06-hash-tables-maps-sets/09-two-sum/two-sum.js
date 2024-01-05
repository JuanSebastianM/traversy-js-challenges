// const MAX_INDICES = 2;

// function twoSum(integers, targetInteger) {
//   const integersSet = new Set();

//   let totalSum = 0;

//   for (let i = 0; i < integers.length; i++) {
//     const firstInt = integers[i];

//     for (let j = i + 1; j < integers.length; j++) {
//       const secondInt = integers[j];

//       integersSet.add(i)
//       integersSet.add(j)

//       totalSum = firstInt + secondInt;
      
//       if (integersSet.size === MAX_INDICES && totalSum === targetInteger) {
//         return Array.from(integersSet.values())
//       }

//       integersSet.clear()
//       totalSum = 0;
//     }
//   }

//   return []
// }

// 2nd solution... NOT MINE tho

function twoSum(integers, targetInteger) {
  const integersSet = new Set();

  for (let index = 0; index < integers.length; index++) {
    const currentInt = integers[index];

    const complement = targetInteger - currentInt;

    if (integersSet.has(complement)) {
      return [integers.indexOf(complement), index]
    }

    integersSet.add(currentInt);
    
  }

  return []
}

module.exports = twoSum;
