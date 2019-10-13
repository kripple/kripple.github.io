let testSymbols = ["zubat", "pidgey", "pikachu", "venonat"];
let cards = controller.createCards(testSymbols);
let deck = new Deck(cards);
controller.deck = deck;
controller.updateView();
