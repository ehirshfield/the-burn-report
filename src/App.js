import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from './Parser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the BURN REPORT</h2>
        </div>
        <Parser />
      </div>
    );
  }
}

export default App;
