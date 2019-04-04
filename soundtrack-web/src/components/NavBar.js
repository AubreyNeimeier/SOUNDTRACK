import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {


        return (
            <div className="Nav-Bar">
                <NavLink to="/" className="Nav-Bar-Item" > Home </NavLink>
                <NavLink to="/entries" className="Nav-Bar-Item" > Entries </NavLink>
                <NavLink to="entries/new" className="Nav-Bar-Item" > New Entry </NavLink>
                <NavLink to="/logout" className="Nav-Bar-Item" > Log Out </NavLink>   
                <NavLink to="/about" className="Nav-Bar-Item" > About </NavLink>         
            </div> 
        )
    }

export default NavBar
// {props.entry.date} 
// 
                