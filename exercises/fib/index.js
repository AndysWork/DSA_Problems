// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// function fib(n) {
//   let a = 0;
//   let b = 1;
//   let c = 0;
//   if (n === 1) return n;
//   for (let i = 1; i <= n - 1; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// }

//Solution 2

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const element = result[i - 2] + result[i - 1];
//     result.push(element);
//   }

//   return result[n];
// }

//Solution 3

// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

//Solution 4 - Memoization

function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
