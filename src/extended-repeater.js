const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  /* ==================== OPTIONS ==================== */
  const repeatTimes = options?.repeatTimes ?? 1;
  const additionRepeatTimes = options?.additionRepeatTimes ?? 1;
  const addition = options?.addition ?? '';
  const separator = options?.separator ?? '+';
  const additionSeparator = options?.additionSeparator ?? '|';

  /* ==================== ADDITIONS ==================== */
  const additions = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    additions.push(addition);
  }
  const additionsString = additions.join(additionSeparator);

  /* ==================== RES ==================== */
  const res = [];
  for (let j = 0; j < repeatTimes; j++) {
    res.push(str + additionsString);
  }
  return res.join(separator);
}

module.exports = {
  repeater,
};
