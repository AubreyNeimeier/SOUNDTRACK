import React from 'react'

const EntryShow = ({match}) => {
    
   return(
       <div>
       <h1> THIS IS ENTRY SHOW COMPONENT </h1>
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
                