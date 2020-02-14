import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { store } from 'state/store'

import Game from 'components/gameBoardComponent/gameBoard.component';
import * as serviceWorker from 'serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

ReactDOM.render(
    <Provider store={store}>
      <Game 
        solution={[]}
        guesses={[]}
        gameIsWon={false}
      />
    </Provider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// selectors:
// getGuessResults
// numCorrectColor
// numCorrectPosition
// currentRow
// guessIsCorrect
// gameIsOver

// display components:
// token
// sequence 
// game board
// guess (sequence)
// solution (sequence)
// game row
// guess results
