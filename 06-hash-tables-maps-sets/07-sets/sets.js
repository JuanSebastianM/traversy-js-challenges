const nameSet = new Set(['hello', 'world', 'Juan', 'Dani'])

nameSet.add('Pipe')
nameSet.add('PipeDos')

console.log({size: nameSet.size});
console.log({values: nameSet.values()});
console.log({nameSet});

for (const name of nameSet) {
  console.log({name});
}

console.log({arrayNew: Array.from(nameSet)});

nameSet.clear();

console.log({newSize: nameSet.size});
console.log({newnameSet: nameSet});