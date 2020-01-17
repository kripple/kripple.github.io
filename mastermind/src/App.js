import React from 'react';
import logo from './logo.svg';
import Token from './components/token';
import './App.css';
import './components/token.css';

let token = new Token();
token.randomize();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={`App-logo ${token.color.className}`}></div>
      </header>
    </div>
  );
}

export default App;
