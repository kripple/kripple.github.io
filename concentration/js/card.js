class Card {
  constructor(symbol) {
    this.symbol = symbol;
    this.faceUp = false;
    this.matched = false;
  }

  flip() {
    this.faceUp = !this.faceUp;
  }

  match() {
    this.matched = true;
    this.faceUp = false;
  }

  toString(index) {
    if (this.matched) {
      return `<div id="${index}" class="${SYMBOL_CONTAINER} ${HIDDEN}"><div class="${SYMBOL}"></div></div>`
    } else if (!this.faceUp) {
      return `<div id="${index}" class="${SYMBOL_CONTAINER} ${FACE_DOWN}"><div class="${SYMBOL}"></div></div>`
    } else {
      return `<div id="${index}" class="${SYMBOL_CONTAINER}"><img class="${SYMBOL}" src="images/${this.symbol}.png"></div>`
    }
  }

  isMatch(card) {
    return this.symbol === card.symbol;
  }
}