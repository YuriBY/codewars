// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
//  A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let myArray = [];
    const maxLength = (nFloors - 1) * 2 + 1;
    for (let i = nFloors; i >= 1; i--) {        
        myArray.unshift(''.padEnd((maxLength - ((i - 1) * 2 + 1)) / 2, ' ') + ''.padEnd(((i - 1) * 2 + 1), '*') + ''.padEnd((maxLength - ((i - 1) * 2 + 1)) / 2, ' '));    }
    return myArray;
  };

console.log(towerBuilder(3));