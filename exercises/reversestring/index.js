// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let stringArray = str.split("");
//   let reverseArray = [];
//   function addToArray(array) {
//     if (array.length > 0) {
//       reverseArray.push(array.pop());
//       addToArray(array);
//     }
//     return;
//   }
//   addToArray(stringArray);
//   return reverseArray.join("");
// }

// function reverse(str) {
//   let reverseString = "";

//   for (let character of str) {
//     reverseString = character + reverseString;
//   }
//   return reverseString;
// }

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
