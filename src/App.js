import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import ListPage from './containers/ListPage';
import DetailPage from './containers/DetailPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              component={ListPage} />
            <Route 
              path="/:characterName" 
              exact
              component={DetailPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
