import { TEST } from './actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case TEST:
      return {
          ...state,
          test: action.payload
      }
    default:
      return state;
  }
};