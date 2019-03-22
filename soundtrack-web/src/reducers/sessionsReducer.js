//this is good but we don't want to save data to the store... we want to post to our rails API 


const initialState = {
    session: []
  }
  
  export default function sessionsReducer(state = initialState, action) {
  
    switch(action.type) {
     

        case 'LOGIN_WITH_CREDENTIALS':
            
          return {...state, session: action.payload.username}
      default: return state
      
    }
    console.log(state)
    //isn't console.logging here
    //we need to check the state
  }
  //left of defining case and add_entry - need to combine reducers as well and define in index.js