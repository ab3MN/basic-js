const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str = "") {
  const letters = str.split("").reduce((acc, letter) => {
    const letters = { ...acc };
    if (letter in letters) {
      letters[letter] += 1;
      return letters;
    }
    letters[letter] = 1;
    return letters;
  }, {});

  return Object.entries(letters)
    .map((el) => el[1] + el[0])
    .join("")
    .replace(1, "");
}

module.exports = {
  encodeLine,
};
