import React from 'react';
import Token from './components/token';
import NewGameButton from './components/newGameButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Token></Token>
        <NewGameButton></NewGameButton>
      </header>
    </div>
  );
}

export default App;

// Step 1: Generate random color token, make into react component
// Step 2: Create button to randlomly generate color token
// Step 3: Generate random sequence of 4 tokens