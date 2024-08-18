// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // first way
  //   let sign = Math.sign(n);
  //   let nAsString = sign === -1 ? n.toString().trimStart("-") : n.toString();
  //   let reverseString = nAsString.split("").reverse().join("").trimStart("0");

  //   return sign === -1 ? parseInt(`-${reverseString}`) : parseInt(reverseString);

  //second way
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;
