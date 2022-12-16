const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present when we look horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present when we look horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D', 'L'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G', 'L'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B', 'L'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I', 'L'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S', 'L'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});

describe("#wordSearch()", function() {
  it("should return false if the word is not present when we look vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present when we look vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});

it("should return false if the array is empty", function() {
  const result = wordSearch([
    [],
    [],
    [],
    [],
    [],
  ], 'SEINFELD')
  console.log('\n*****result:****\n', result);

  assert.isFalse(result);
});

