const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCountOfCharacters = (str) =>
  str.split("").reduce((acc, character) => {
    !(character in acc) ? (acc[character] = 1) : (acc[character] += 1);
    return acc;
  }, {});

function getCommonCharacterCount(s1 = "", s2 = "") {
  let total = 0;
  const firstCharacters = getCountOfCharacters(s1);
  const secondCharacters = getCountOfCharacters(s2);
  for (key in firstCharacters) {
    if (key in firstCharacters && key in secondCharacters) {
      total += Math.min(firstCharacters[key], secondCharacters[key]);
    }
  }
  return total;
}

module.exports = {
  getCommonCharacterCount,
};
