class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
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
}
let llobj = new LinkedList(1);
llobj.pushNode(2);
llobj.pushNode(3);
llobj.pushNode(4);
llobj.pushNode(5);
console.log(llobj);
let val = llobj.getNode(-1);
console.log(val);
