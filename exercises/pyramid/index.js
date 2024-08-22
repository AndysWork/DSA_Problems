// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution One

// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let stairs = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       stairs +=
//         midPoint - row <= column && midPoint + row >= column ? "#" : " ";
//     }
//     console.log(stairs);
//   }
// }

//Solution Two - Recursion

function pyramid(n, row = 0, level = "") {
  if (n === row) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1, "");
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  const add =
    midPoint - row <= level.length && midPoint + row >= level.length
      ? "#"
      : " ";
  pyramid(n, row, level + add);
}

module.exports = pyramid;
