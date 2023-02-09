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

class BinaryTreeNode {
  constructor(element) {
    this.element = element;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArr);
  }

  buildTree(sortedArr) {
    if (sortedArr.length === 0) return null; // Base case
    const midpoint = Math.floor(sortedArr.length / 2);
    const newNode = new BinaryTreeNode(sortedArr[midpoint]);
    newNode.leftChild = this.buildTree(sortedArr.slice(0, midpoint));
    newNode.rightChild = this.buildTree(sortedArr.slice(midpoint + 1));
    return newNode; // Returns the level-0 root node of the balanced binary tree.
  }

  displayTree(currentNode = this.root, prefix = '', isLeft = true) {
    if (currentNode.rightChild !== null) {
      this.displayTree(currentNode.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${currentNode.element}`);
    if (currentNode.leftChild !== null) {
      this.displayTree(currentNode.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(element, currentNode = this.root) {
    if (currentNode === null) return new Node(element);
    if (currentNode.value === element) return;

    if (element < currentNode.element) {
      currentNode.leftChild = this.insert(element, currentNode.leftChild);
    } else {
      currentNode.rightChild = this.insert(element, currentNode.rightChild)
    }
    return currentNode;
  }

  remove(element, currentNode = this.root) {
    if (currentNode === null) return currentNode; // Base case.

    if (element < currentNode.element) {
      currentNode.leftChild = this.remove(element, currentNode.leftChild)
    } else if (element > currentNode.element) {
      currentNode.rightChild = this.remove(element, currentNode.rightChild);
    } else {
      if (currentNode.leftChild === null) {
        return currentNode.rightChild;
      } else if (currentNode.rightChild === null) {
        return currentNode.leftChild;
      }
      currentNode.element = this.inOrderSuccessor(currentNode.rightChild);
      currentNode.rightChild = this.remove(currentNode.element, currentNode.rightChild);
    }
    return currentNode;
  }

  inOrderSuccessor(currentNode) { // Helper function for this.remove method.
    let successorNode = currentNode.element;
    while (currentNode.leftChild != null) {
      successorNode = currentNode.leftChild.element;
      currentNode = currentNode.leftChild;
    }
    return successorNode;
  }

  levelOrder(callbackFn) {
    const queue = [this.root];
    const levelOrderList = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      callbackFn ? callbackFn(currentNode) : levelOrderList.push(currentNode.element);

      const enqueueList = [currentNode.leftChild, currentNode.rightChild].filter((element) => element);
      queue.push(...enqueueList);
    }
    if (levelOrderList.length > 0) return levelOrderList;
  }

  preorderTreeWalk(callbackFn, node = this.root, preorderList = []) { // Returns root key, left subtree keys, and right subtree keys in that order.
    if (node === null) return;

    callbackFn ? callbackFn(node) : preorderList.push(node.element);
    this.preorder(callbackFn, node.leftChild, preorderList);
    this.preorder(callbackFn, node.rightChild, preorderList);

    if (preorderList.length > 0) return preorderList;
  }

  inorderTreeWalk(callbackFn, node = this.root, inorderList = []) { // Returns left subtree keys, root key, and right subtree keys in that order.
    if (node === null) return;

    this.inorder(callbackFn, node.leftChild, inorderList);
    callbackFn ? callbackFn(node) : inorderList.push(node.element);
    this.inorder(callbackFn, node.rightChild, inorderList);

    if (inorderList.length > 0) return inorderList;
  }

  postorderTreeWalk(callbackFn, node = this.root, postorderList = []) { // Returns left subtree keys, right subtree keys, and root key, in that order.
    if (node === null) return;

    this.postorder(callbackFn, node.leftChild, postorderList,);
    this.postorder(callbackFn, node.rightChild, postorderList);
    callbackFn ? callbackFn(node) : postorderList.push(node.element);

    if (postorderList.length > 0) return postorderList;
  }

  recursiveFind(element, currentNode = this.root) {
    if (currentNode.element === element || currentNode === null) return currentNode; // Base case. Continue calling the find method on the correct subtrees until the node containing (or not containing) that element is returned.  If the current element matches the parameter element that is to be found, return the node containing that element. If the element does not exist, return null.

    if (element < currentNode.element) { // If the parameter element is less than the current, call the find method recursively on the left subtree.
      return this.recursiveFind(element, currentNode.leftChild)
    } else { // Else call the find method recursively on the right subtree.
      return this.recursiveFind(element, currentNode.rightChild);
    }
  }

  iterativeFind(element, currentNode = this.root) { 
    while (currentNode.element !== element && currentNode != null) { // While the current element is not equal to the parameter element AND it is a valid element...
      element < currentNode.element ? currentNode = currentNode.leftChild : currentNode = currentNode.rightChild; // ..ff the parameter element is less than the element in the current node, assign the left child of that node as the new current node which will undergo the same comparison; else, assign the right child of that node as the new current node which will undergo the same comparison.
    }
    return currentNode; // When the while loop exits, signifying that either the element exists OR it does not, return the node containing that element or null, respectively.
  }

  height(currentNode = this.root) {
    if (currentNode === null) return 0;

    let leftHeight = this.height(currentNode.leftChild);
    let rightHeight = this.height(currentNode.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(element, currentNode = this.root, edgeCount = 0) {
    if (currentNode === null) return;
    if (currentNode.element === element) return edgeCount;

    if (element < currentNode.element) {
      return this.depth(element, currentNode.leftChild, edgeCount + 1);
    } else {
      return this.depth(element, currentNode.rightChild, edgeCount + 1);
    }
  }

  
  
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const bbt = new BinaryTree(arr);
bbt.buildTree(arr);