const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members = []) {
  if (!Array.isArray(members)) {
    return false;
  }
  const _members = members
    .reduce((acc, member = "") => {
      const firstLetter = [...acc];
      if (typeof member !== "string") return;
      else if (member.trim().length === 0) return false;

      firstLetter.push(member.trim().charAt(0).toUpperCase());
      return firstLetter;
    }, [])
    .sort()
    .join("");
  return _members;
}

module.exports = {
  createDreamTeam,
};
