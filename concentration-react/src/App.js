import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AuthorCredit from './AuthorCredit/AuthorCredit';

function App() {
  return (

    //     <img src={logo} className="App-logo" alt="logo" />

    //       Edit <code>src/App.js</code> and save to reload.

    <div className="container">
      <div className="centered-container">
        <div id="symbols"></div>
        <AuthorCredit></AuthorCredit>


      </div>
    </div>
  );
}

export default App;
