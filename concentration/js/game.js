class GameController {

  constructor(container, containers) {
    this.container = container;
    this.containers = containers;
    this.newGame();
  }

  newGame() {
    this.cards = this.createCards(POKEMON);
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
    if (this.deck.twoCardsAreFaceUp()) { return }
    this.flipCard(cardId);

    if (this.deck.oneCardIsFaceUp()) { return }
    let cards = this.deck.getFaceUpCards();
    setTimeout(() => {
      this.checkForMatch(cards);
      this.checkForWin();
    }, ONE_SECOND);
  }

  checkForWin() {
    if (this.deck.allCardsMatched()) {
      this.displayWinMessage();
    }
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

  displayWinMessage() {
    this.container.innerHTML = `
      ${this.container.innerHTML} 
      <div class="win-message">You Win!</div>
      <button id="new-game-button" type="button">New Game</button>
    `;
    document.getElementById("new-game-button").addEventListener('click', (event) => this.newGame());
  }
}

