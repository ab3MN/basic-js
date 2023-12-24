const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = Math.log(2) / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const _sampleActivity = Number.parseFloat(sampleActivity);
  if (
    Number.isNaN(_sampleActivity) ||
    _sampleActivity <= 0 ||
    _sampleActivity >= 15
  )
    return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / _sampleActivity) / k);
}

module.exports = {
  dateSample,
};
