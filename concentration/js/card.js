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
  }

  toString(index) {
    if (this.matched) {
      return "<div class=\"aspect-ratio-wrapper\"><div id=\"" + index + "\" class=\"" + SYMBOL_CONTAINER + " hidden\"><div class=\"" + SYMBOL + "\"></div></div></div>"
    } else if (!this.faceUp) {
      return "<div class=\"aspect-ratio-wrapper\"><div id=\"" + index + "\" class=\"" + SYMBOL_CONTAINER + " face-down\"><div class=\"" + SYMBOL + "\"></div></div></div>"
    } else {
      return "<div class=\"aspect-ratio-wrapper\"><div id=\"" + index + "\" class=\"" + SYMBOL_CONTAINER + "\"><div class=\"" + SYMBOL + "\">" + this.symbol + "</div></div></div>"
    }
  }

  isMatch(card) {
    return this.symbol === card.symbol;
  }
}