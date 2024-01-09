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