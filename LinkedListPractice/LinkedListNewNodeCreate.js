class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  gethead() {
    console.log("head: "+this.head.value);
  }

  getTail() {
    console.log("tail: "+this.tail.value);
  }
}

let linkedListObj = new LinkedList(11);
linkedListObj.gethead();
linkedListObj.getTail();
