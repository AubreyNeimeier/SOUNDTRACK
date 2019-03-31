//this is good but we don't want to save data to the store... we want to post to our rails API 


const initialState = {
    session: []
  }
  
  export default function sessionsReducer(state = initialState, action) {

    switch(action.type) {
      case 'LOGIN_WITH_CREDENTIALS':
        return {...state, session: action.payload.username}
      case 'LOGIN_WITH_OAUTH':

    default: return state
      
    }

    
  }
  //left off researching how to redirect in an action after proper authentication (session contains username)