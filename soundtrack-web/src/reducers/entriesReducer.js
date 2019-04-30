//this is good but we don't want to save data to the store... we want to post to our rails API 

import cuid from 'cuid';
export const cuidFn = cuid;
const initialState = {
  entries: [],
  clouds: []
  }
  
  export default function entriesReducer(state = initialState, action) {
   
    switch(action.type) {
      

      case 'FETCH_ENTRIES':
         
          return {...state, entries: action.payload}

        // case 'SHOW_MY_ENTRIES':
        //   return {...state, entries: action.payload, session: action.payload}
      
      case 'CREATE_CLOUD':
         

          return {...state, clouds: [...state.clouds, action.cloud.cloudContent]}

          
      default: return state
      
    }
    
  }
  //left of defining case and add_entry - need to combine reducers as well and define in index.js

