import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EntriesContainer from './containers/EntriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import EntryShow from './components/EntryShow'
import NavBar from './components/NavBar'
import About from './components/About'
import { fetchEntries } from './actions/entryActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SignupInput from './components/SignupInput'
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom'
import SoundtrackArt from './components/SoundtrackArt';

class App extends Component {
 componentDidMount = () => {
        this.props.fetchEntries()
    }

  render() {

    return (
      
        <div className="app"> 
          
            <Route path="/" component={WelcomeContainer} />
            <Route exact path="/signup" component={SignupInput} />
            <Route path="/soundtrack" component={SoundtrackArt} />
            <Route path="/entries" render={() => <div><NavBar /><EntriesContainer entries={this.props.entries}/> </div> }/>
            <Route path={`/entries/:entryId`} render={routerProps => <EntryShow {...routerProps} entries={this.props.entries} />}/>
            <Route exact path="/about" component={About} />
          
        </div>

    );
  }
}



const mapStateToProps = (state) => {

  return {entries: state.entries}

}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEntries}, dispatch)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))


