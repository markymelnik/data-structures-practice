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
// Linked List Implementation
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

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  size() {
    if (!this.head) return 0;
    return this.size;
  }

  head() {
    if (!this.head) return null;
    return this.head;
  }

  tail() {
    if (!this.head) return null;

    let tail = this.head;

    while (tail.next) {
      tail = tail.next
    }
    return tail;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;
    this.size--;
    return this.head;
  }

  shift() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.size--;
    return this.head;
  }

  at(index) {

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index){
        return current;
      }
      count++;
      current = current.next;
      
    }
    return null;
  }

  contains(element) {

    let current = this.head;

    while (current) {
      if (current.element === element) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  indexOf(element) {

    let current = this.head;
    let count = 0;

    while (current) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  toString() {

    let current = this.head;
    let string = '';

    while (current) {
      string += `( ${current.element} ) -> `;
      current = current.next;
    }
    string += `null`;
    output.textContent = string;
  }

  insertAt(index, element) {

    let newNode = new Node(element);
    let current = this.head;
    let previous = null;
    let count = 0;

    if (!this.head) {
      if (index != 0) {
        return;
      } else {
        this.head = newNode;
      }    
    }

    if (this.head != null && index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    while (count < index) {
      previous = current;
      current = current.next;

      if (current == null) {
        break;
      }
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this.size++;

  }

  removeAt(index) {

    let current = this.head;
    let previous = null;
    let count = 1;

    if (index < 0) return null;
    
    if (index == 0) {
      this.head = current.next;
      this.size--;
    } else {
      while (count != index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
      this.size--;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);