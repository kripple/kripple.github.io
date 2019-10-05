// At the beginning of the game, there are some number of cards on the board that are all face
// down, i.e., their symbol is not visible and all the cards look exactly the same.

// In a turn:
// The player turns over one card. The card’s symbol is now visible.
// The player turns over a second card. This card’s symbol is now visible.
// If the two cards’ symbols match, the cards remain face up.
// If the two card’s symbols do not match, the player is given some time to observe
// them, then they are flipped back over face down.
// Obviously, card symbols all come in pairs.

let symbolsId = "symbols";
let symbolId = "symbol";

let symbols = getWrappedSymbols([
  "&spades;",
  "&clubs;",
  "&hearts;",
  "&diams;",
  "&#9825;", // hearts
  "&#9826;", // diamonds
  "&#9828;", // spades
  "&#9831;" // clubs
]);

symbols = symbols.concat(symbols);
shuffle(symbols)

function getWrappedSymbols(strings) {
  let wrappedSymbols = [];
  strings.forEach(string => {
    wrappedSymbols.push("<div class=\"aspect-ratio-wrapper\"><div class=\"symbol-container\"><div class=\"" + symbolId + "\">" + string + "</div></div></div>");
  });
  return wrappedSymbols;
}

let symbolsContainer = document.getElementById(symbolsId);

symbolsContainer.innerHTML = symbols.join("\n");






