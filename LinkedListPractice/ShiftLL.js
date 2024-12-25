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
}

let llobj = new LinkedList(1);
llobj.unshift(2);
llobj.unshift(3);
let temp = llobj.shiftValue();
console.log(temp);
console.log(llobj);
