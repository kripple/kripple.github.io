import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from 'config/reducer';

export const store = createStore(
    reducer,
    composeWithDevTools()
  );
