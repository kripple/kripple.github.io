import React, { Component } from 'react';
import { SequenceComponent } from 'components/sequenceComponent/sequence.component';
import { ButtonComponent } from 'components/buttonComponent/button.component';
import { connect } from 'react-redux'
// import { newGame } from 'state/actions'

import 'components/gameBoardComponent/gameBoard.component.css';
import { GameState } from 'state/game.state';
import { Dispatch } from 'redux';
import { initialSequence } from  'util/sequence';
import { NUM_GUESSES } from 'util/settings';

// type GameProps = StateProps & DispatchProps;
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

class Game extends Component<GameState, never> {
  render() {
    return (
      <div className="game">
        <header className="game-header">
          <SequenceComponent
            sequence={this.props.solution}
          />

          {[...Array(NUM_GUESSES)].map((value: undefined, index: number) => {
            return (<SequenceComponent key={index} sequence={initialSequence()} />);
          })}

          
          <ButtonComponent
            displayText={"New Game"}
          />
        </header>
      </div>
    )
  };
}
 
const mapStateToProps = ( state: GameState ) => state;
 
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // newGame: (payload: Array<string>) => { dispatch(new newGame(payload)) }
  }
}

export default connect<StateProps, DispatchProps, GameState, GameState>(
  mapStateToProps,
  mapDispatchToProps
)(Game)
