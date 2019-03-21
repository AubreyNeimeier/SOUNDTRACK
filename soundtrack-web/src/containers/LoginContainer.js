import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchEntries, createEntry } from '../actions/entryActions';
// import EntryInput from '../components/EntryInput'

import LoginInput from '../components/LoginInput'
 class EntriesContainer extends Component{
    
    // handleChange = () => {
    //     this.props.fetchEntries()
    // }
   

    render() {
   
        return (
            <div>
                <LoginInput  login={this.props.login}/>     

            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     // debugger
//     return {entries: state.entries}

// }

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
