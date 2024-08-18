// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // first solution
  //   let chars = {};
  //   for (char of str) {
  //     chars[char] = chars[char] + 1 || 1;
  //   }
  //   const entries = Object.entries(chars);
  //   entries.sort((a, b) => b[1] - a[1]);
  //   const [highestKey, highestValue] = entries[0];
  //   return highestKey;

  //second solution

  //   let chars = {};
  //   let maxChar = "";
  //   let maxCount = 0;

  //   for (const char of str) {
  //     chars[char] = (chars[char] || 0) + 1;
  //     if (chars[char] > maxCount) {
  //       maxChar = char;
  //       maxCount = chars[char];
  //     }
  //   }
  //   return maxChar;

  // third solution
  let chars = {};
  let maxChar = "";
  let maxCount = 0;
  for (const char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  for (let char in chars) {
    if (chars[char] > maxCount) {
      maxChar = char;
      maxCount = chars[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
