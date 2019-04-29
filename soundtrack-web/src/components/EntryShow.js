import React from 'react'

import NavBar from './NavBar';


const EntryShow = ( {match, entries} ) => {
    const id = Number(match.params.entryId)
    const entry = entries.entries.find(obj => obj.id === id)
    
   return(
       <div>
       <NavBar />
        <div className="past-entry-box" >         
            <h1>{entry.date}</h1> 
            <hr/>
            <p> {entry.entry_text} </p>
        </div>
        </div>
                  
   )
    }

export default EntryShow
       