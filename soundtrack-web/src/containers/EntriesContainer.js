import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchEntries, createEntry } from '../actions/entryActions';
import EntryInput from '../components/EntryInput'


import EntryList from '../components/EntryList'

// does fetchEntries import correctly? 

 class EntriesContainer extends Component{

    componentDidMount = () => {
        this.props.fetchEntries()
    }
    
    // handleChange = () => {
    //     this.props.fetchEntries()
    // }
   

    render() {
   
        return (
            <div>
                <EntryInput  createEntry={this.props.createEntry}/>
                {/* <button onClick={this.handleChange}>CLICK HERE FOR ENTRY LIST</button > */}
                <EntryList entries={this.props.entries} /> 

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // debugger
    return {entries: state.entries}

}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEntries, createEntry}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(EntriesContainer)
