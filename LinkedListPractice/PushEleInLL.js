class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    let nodeele = new Node(value);
    this.head = nodeele;
    this.tail = this.head;
    this.length = 1;
  }

  pushNode(value) {
    let secondNode = new Node(value);
    if (!this.head) {
      this.head = secondNode;
      this.tail = this.head;
    } else {
      this.head.next = secondNode;
      this.tail = secondNode;
    }
    this.length++;
    return this;
  }
}
let llobj = new LinkedList(1);
llobj.pushNode(2);
console.log(llobj);
