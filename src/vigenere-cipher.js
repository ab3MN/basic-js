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
  constructor(modification = true) {
    this.alphabet = '';
    this.tabulaRecta = [];
    this.modification = modification;
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
    let _secondString = secondString;
    while (_secondString.length < firstString.length) {
      _secondString += secondString;
    }
    for (let i = 0; i < firstString.length; i++) {
      const char = firstString[i].toUpperCase();

      if (!this.alphabet.includes(char)) {
        const head = _secondString.slice(0, i);
        const tail = _secondString.slice(i, firstString.length);
        _secondString = head + char + tail;
      }
    }

    return _secondString.slice(0, firstString.length);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    this.generateTabulaRecta();

    let result = '';
    let newKey = this.repeatString(message, key);

    for (let i = 0; i < message.length; i++) {
      let row = this.getCharIndex(message[i]);
      let col = this.getCharIndex(newKey[i]);

      if (row === -1) {
        result += message[i].toUpperCase();
      } else {
        result += this.tabulaRecta[row][col];
      }
    }
    return this.modification ? result : this.reverseString(result);
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    this.generateTabulaRecta();

    let result = '';
    let newKey = this.repeatString(message, key);

    for (let i = 0; i < message.length; i++) {
      let col = this.getCharIndex(newKey[i]);
      if (col === -1) {
        result += newKey[i];
      } else {
        let row = this.tabulaRecta[col].indexOf(message[i]);
        result += this.alphabet[row];
      }
    }
    return this.modification ? result : this.reverseString(result);
  }

  getCharIndex(char = '') {
    return this.alphabet.indexOf(char.toUpperCase());
  }
  reverseString(str) {
    return str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
