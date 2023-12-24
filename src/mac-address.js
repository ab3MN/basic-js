const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n !== 'string') return false;
  if (n.length !== 17) return false;

  let isValiable = true;
  const address = n.split('-');

  address.forEach((el) => {
    if (el.length !== 2) {
      isValiable = false;
      return;
    }

    let vailiable = el
      .split('')
      .every((el) => /[0-9]/.test(el) || /[A-Fa-f]/.test(el));

    if (!vailiable) {
      isValiable = false;
    }
  });
  return isValiable;
}
module.exports = {
  isMAC48Address,
};
