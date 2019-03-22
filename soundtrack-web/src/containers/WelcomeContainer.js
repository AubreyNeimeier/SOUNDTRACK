import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../actions/sessionActions';
// import EntryInput from '../components/EntryInput'

import LoginInput from '../components/LoginInput'


class WelcomeContainer extends Component{

// handleChange = () => {
//     this.props.fetchEntries()
// }


    render() {

        return (
            <div>
                <LoginInput login={this.props.login}/>     
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     // debugger
//     return {entries: state.entries}

// }

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapDispatchToProps)(WelcomeContainer)
