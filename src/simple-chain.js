const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const _value = `( ${value.toString()})`;
    this.getLength() !== 0
      ? (this.chain += "~~" + _value)
      : (this.chain += value);
    return this;
  },
  removeLink(position) {
    const head = this.chain.slice(0, position - 1);
    const tail = this.chain.slice(position, this.getLength());
    this.chain = head + tail;
    return this;
  },
  reverseChain() {
    this.chain.split("").reverse().join("");
    return this;
  },
  finishChain() {
    return this.chain;
  },
};

module.exports = {
  chainMaker,
};
