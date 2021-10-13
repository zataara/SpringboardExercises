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
  
  /* _get(idx): retrieve node at idx */
  _get(idx) {
    let current = this.head;
    let count = 0;

    while(current !== null && count != idx) {
      count += 1;
      current = current.next
    }
    return current
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if there is no head to the list yet, make newNode the head of the list.
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    // if there is a tail to the list, place newNode after the tail.
    else  {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;


  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if(this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    if(this.length === 0) {
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this._get(idx);
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let previous = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next =previous.next;
    previous.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // If idx is first item
    if(idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if(this.length < 2) {
        this.tail = this.head;
        return val;
      }
    }

    let previous = this._get(idx - 1);

    // Special case: remove tail
    if(idx === this.length - 1) {
      let val = previous.next.val;
      previous.next = null;
      this.tail = previous;
      this.length -= 1;
      return val
    }

    //normal case: remove in the middle of list

    let val = previous.next.val;
    previous.next = previous.next.next;
    this.length -= 1;
    return val;



  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while(current) {
      total += current.val;
      current = current.next
    }
    return total / this.length
  }
}

module.exports = LinkedList;
