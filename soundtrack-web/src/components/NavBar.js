import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {


        return (
            <div>
                <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: "bold", color: "red" }}> Home </NavLink>
                <NavLink to="/entries" activeClassName="selected" activeStyle={{fontWeight: "bold", color: "red" }}> Entries </NavLink>
                <NavLink to="entries/new" activeClassName="selected" activeStyle={{fontWeight: "bold", color: "red" }}> New Entry </NavLink>
                <NavLink to="/logout" activeClassName="selected" activeStyle={{fontWeight: "bold", color: "red" }}> Log Out </NavLink>           
            </div> 
        )
    }

export default NavBar
// {props.entry.date} 
// 
                