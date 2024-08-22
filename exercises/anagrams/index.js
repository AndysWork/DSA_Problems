// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution one
// function anagrams(stringA, stringB) {
//   const aCharMap = getCharMap(cleanString(stringA));
//   const bCharMap = getCharMap(cleanString(stringB));

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
//     return false;
//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }
//   return true;
// }

// function getCharMap(str) {
//   let chars = {};
//   for (const char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   return chars;
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase();
// }

//Solution two
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
