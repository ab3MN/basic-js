const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor() {
    this.alphabet = '';
    this.tabulaRecta = [];
  }
  generateTabulaRecta(alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    this.alphabet = alphabet.split('');
    for (let i = 0; i < alphabet.length; i++) {
      let row = alphabet.slice(i);
      row += alphabet.slice(0, i);
      this.tabulaRecta.push(row);
    }
  }

  repeatString(firstString, secondString) {
    if (firstString.length > secondString.length) {
      secondString += secondString;
      return this.repeatString(firstString, secondString);
    }
    return secondString.slice(0, firstString.length);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let newKey = this.repeatString(message, key);
    this.generateTabulaRecta();

    for (let it = 0; it < message.length; it++) {
      let i = this.alphabet.indexOf(message[it].toUpperCase());
      let j;
      if (i === -1) {
        result += ' ';
      } else {
        j = this.alphabet.indexOf(newKey[it].toUpperCase());
        result += this.tabulaRecta[i][j];
      }
    }
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
