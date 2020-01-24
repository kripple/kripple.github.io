import React from 'react';
import Token from 'components/token/token';
import Sequence from 'components/sequence/sequence';
import NewGameButton from 'components/newGameButton/newGameButton';
import { connect } from 'react-redux'
import { newGame } from 'config/actions'

import 'component/game/game.css';
import { GameState } from 'components/game/game.state';
import { GameProps } from 'components/game/game.props';

function Game(props: GameProps) {
  return (
    <div className="game">
      <header className="game-header">
        <Sequence
          sequence={props.sequence}
        />
    
        <Token 
            color="transparent"
        />
        <Token 
            color="transparent"
        />
        <Token 
            color="transparent"
        />
        <Token 
            color="transparent"
        />
     
        <NewGameButton
          onClick={props.newGame}
        />
      </header>
    </div>
  );
}

const mapStateToProps = (state: GameState) => {
  return {
    sequence: state.sequence
  }
}

const mapDispatchToProps = (dispatch: Function) => {
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