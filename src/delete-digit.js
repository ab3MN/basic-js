const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n + "";
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const head = str.slice(0, i);
    const tail = str.slice(i + 1, str.length);
    arr.push(+head + tail);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
