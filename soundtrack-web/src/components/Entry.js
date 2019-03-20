import React from 'react'

const Entry = props => {

        
        return (
            <div id={props.entry.id} className="past-entry-box">
            <h1> {props.entry.date} </h1> 
            <hr/>

            <p> {props.entry.entry_text} </p>
                
            </div>
        )
    }

export default Entry