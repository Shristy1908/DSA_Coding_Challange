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

 reverse(){
    let temp=this.head;
     this.head=this.tail;
     this.tail=temp;
     let prev=null;
     let next=temp.next;
     for(let i=0;i<this.length;i++){
        next=temp.next;
        temp.next=prev;
        prev=temp;
        temp=next; 
     }
     return this;

 }

}

let llobj = new LinkedList(1);
llobj.pushNode(2);
llobj.pushNode(3);
llobj.pushNode(4);
llobj.pushNode(5);

llobj.reverse();
console.log(llobj);
