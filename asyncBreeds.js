const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      callback(undefined);
    }
    console.log("In readFile's Callback: it has the data.");


    if (!error) callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};



//Driver Code
// const printCatBreed = function(breed) {
//   console.log('Return Value ', breed);
// }

// // breedDetailsFromFile('Bombay', printCatBreed)


module.exports = breedDetailsFromFile;
