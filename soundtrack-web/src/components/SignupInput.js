import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SoundtrackArt from './SoundtrackArt';
import { signup } from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

 class SignupInput extends Component{
 
    state = {
        username: "",
        password: "",
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()        
        this.props.signup(this.state)
        // debugger
        // if(this.state.session){
        //     history.push('/entries')
        // }
    }
    render() {

        return (
            <div>
                    <SoundtrackArt />
                <div class="center-flex">
                    <p> Sign Up to save journal entries </p>
                    <form onSubmit={this.handleSubmit}>
                            <label>Username</label><input type="text"  name="username" />
                            <label>Password</label><input type="password"  name="password" />
                            <label>Full Name</label><input type="text"  name="name" />
                            <input type="submit" value="Sign Up" />
                        </form>

                        <NavLink to="/"> Login </NavLink>
                </div>
            </div>
        )
    }

}



const mapDispatchToProps = dispatch => bindActionCreators({signup}, dispatch)

export default connect(null, mapDispatchToProps)(SignupInput)

//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated