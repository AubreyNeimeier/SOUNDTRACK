import React, { Component } from 'react';

 class SignupInput extends Component{
 
    render() {

        return (
            <div>
                <h1> THIS IS OUR SIGNUPINPUT </h1>
            </div>
        )
    }

}

export default SignupInput
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated