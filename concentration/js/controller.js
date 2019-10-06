let cards = createCards(SYMBOLS);
let deck = new Deck(cards);

deck.shuffle();

function createCards(symbols) {
  let cards = []
  for (i = 0; i < symbols.length; i++) {
    cards[i] = new Card(symbols[i])
  }
  return cards;
}