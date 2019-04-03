import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EntriesContainer from './containers/EntriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import EntryShow from './components/EntryShow'


import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div> 
          <Switch>
            <Route  exact path="/" component={WelcomeContainer} />
            <Route  exact path="/entries" component={EntriesContainer}/>
            <Route path={`/entries/:entryId`} render={routerProps => <EntryShow {...routerProps} />}/>
          </Switch>
        </div>

    );
  }
}

export default withRouter(App);


