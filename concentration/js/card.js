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

  toString() {
    if (this.matched) {
      return "<div class=\"aspect-ratio-wrapper\"><div class=\"symbol-container hidden\"><div class=\"" + SYMBOL_ID + "\"></div></div></div>"
    } else if (!this.faceUp) {
      return "<div class=\"aspect-ratio-wrapper\"><div class=\"symbol-container face-down\"><div class=\"" + SYMBOL_ID + "\"></div></div></div>"
    } else {
      return "<div class=\"aspect-ratio-wrapper\"><div class=\"symbol-container\"><div class=\"" + SYMBOL_ID + "\">" + this.symbol + "</div></div></div>"
    }
  }
}