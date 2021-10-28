class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
    //otherwise search for the correct spot for the new Node.
    let current = this.root;
    while(current) {
      if(val < current.val) {
        if(current.left === null) {
          current.left = new Node(val);
          return this
        } else {
        current = current.left
        }
      } else if (val > current.val) {
        if(current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
        current = current.left
      }
    }
  }
}
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }

    if(val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.left)
      }
    } else {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
      return this.insertRecursively(val, current.right)
  }
}

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;
    if(val === current.val) {
      return current;
    }

    while (current && !found) {
      if(val < current.val) {
        current = current.left
    } else if( val > current.val) {
        current = current.right
    } else {
      found = true;
    }
    }
    if(!found) return undefined
    return current;
  }
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root = null) return undefined
    
    if (current.val === val) {
      return current;
    }
    if(val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    } else {
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
