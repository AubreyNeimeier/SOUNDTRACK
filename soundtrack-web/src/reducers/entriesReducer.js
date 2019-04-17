//this is good but we don't want to save data to the store... we want to post to our rails API 

import cuid from 'cuid';
export const cuidFn = cuid;
const initialState = {
    entries: [],
    session: ""
  }
  
  export default function entriesReducer(state = initialState, action) {
  
    switch(action.type) {
      // case 'ADD_ENTRY':
      // // debugger
      //   const new_entry = {
      //       cuid: cuid(),
      //       date: new Date().toUTCString(),
      //       entry_text: action.entry
      //   }
      //   let newState = {...state, entries: [...state.entries, new_entry]}

      //   return newState 

      case 'FETCH_ENTRIES':
         
          return {...state, entries: action.payload}

        // case 'SHOW_MY_ENTRIES':
        //   return {...state, entries: action.payload, session: action.payload}
          
      default: return state
      
    }
    
  }
  //left of defining case and add_entry - need to combine reducers as well and define in index.js

