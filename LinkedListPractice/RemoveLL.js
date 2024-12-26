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

  pushNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
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

  shiftValue() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head.value;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (var i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  insert(value, index) {
    let newNode = new Node(value);
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.pushNode(value);
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.getNode(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  removeNode(index) {
    if (index == 0) return this.shiftValue();
    if (index == this.length - 1) return this.popNode();
    if (index < 0 || index >= this.length) return undefined;
    var temp;
    var prev = this.head;
    for (var i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let llobj = new LinkedList(1);
llobj.pushNode(2);
llobj.pushNode(3);
llobj.pushNode(4);
llobj.pushNode(5);

llobj.insert(6, 2);
console.log(llobj.removeNode(4).value);
