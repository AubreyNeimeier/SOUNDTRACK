import React from 'react'

const EntryShow = ( {match, entries} ) => {
    
    const id = Number(match.params.entryId)
    
    const entry = entries.entries.find(obj => obj.id == id)
    
    // const entry = findObjectByKey(entries.entries, 'id', id)
    
   return(
       
       
        <div className="past-entry-box" >
                
            <h1>{entry.date}</h1> 
            <hr/>
            <p> {entry.entry_text} </p>
    
        </div>
    
               
   )
    }

export default EntryShow
// {props.entry.date} 
// 

// import React from 'react'

// const EntryShow = ({match, entries}) => {
//     debugger

//         return (
            
//             <div id={entries[match.params.entryId]} className="past-entry-box">
            
//             <h1>>{entries[match.params.entryId.date]}</h1> 
//             <hr/>
//             <p> {entries[match.params.entryId.entry_text]} </p>
           
//             </div>

           
//         )
//     }

// export default EntryShow
// // {props.entry.date} 
// // 
                