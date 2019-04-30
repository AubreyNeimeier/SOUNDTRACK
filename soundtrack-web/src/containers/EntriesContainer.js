import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createEntry, createCloud } from '../actions/entryActions';
import EntryInput from '../components/EntryInput'

import EntryListPreview from '../components/EntryListPreview'
import SoundtrackArt from '../components/SoundtrackArt';
import NavBar from '../components/NavBar';




 class EntriesContainer extends Component{


    render() {
        
        return (
                <div className="center-flex">
                    <NavBar />
                    <SoundtrackArt />
                    <EntryInput  createEntry={this.props.createEntry} createCloud={this.props.createCloud}/>
                    
                    <EntryListPreview entries={this.props.entries} clouds={this.props.entries.clouds}/>                     
                </div>

        )
    }

}

const mapStateToProps = (state) => {

    return {entries: state.entries}

}

const mapDispatchToProps = dispatch => bindActionCreators({ createEntry, createCloud }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)

