class Controller {

  constructor(container, containers) {
    this.container = container;
    this.containers = containers;
    this.cards = this.createCards(SYMBOLS_LIST);
    this.deck = new Deck(this.cards);
    this.deck.shuffle();
    this.updateView();


  }

  updateView() {
    this.container.innerHTML = this.deck;
    this.addEventListeners();
  }

  createCards(symbols) {
    let cards = []
    for (let i = 0; i < symbols.length; i++) {
      cards[i] = new Card(symbols[i])
      cards[i + symbols.length] = new Card(symbols[i])
    }
    return cards;
  }

  addEventListeners() {
    for (let i = 0; i < this.containers.length; i++) {
      if (this.isFaceDown(this.containers[i])) {
        this.containers[i].addEventListener('click', (event) => this.onClick(event.target.id));
      }
    }
  }

  onClick(cardId) {
    this.flipCard(cardId);
    if (this.deck.onlyOneCardIsFaceUp()) { return }

    let cards = this.deck.getFaceUpCards();
    setTimeout(() => {
      this.checkForMatch(cards);
    }, ONE_SECOND);
  }

  checkForMatch(cards) {
    this.isMatch(cards) ? this.setMatched(cards) : this.setFaceDown(cards);
  }

  flipCard(cardId) {
    this.deck.cards[cardId].flip();
    this.updateView();
  }

  isMatch(cards) {
    if (cards.length !== 2) { return false }
    return cards[0].isMatch(cards[1])
  }

  setMatched(cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].match();
    }
    this.updateView();
  }

  setFaceDown(cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].flip();
    }
    this.updateView();
  }

  isFaceDown(container) {
    for (let i = 0; i < container.classList.length; i++) {
      if (container.classList[i] === FACE_DOWN) {
        return true;
      }
    }
    return false;
  }

}

