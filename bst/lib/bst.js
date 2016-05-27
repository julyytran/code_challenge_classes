'use strict';

const _ = require('lodash');
const createNode = require('./node');

class BinarySearchTree {
  constructor(data) {
    this.root = createNode(data);
  }

  append(data) {
    this.right = data;
    return this.right;
  }
}

module.exports = BinarySearchTree;
