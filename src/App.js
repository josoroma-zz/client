import React, { Component } from 'react';

import logo from './_assets/logo.png';
import './App.css';

import {ApolloProvider} from 'react-apollo';

import AppClient from './_config/AppClient';

import AppMenu from './components/AppMenu';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={AppClient}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Apollo Client</h2>
          </div>

          <p className="App-intro">
            GraphQL Walkthrough
          </p>

          <AppMenu />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
