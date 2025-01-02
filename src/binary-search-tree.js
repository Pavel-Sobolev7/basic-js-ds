const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  find(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (node === null) {
      return null;
    }
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    else if (data > node.data) {
      return this.search(node.right, data);

    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    return this.findMinNode(this.rootNode).data;
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  max() {
    return this.findMaxNode(this.rootNode).data;
  }

}

module.exports = {
  BinarySearchTree
};