import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createEntry } from '../actions/entryActions';
import EntryInput from '../components/EntryInput'
import EntryShow from '../components/EntryShow'
import { Route } from 'react-router-dom'
import EntryListPreview from '../components/EntryListPreview'

// does fetchEntries import correctly? 

 class EntriesContainer extends Component{

    // componentDidMount = () => {
    //     this.props.fetchEntries()
    // }
    
    // handleChange = () => {
    //     this.props.fetchEntries()
    // }
   

    render() {
  
        return (
            <div>
                <EntryInput  createEntry={this.props.createEntry}/>
                {/* <button onClick={this.handleChange}>CLICK HERE FOR ENTRY LIST</button > */}
                <EntryListPreview entries={this.props.entries} /> 
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // debugger
    return {entries: state.entries}

}

const mapDispatchToProps = dispatch => bindActionCreators({ createEntry }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(EntriesContainer)

{/* <Route path={`/fake/13`} render={routerProps => <EntryShow {...routerProps} entries={this.props.entries}/>}/> */}
