import React from 'react';
import Token from './token';
import NewGameButton from './newGameButton';
import { connect } from 'react-redux'
import { newGame } from '../state/actions'

import './game.css';

function Game() {
  return (
    <div className="game">
      <header className="game-header">
        <Token />
        <NewGameButton />
      </header>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = { newGame }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

// Step 1: Generate random color token, make into react component
// Step 2: Create button to randlomly generate color token
// Step 3: Generate random sequence of 4 tokens