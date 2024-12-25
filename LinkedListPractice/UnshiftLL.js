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

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }
}

let llobj = new LinkedList(1);
llobj.unshift(2);
console.log(llobj);
