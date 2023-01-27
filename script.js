// Practice with Data Structures

const container = document.querySelector('.container');
const output = document.createElement('div');
output.classList.add('output');
container.append(output);

output.textContent = "Output";

//
// Stack Implementation
//

class Stack {

  constructor() { // Initializes a stack as an empty array.
    this.items = [];
  }

  push(element) { // Adds element to the top of the stack.
    this.items.push(element);
  }

  pop() { // Removes and returns the top element from the stack.
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() { // Returns the top element of the stack.
    return this.items[this.items.length - 1];
  }

  size() { // Returns the size of the stack.
    return this.items.length;
  }

  isEmpty() { // Returns true or false if the stack is non-empty or empty, respectively.
    return this.items.length == 0;
  }

  print() { // Returns a string in which all elements of the stack are concatenated.
    let output = '';
    for (let i = 0; i < this.items.length; i++) {
      output += this.items[i] + '';
    }
    return output;
    
  }
}

const stack = new Stack();

//
// Queue Implementation
//

class Queue {

  constructor() { // Initializes a queue as an empty array.
    this.items = [];
  }

  enqueue(element) { // Adds element to the end of the queue.
    this.items.push(element);
  }

  dequeue() { // Removes and returns the element at the start of the queue.
    return this.items.shift();
  }

  isEmpty() { // Returns true or false if the queue is non-empty or empty, respectively.
    return this.items.length === 0;
  }

  peek() { // Returns the top element of the queue if it is not empty; otherwise returns null.
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() { // Returns the size of the queue.
    return this.items.length;
  }

  print() { // Returns a string in which all elements of the queue are concatenated.
    let output = '';
    for (let i = 0; i < this.items.length; i++) {
      output += this.items[i] + '';
    }
    return output;

  }
}

const queue = new Queue();

//
// Linked List
//

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(element) {
    let newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
    this.size++;
  }

  prepend(element) {
    let newNode = new Node(element);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }
}

const linkedList = new LinkedList();