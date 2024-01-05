function flattenArray(arr) {
  let flattenedArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenedArray =  flattenedArray.concat(flattenArray(item))
    } else {
      flattenedArray.push(item)
    }

  }

  return flattenedArray
}

module.exports = flattenArray;
