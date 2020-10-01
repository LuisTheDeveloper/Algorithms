class Node {
  constructor(key) {
    this.key = key; // the value for each node
    this.parent = null; // the parent that the node belongs to
    this.height = 0; // the height of the current node. ****Each node has a height of at least 1 plus the height of it's tallest child.
    this.size = 1; // the number of nodes that are children/grandchildren of the current node. Each node will have a size of at least 1 plus the size of it's children combined.
    this.depth = 0; // how far removed the node is from the tree's root.
    this.left = null; // left child of the node.
    this.right = null; // right child of the node.
  }
}

class Tree {
  constructor(key) {
    var node = new Node(key);
    this.root = node;
  }

  // Get the Height of the tree, R is this.root
  getHeight = (node) => {
    if (node === null) {
      return -1;
    } else {
      return (
        1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
      );
    }
  };

  // R is this.root
  find = (k, R) => {
    if (R.key === k) {
      return R;
      // If less than root key and left child is not null
    } else if (k < R.key) {
      if (R.left) {
        return this.find(k, R.left);
      }
      return R; // If no left child, return place
    } else if (k > R.key) {
      // If greater than root key
      if (R.right) {
        // If right child is not null
        return this.find(k, R.right);
      }
      return R; // If no right child, return place
    }
  };

  insert = (k) => {
    var P = this.find(k, this.root); // Find place to insert node
    var node = new Node(k);
    node.parent = P; // Set parent
    node.parent.size++;

    // If new value is greater than place, set parent's right child to new node
    // else set parent's left child to new node
    P && k > P.key ? (P.right = node) : (P.left = node);

    return node; // Return new node
  };

  remove = (key) => {
    this.root = this.removeNode(this.root, key);
  };

  removeNode = (node, key) => {
    if (node === null) {
      return null;
    } else if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children minumum node of the rigt subtree is stored in aux
      var aux = this.findMinNode(node.right);
      node.key = aux.key;

      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  };

  //  finds the minimum node in tree searching starts from given node
  findMinNode(node) {
    // if left of a node is null then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  recomputeSize = (N) => {
    var size = 1;
    // If node has left child add size of left child
    if (N.left) {
      size += N.left.size;
    }

    // If node has right child add size of right child
    if (N.right) {
      size += N.right.size;
    }
    N.size = size; // Set node's size equal to size variable
  };

  // This is a method to "walk" trough a tree starting in most left node, going to the parent and then right node
  inOrder = (node) => {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.key);
      this.inOrder(node.right);
    }
  };

  // AKA as PreOrder, starts in the root then visit the left node and next the right node.
  levelOrder = (node) => {
    if (node !== null) {
      console.log(node.key);
      this.levelOrder(node.left);
      this.levelOrder(node.right);
    }
  };

  // Start with the left node then visit the right node and next the parent node.
  postOrder = (node) => {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key);
    }
  };

  getRootNode = () => {
    return this.root;
  };

  nextNode = (N) => {
    if (!N.key) {
      var N = this.find(N, this.root);
    }
    // If right child exists, get descendant else get ancestor
    return N.right ? this.leftDescendant(N.right) : this.rightAncestor(N);
  };

  leftDescendant = (N) => {
    // If no left child, return Node  else find descendant of left child
    return !N.left ? N : this.leftDescendant(N.left);
  };

  rightAncestor = (N) => {
    if (N.parent) {
      // If parent is not null and node's key is less than parent's key return parent else find ancestor of parent
      return N.key < N.parent.key ? N.parent : this.rightAncestor(N.parent);
    }
  };
}

let bst = new Tree(50);
console.log("Inserting Nodes to the Tree...");
bst.insert(25);
bst.insert(75);
bst.insert(10);
bst.insert(30);
bst.insert(60);
bst.insert(80);
bst.insert(55);
bst.insert(65);

const root = bst.getRootNode();
//bst.inorder(root);
//console.log("Removing a node from the Tree...");
//bst.remove(55);
console.log("InOrder Traversal:");
bst.inOrder(root);
console.log(`Height is: ${bst.getHeight(root)}`);
//console.log(bst.find(60, root));
console.log("Level Order Traversal:");
bst.levelOrder(root);
console.log("Post Order Traversal:");
bst.postOrder(root);
