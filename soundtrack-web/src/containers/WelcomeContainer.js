import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../actions/sessionActions';
// import EntryInput from '../components/EntryInput'

import LoginInput from '../components/LoginInput'


import { NavLink } from 'react-router-dom'
import SoundtrackArt from '../components/SoundtrackArt';



class WelcomeContainer extends Component{



    render() {

        return (
            <div className="center-flex">
                <SoundtrackArt />
                <LoginInput login={this.props.login}/>  
                <NavLink to="/signup"> Sign Up </NavLink>
                
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(null, mapDispatchToProps)(WelcomeContainer)
