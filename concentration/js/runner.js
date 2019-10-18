// At the beginning of the game, there are some number of cards on the board that are all face
// down, i.e., their symbol is not visible and all the cards look exactly the same.

// In a turn:
// The player turns over one card. The card’s symbol is now visible.
// The player turns over a second card. This card’s symbol is now visible.
// If the two cards’ symbols match, the cards remain face up.
// If the two card’s symbols do not match, the player is given some time to observe
// them, then they are flipped back over face down.
// Obviously, card symbols all come in pairs.

let controller = new Game(
  document.getElementById(GAME_BOARD),
  document.getElementsByClassName(CONTAINER)
);
