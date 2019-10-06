class Deck {

  constructor(cards) {
    this.cards = cards.concat(cards);
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  toString() {
    let displayStrings = []
    this.cards.forEach(card => {
      displayStrings.push(card.toString());
    });
    return displayStrings.join("\n");
  }
}
