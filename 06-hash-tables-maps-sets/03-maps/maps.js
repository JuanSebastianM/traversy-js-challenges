const nameMap = new Map([
  [1, 'Hello'],
  [2, 'world'],
  [3, 'really true']
])


console.log('------ GET ---------');
console.log(nameMap.get(true));

nameMap.set('name', 'Juan')

console.log({nameMap});

console.log(nameMap.has('holaa'));

nameMap.delete(1)

nameMap.forEach((value, key) => console.log({key, value}))

console.log(
nameMap.keys().next().value);