import React from 'react';
import Sequence from './sequence';
import NewGameButton from './newGameButton';
import { connect } from 'react-redux'
import { newGame } from '../state/actions'

import './game.css';

function Game(props) {
  return (
    <div className="game">
      <header className="game-header">
        <Sequence
          sequence={props.sequence}
        />
        <NewGameButton
          onClick={props.newGame}
        />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sequence: state.sequence
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame() {
      dispatch(newGame());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

// Step 1: Generate random color token, make into react component
// Step 2: Create button to randlomly generate color token
// Step 3: Generate random sequence of 4 tokens