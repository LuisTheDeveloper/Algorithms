const colors = require("colors");

// Whats is a Linked List?
// A linked list is a linear data structure similar to an array.
// However, unlike arrays, elements are not stored in a particular memory location or index.
// Rather each element is a separate object that contains a pointer or a link to the next object in that list.
// Each element (commonly called nodes) contains two items: the data stored and a link to the next node.
// The data can be any valid data type.
//
// Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
// Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
// It uses more memory than arrays because of the storage of the pointers.
//
// Types of Linked lists:
// - Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.
// - Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
// - Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.
//
// Source: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size = () => {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  };

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  insertFirstNode(data) {
    let newNode = new SinglyListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  insertLastNode(data) {
    let newNode = new SinglyListNode(data);
    newNode.next = null;
    let lastNode = this.getLast();
    lastNode.next = newNode;
    return newNode;
  }
}

class SinglyListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new SinglyListNode(2);
let node2 = new SinglyListNode(5);
let node3 = new SinglyListNode(9);

node1.next = node2;
//node2.next = node3;

let list = new SinglyLinkedList(node1);

console.log("Show the LinkedList".bgBlue);
console.log(list);

console.log(`List Size: ${list.size()}`);
console.log("List First Node:".bgBlue);
console.log(list.getFirst());

console.log("List Last Node:".bgBlue);
console.log(list.getLast());

console.log("Inserting New Node At The Beginning".bgBlue);
list.insertFirstNode(9);
console.log("Show the LinkedList".bgBlue);
console.log(list);

console.log("List First Node:".bgBlue);
console.log(list.getFirst());

console.log("List Last Node:".bgBlue);
console.log(list.getLast());

console.log("Inserting New Node In The End".bgBlue);
console.log(list.insertLastNode(10));
console.log("Show the LinkedList".bgBlue);
console.log(list);

console.log("List First Node:".bgBlue);
console.log(list.getFirst());
