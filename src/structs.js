class LinkedList {
  constructor() {
    this.head = new LinkedNode();
    this.tail = this.head;
  }
  
  push(data) {
    this.tail.data = data;
    this.tail.next = new LinkedNode();
    this.tail = this.tail.next;
  }
}

class LinkedNode {
  constructor(data = null, next = null) {
    this.data = data
    this.next = null                
  }
  
  clone () {
    return new LinkedListNode(this.data, this.next);
  }
}