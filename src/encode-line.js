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
  if (str.length === 0) return str;
  let encode = 1;
  let encodeLine = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i + 1]
      ? (encode += 1)
      : ((encodeLine += encode + str[i]), (encode = 1));
  }
  return encodeLine.replaceAll(1, "");
}

module.exports = {
  encodeLine,
};
