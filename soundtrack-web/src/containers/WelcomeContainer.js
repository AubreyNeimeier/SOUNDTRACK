import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../actions/sessionActions';
// import EntryInput from '../components/EntryInput'

import LoginInput from '../components/LoginInput'
import SignupInput from '../components/SignupInput'



class WelcomeContainer extends Component{

// handleChange = () => {
//     this.props.fetchEntries()
// }


    render() {

        return (
            <div className="center-flex">
                <LoginInput login={this.props.login}/>  
                <SignupInput />   
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {}

}

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
