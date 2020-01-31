import { getRandomArrayElement, getRandomSequence } from 'util/random';
import Token from 'components/token/token';
import { NEW_GAME } from 'config/actions';
import { Action } from 'redux';

const initialState = {
  color: getRandomArrayElement(Token.COLORS),
  sequence: getRandomSequence(Token.COLORS,4)
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        sequence: getRandomSequence(Token.COLORS,4)
      }
    default:
      return state;
  }
};
 