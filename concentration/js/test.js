let testSymbols = ["zubat", "pidgey", "pikachu", "venonat"];
let cards = controller.createCards(testSymbols);
let deck = new Deck(cards);
controller.deck = deck;
controller.updateView();

// testAllCardsMatched();

function testAllCardsMatched() {
  console.log(`expect allCardsMatched = false: ${controller.deck.allCardsMatched()}`);
  controller.deck.cards.forEach((card) => {
    card.matched = true;
  });
  console.log(`expect allCardsMatched = true: ${controller.deck.allCardsMatched()}`);
}


