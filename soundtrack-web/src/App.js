import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EntriesContainer from './containers/EntriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import EntryShow from './components/EntryShow'


import { BrowserRouter, Route, withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> 
          <Route  exact={true} path="/" component={WelcomeContainer} />
          <Route  exact={true} path="/entries" component={EntriesContainer}/>
          <Route path={`/fake/13`} render={routerProps => <EntryShow {...routerProps} />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);


