let testSymbols = ["A", "B", "C", "D"];
let cards = controller.createCards(testSymbols);
let deck = new Deck(cards);
controller.deck = deck;
controller.updateView();
