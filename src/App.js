import React, { Component } from 'react';

// Styles
import './App.css';
// Assets
import logo from './logo.png';
// Components
import AppNav from './AppNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Apollo Client</h2>
        </div>

        <p className="App-intro">
          GraphQL Walkthrough
        </p>

        <AppNav />
      </div>
    );
  }
}

export default App;
