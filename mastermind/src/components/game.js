import React from 'react';
import Token from './token';
import NewGameButton from './newGameButton';

import './game.css';

function Game() {
  return (
    <div className="game">
      <header className="game-header">
        <Token></Token>
        <NewGameButton></NewGameButton>
      </header>
    </div>
  );
}

export default Game;

// Step 1: Generate random color token, make into react component
// Step 2: Create button to randlomly generate color token
// Step 3: Generate random sequence of 4 tokens