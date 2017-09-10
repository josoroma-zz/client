import React, { Component } from 'react';

import logo from './_assets/logo.png';
import './App.css';

import {ApolloProvider} from 'react-apollo';

import AppGraphQLClient from './_config/AppGraphQLClient';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={AppGraphQLClient}>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React Apollo Client</h2>
            </div>

            <p className="App-intro">
              GraphQL Walkthrough
            </p>

            <Switch>
              <Route exact path="/" component={Posts}/>
              <Route path="/post/:postId" component={Post}/>
              <Route component={ NotFound }/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
