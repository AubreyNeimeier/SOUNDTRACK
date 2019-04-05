//this is good but we don't want to save data to the store... we want to post to our rails API 



  export default function sessionsReducer(state = {session: []}, action) {
    
    switch(action.type) {
      
      case 'LOGIN_WITH_CREDENTIALS':
        
        return {...state, session: [...state.session, action.payload.username]}
      case 'LOGIN_WITH_OAUTH':

      case 'LOGOUT':
        return { session:[] }

    default: return state
      
    }

    
  }
  //left off researching how to redirect in an action after proper authentication (session contains username)