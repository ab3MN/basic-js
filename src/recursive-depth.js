const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.deep = [];
  }
  calculateDepth(arr) {
    console.debug(arr);
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 1) return 1;

    for (let el of arr) {
      if (Array.isArray(el)) {
        this.deep.push(this.getArrayCount(el));
      }
    }
    const deep = [...this.deep];
    this.deep = [];
    return deep.length === 0 ? 1 : Math.max(...deep);
  }
  getArrayCount(arr = [], count = 2) {
    let _count = count;

    for (let el of arr) {
      if (Array.isArray(el)) {
        _count += 1;
        return this.getArrayCount(el, _count);
      }
    }

    return _count;
  }
}

module.exports = {
  DepthCalculator,
};
