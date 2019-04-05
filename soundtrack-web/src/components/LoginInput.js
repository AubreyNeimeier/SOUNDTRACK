import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

 class LoginInput extends Component{
    state = {
        username: "",
        password: "", 

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()        
        this.props.login(this.state)
    }
    render() {

        if (this.state.session) {
            return <Redirect to='/entries'/>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label><input type="text"  name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label><input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default LoginInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated