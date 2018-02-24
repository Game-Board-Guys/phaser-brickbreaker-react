import React, { Component } from 'react';
import Breakout from './Phaser-Breakout/Breakout';
import './App.css';

class App extends Component {
  render() {
    Breakout();
    return (
      <div id="myCanvas">
      </div>
    );
  }
}

export default App;
