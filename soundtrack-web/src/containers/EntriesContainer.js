import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createEntry } from '../actions/entryActions';
import EntryInput from '../components/EntryInput'

import EntryListPreview from '../components/EntryListPreview'
import SoundtrackArt from '../components/SoundtrackArt';
import NavBar from '../components/NavBar';
import { Route } from 'react-router-dom'


// does fetchEntries import correctly? 

 class EntriesContainer extends Component{

    // componentDidMount = () => {
    //     this.props.fetchEntries()
    // }
    
    // handleChange = () => {
    //     this.props.fetchEntries()
    // }
   

    render() {
        debugger
        return (

            <div>
                {/* <h1> Welcome {this.props.user.username} </h1> */}
            
                <div className="center-flex">
                    <NavBar />
                    <SoundtrackArt />
                    <EntryInput  createEntry={this.props.createEntry}/>
                    {/* <Route exact path="/entries/new" component={()=> <EntryInput createEntry={this.props.createEntry}/>}/> */}
                    {/* <button onClick={this.handleChange}>CLICK HERE FOR ENTRY LIST</button > */}
                    <EntryListPreview entries={this.props.entries} /> 
                
                    
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {entries: state.entries}

}

const mapDispatchToProps = dispatch => bindActionCreators({ createEntry }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)

{/* <Route path={`/fake/13`} render={routerProps => <EntryShow {...routerProps} entries={this.props.entries}/>}/> */}
