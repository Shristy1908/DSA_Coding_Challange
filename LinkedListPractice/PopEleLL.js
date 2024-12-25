class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.length = 1;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  pushNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  popNode() {
    let temp = this.head;
    let prev = this.head;

    // if no node
    if (!this.head) {
      return undefined;
    }

    //2 or more node
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;

    //one node
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

let linkedListObj = new LinkedList(1);
// linkedListObj.pushNode(2);
// linkedListObj.pushNode(3);
// linkedListObj.pushNode(4);
// linkedListObj.pushNode(5);
// linkedListObj.popNode();

// console.log(linkedListObj);
