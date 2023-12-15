const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (!date) return "Unable to determine the time of year!";
    date.getTimezoneOffset();
    const _date = date.toString().slice(4, 7);
    if (["Jan", "Feb", "Dec"].includes(_date)) return "winter";
    if (["Mar", "Apr", "May"].includes(_date)) return "spring";
    if (["Jun", "Jul", "Aug"].includes(_date)) return "summer";
    if (["Sep", "Oct", "Nov"].includes(_date)) return "autumn";
  } catch (e) {
    throw new Error("Invalid date!");
  }
}


module.exports = {
  getSeason,
};
