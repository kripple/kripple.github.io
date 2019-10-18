class Deck {

  constructor(cards) {
    this.cards = cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  allCardsMatched() {
    let allMatched = true;
    this.cards.forEach((card) => {
      if (!card.matched) {
        allMatched = false;
      }
    });
    return allMatched;
  }

  toString() {
    let displayStrings = []
    this.cards.forEach((card, index) => {
      displayStrings.push(card.toString(index));
      if (this.isLastCardInRow(index)) {
        displayStrings.push(NEWLINE);
      }
    });
    return displayStrings.join("\n");
  }

  numCardsFaceUp() {
    let count = 0;
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].faceUp) {
        count++;
      }
    }
    return count;
  }

  oneCardIsFaceUp() {
    return this.numCardsFaceUp() === 1;
  }

  twoCardsAreFaceUp() {
    return this.numCardsFaceUp() === 2;
  }

  getFaceUpCards() {
    let faceUpCards = [];
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].faceUp) {
        faceUpCards.push(this.cards[i]);
      }
    }
    return faceUpCards;
  }

  isLastCardInRow(index) {
    let position = index + 1;
    let numRows = this.getNumRows();
    return (position % numRows) === 0;
  }

  getNumRows() {
    return 4;
  }
}
