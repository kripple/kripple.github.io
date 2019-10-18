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
      return `<div id="${index}" class="${CONTAINER} ${HIDDEN}"><div class="${SYMBOL}"></div></div>`
    } else if (!this.faceUp) {
      return `<div id="${index}" class="${CONTAINER} ${FACE_DOWN}"><img class="${SYMBOL}" src="images/${this.symbol}.png" nopin="nopin"></div>`
    } else {
      return `<div id="${index}" class="${CONTAINER}"><img class="${SYMBOL}" src="images/${this.symbol}.png" nopin="nopin"></div>`
    }
  }

  isMatch(card) {
    return this.symbol === card.symbol;
  }
}