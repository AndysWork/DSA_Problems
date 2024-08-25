// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    // let temp = this.head;
    // this.head = null;
    // this.head = temp.next;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    return prevNode;
  }

  insertLast(item) {
    const newNode = new Node(item);
    // Solution one

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (!this.head.next) {
      this.head.next = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;

    // ALternate Solution
    // const last = this.getLast();

    // if (last) {
    //   last.next = newNode;
    // } else {
    //   this.head = newNode;
    // }
  }

  getAt(index) {
    if (index < 0) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentIndex++;
      currentNode = currentNode.next;
    }
    return null;
  }

  removeAt(index) {
    if (index < 0) {
      return null;
    }
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(item, index) {
    if (index < 0) {
      return null;
    }
    if (!this.head) {
      this.head = new Node(item);
      return;
    }

    if (index === 0) {
      this.head = new Node(item, this.head);
      return;
    }
    const prevNode = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(item, prevNode.next);
    prevNode.next = newNode;
    return;
  }

  forEach(fn) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      fn(currentNode, currentIndex);
      currentIndex++;
      currentNode = currentNode.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
