import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

 class SignupInput extends Component{
 
    render() {

        return (
            <div class="center-flex">
               <form onSubmit={this.handleSubmit}>
                    <label>Username</label><input type="text"  name="username" /><br></br>
                    <label>Password</label><input type="password"  name="password" />
                    <input type="submit" value="Login" />
                </form>

                <NavLink to="/"> Login </NavLink>
            </div>
        )
    }

}

export default SignupInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated