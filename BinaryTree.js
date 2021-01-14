class Node {
  constructor(key) {
    this.key = key;
    this.height = 1; // the height of the current node. Each node has a height of at least 1 plus the height of it's tallest child.
    this.size = 1; // the number of nodes that are children/grandchildren of the current node. Each node will have a size of at least 1 plus the size of it's children combined.
    this.left = null;
    this.right = null;
  }

  insert(key) {
    if (key < this.key && this.left) {
      this.left.insert(key);
    } else if (key < this.key) {
      this.left = new Node(key);
    }

    if (key > this.key && this.right) {
      this.right.insert(key);
    } else if (key > this.key) {
      this.right = new Node(key);
    }
  }

  search(key) {
    if (this.key === key) {
      return this;
    }

    if (key < this.key && this.left) {
      return this.left.search(key);
    } else if (key > this.key && this.right) {
      return this.right.search(key);
    } else {
      return null;
    }
  }
}

let bst = new Node(10);
bst.insert(9);
bst.insert(6);
bst.insert(12);
console.log(bst);
console.log(bst.find(12));
//console.log(bst.search(16));
