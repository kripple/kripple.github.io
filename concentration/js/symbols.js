const SYMBOLS = [
  "&spades;",
  "&clubs;",
  "&hearts;",
  "&diams;",
  "&#9825;", // hearts
  "&#9826;", // diamonds
  "&#9828;", // spades
  "&#9831;" // clubs
];

let wrappedSymbols = getWrappedSymbols([
  "&spades;",
  "&clubs;",
  "&hearts;",
  "&diams;",
  "&#9825;", // hearts
  "&#9826;", // diamonds
  "&#9828;", // spades
  "&#9831;" // clubs
]);

function getWrappedSymbols(strings) {
  let wrappedSymbols = [];
  strings.forEach(string => {
    wrappedSymbols.push("<div class=\"aspect-ratio-wrapper\"><div class=\"symbol-container\"><div class=\"" + SYMBOL_ID + "\">" + string + "</div></div></div>");
  });
  return wrappedSymbols;
}