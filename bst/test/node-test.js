const assert = require('chai').assert;

const createNode = require('../lib/node');

describe('createNode', () => {

  it('returns an object', () => {
    assert.typeOf(createNode('some data'), 'object');
  });

  it('creates a node with a data property', () => {
    assert.property(createNode('some data'), 'data');
  });

  it('creates a node with a left property', () => {
    assert.property(createNode('some data'), 'left');
  });

  it('creates a node with a right property', () => {
    assert.property(createNode('some data'), 'right');
  });

});
