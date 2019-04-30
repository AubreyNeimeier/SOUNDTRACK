import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import { logout } from '../actions/sessionActions'

class NavBar extends Component{
   
    render(){
        return (
            <div className="Nav-Bar">
                <NavLink to="/" className="Nav-Bar-Item" > Login/Signup Page </NavLink>
                <NavLink to="/entries" className="Nav-Bar-Item" > Entries </NavLink>
                
            </div> 
        )
    }
    }
        
   

export default NavBar
          