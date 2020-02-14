import * as GameActions from 'state/actions';
import { COLORS, getRandomColors } from 'util/colors';
import { NUM_TOKENS_IN_SEQUENCE } from 'util/settings';
import { GameState } from 'state/game.state';

const initialState: GameState = {
  solution: getRandomColors(COLORS, NUM_TOKENS_IN_SEQUENCE),
  guesses: [],
  gameIsWon: false
}

export const reducer = (state: GameState = initialState, action: GameActions.Types): GameState => {
  switch (action.type) {
    case GameActions.NEW_GAME:
      return {
        ...initialState,
        solution: action.payload
      }
    case GameActions.SUBMIT_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.payload]
      }
    case GameActions.WIN_GAME:
      return {
        ...state,
        gameIsWon: true
      }
    default:
      return state;
  }
};


 