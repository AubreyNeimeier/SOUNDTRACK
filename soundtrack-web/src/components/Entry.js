import React from 'react'
import { Link } from 'react-router-dom'
const Entry = props => {

        
        return (
            <div id={props.entry.id} className="past-entry-box">
            <h1><Link to={`/entries/${props.entry.id}`}> {props.entry.date} </Link></h1> 
            <hr/>

            <p> {props.entry.entry_text} </p>
                
            </div>
        )
    }

export default Entry