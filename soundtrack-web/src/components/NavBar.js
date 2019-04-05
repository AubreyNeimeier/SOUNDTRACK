import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom'
import { logout } from '../actions/sessionActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class NavBar extends Component{
    
    handleClick = (e) => {
        debugger
        e.preventDefault()        
        this.props.logout(this.props.history.push('/'))       
    }
    render(){
        return (
            <div className="Nav-Bar">
                <NavLink to="/" className="Nav-Bar-Item" > Home </NavLink>
                <NavLink to="/entries" className="Nav-Bar-Item" > Entries </NavLink>
                <NavLink to="entries/new" className="Nav-Bar-Item" > New Entry </NavLink>
                <NavLink className="Nav-Bar-Item" onClick={this.handleClick} > Log Out </NavLink>   
                {/* <NavLink to="/about" className="Nav-Bar-Item" > About </NavLink>          */}
            </div> 
        )
    }
    }
        
    const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(NavBar))
// {props.entry.date} 
// 
                