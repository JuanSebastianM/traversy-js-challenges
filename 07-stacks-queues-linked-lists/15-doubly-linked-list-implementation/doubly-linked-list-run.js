const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(100)
list.append(200)
list.append(300)
list.prepend(25)
list.append(400)
list.prepend(50)
list.insertAt(5, 75)

list.printAll();

const dataToBeSearched = 400;

console.log(`Contains ${dataToBeSearched}`, list.contains(dataToBeSearched));

console.log('remove last item, index 6', list.remove(6));

list.printAll();

console.log(`Contains ${dataToBeSearched}`, list.contains(dataToBeSearched));

console.log('get index',list.get(5));

