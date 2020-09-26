// Unfinished - can't get tests to pass and need help further understanding the async control flow happening here.

const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');



describe('#breedDetailsFromFile', () => {

  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.\n"
      assert.equal(expectedDesc, bombay);
      done();
    });
  });

  it('should return undefined when given a invalid cat breed/filename', (done) => {
    breedDetailsFromFile('sphinx', (description) => {
      assert.equal(undefined, description);
      done();



    })




  })




});



