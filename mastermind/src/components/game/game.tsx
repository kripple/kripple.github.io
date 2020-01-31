import React, { Component } from 'react';
import Token from 'components/token/token';
import Sequence from 'components/sequence/sequence';
import NewGameButton from 'components/newGameButton/newGameButton';
import { connect } from 'react-redux'
import { newGame } from 'config/actions'

import 'components/game/game.css';
import { GameState } from 'components/game/game.state';
import { Dispatch } from 'redux';

type GameProps = StateProps & DispatchProps;
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

class Game extends Component<GameProps, never> {
  render() {
    return (
      <div className="game">
        <header className="game-header">
          <Sequence
            sequence={this.props.sequence}
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
            onClick={this.props.newGame}
          />
        </header>
      </div>
    )
  };
}
 
const mapStateToProps = (state: GameState) => {
  return {
    sequence: state.sequence
  }
}
 
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    newGame: () => { dispatch(newGame()) }
  }
}

export default connect<StateProps, DispatchProps, GameProps, GameState>(
  mapStateToProps,
  mapDispatchToProps
)(Game)

// Step 1: Generate random color token, make into react component
// Step 2: Create button to randlomly generate color token
// Step 3: Generate random sequence of 4 tokens