import { getRandomArrayElement, getRandomSequence } from '../components/random';
import Token from '../components/token';
import { NEW_GAME } from './actions';

const initialState = {
  color: getRandomArrayElement(Token.COLORS),
  sequence: getRandomSequence(Token.COLORS,4)
}

export const reducer = (state = initialState, action) => {
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
 