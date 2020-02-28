import React, { Component } from 'react';
import { RowComponent } from 'components/rows/row.component';
import { ButtonComponent } from 'components/buttons/button.component';
import { connect } from 'react-redux'
// import * as NewGameButton from 'components/buttons/newGame.button';
import { newGame, PayloadTypes } from 'state/actions'

import 'components/game/game.component.css';
import { GameState } from 'components/game/game.state';
import { Dispatch } from 'redux';
import { initialSequence } from  'util/sequence';
import { NUM_GUESSES } from 'util/settings';
import { createSolution, TOKEN_COLORS } from 'util/colors';
import { NUM_TOKENS_IN_SEQUENCE } from 'util/settings';

// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export interface GameProps { 
  newGame: (payload: PayloadTypes) => void
};

class Game extends Component<GameState & GameProps, never> {
  render() {
    return (
      <div className="game">
          <RowComponent
            sequence={this.props.solution}
          />

          {[...Array(NUM_GUESSES)].map((value: undefined, index: number) => {
            return (<RowComponent key={index} sequence={initialSequence()} feedback={initialSequence()}/>);
          })}
          
          <ButtonComponent
            displayText={"New Game"}
            dispatchOnClick={this.props.newGame}
            params={createSolution(TOKEN_COLORS, NUM_TOKENS_IN_SEQUENCE)}
          />
      </div>
    )
  };
}
 
const mapStateToProps = ( state: GameState ) => {
  return {
    solution: state.solution,
    guesses: state.guesses,
    gameIsWon: state.gameIsWon
  }
};
 
function mapDispatchToProps(dispatch: Dispatch): GameProps {
  return {
    newGame: (payload: Array<string>) => { dispatch(new newGame(payload)) }
  }
}

export default connect<GameState, {}, GameProps, GameState>(
  mapStateToProps,
  mapDispatchToProps
)(Game)
