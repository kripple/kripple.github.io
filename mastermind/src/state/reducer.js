import { getRandomArrayElement } from '../components/random';
import Token from '../components/token';
import { NEW_GAME } from './actions';

const initialState = {
  color: getRandomArrayElement(Token.COLORS)
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        color: getRandomArrayElement(Token.COLORS)
      }
    default:
      return state;
  }
};
 