import React from 'react';
import Token from './token';
import NewGameButton from './newGameButton';
import { connect } from 'react-redux'
import { newGame, NEW_GAME } from '../state/actions'

import './game.css';

function Game(props) {
  console.log(props);
  return (
    <div className="game">
      <header className="game-header">
        <Token 
          color={props.color}
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
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame() {
      dispatch({type: NEW_GAME});
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