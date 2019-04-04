import React from 'react'
import { Link } from 'react-router-dom'
const EntryPreview = (props) => {


        return (
            <div id={props.entry.id} className="past-entry-box-content" >
            
            <Link className="Entry-Link" to={`/entries/${props.entry.id}`}>{props.entry.date}</Link>
            <hr/>
            <p className="past-entry-box-text" > {props.entry.entry_text} </p>
           
            </div>

           
        )
    }

export default EntryPreview
// {props.entry.date} 
// 
                