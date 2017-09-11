import React, { Component } from 'react';

import logo from './_assets/logo.png';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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

import './App.css';
import styles from './App.ui.css';

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  static defaultProp = {
    classes: []
  };

  render() {
    const { classes } = this.props;

    return (
      <ApolloProvider client={ AppGraphQLClient }>
        <BrowserRouter>
          <div className="App">
            <Card className={ classes.card }>
              <CardContent>
                <div className="App-header">
                  <img src={ logo } className="App-logo" alt="logo"/>
                </div>

                <Typography type="body1" className={ classes.title }>
                  React Apollo Client
                </Typography>
                <Typography type="headline" component="h2">
                  GraphQL Walkthrough
                </Typography>

                <Switch>
                  <Route exact path="/" component={ Posts }/>
                  <Route path="/post/:id" component={ Post }/>
                  <Route component={ NotFound }/>
                </Switch>
              </CardContent>
            </Card>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default withStyles(styles)(App);
