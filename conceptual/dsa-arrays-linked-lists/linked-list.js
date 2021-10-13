/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if there is no head to the list yet, make newNode the head of the list.
    if(this.head === null) {
      this.head = newNode;
    }

    // if there is a tail to the list, place newNode after the tail.
    if(this.tail !== null) {
      this.tail.next = newNode;
    }

    //change the new tail to be the newNode we just pushed
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    let poppedTail = this.tail;
    let current = this.head;
    while(current.next !== null) {
      if (current.next === poppedTail) {
        current.next === null;
      }
    }
    return poppedTail;
  }

  /** shift(): return & remove first item. */

  shift() {
    let headToRemove = this.head;
    headToRemove.next = this.head;
    
    return headToRemove;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let current = this.head;
    while(current !== null) {
      if(current = idx) {
        return count
      }
      current = current.next;
      count ++
    }
    return new Error('Invalid Index');
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
