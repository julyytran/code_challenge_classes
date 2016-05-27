const assert = require('chai').assert;

const BinarySearchTree = require('../lib/bst');
const createNode = require('../lib/node');

describe('BinarySearchTree', () => {

  beforeEach(() => {
    this.root = new BinarySearchTree('root');
  });

  it('should return an object with a root', () => {
    assert.property(this.root, 'root');
  });

  describe('#append', () => {

    it('should put a node onto the end of the list', () => {
      this.root.append('3');

      assert.equal('3', this.root.right.data);
    });

  });
});
