//this is good but we don't want to save data to the store... we want to post to our rails API 



  export default function sessionsReducer(state = [], action) {
    //  debugger
    switch (action.type) {
      
      case 'LOGIN_WITH_CREDENTIALS':  
        // var newState = Object.assign({}, state, {username: action.payload.username} ) 
      
        return [...state, {username: action.payload.username}]

      case 'LOGIN_WITH_OAUTH':
        return state

       default: 
        return state   
    }

  }
  //left off researching how to redirect in an action after proper authentication (session contains username)