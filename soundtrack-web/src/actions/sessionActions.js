  //import { push } from 'react-router-redux'
  export const login = (state, callback) => {
    
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            username: state.username,
            password: state.password
       })
    }  
        return (dispatch) => {
            return fetch(`http://localhost:3001/sessions`, data)   
            .then(response => response.json())
            .then(session_info => {
              return dispatch({
                type: 'LOGIN_WITH_CREDENTIALS',
                payload: session_info.user
              })
              if(session_info.logged_in == true) callback()
            })
           
        }
    }

    // export const logout = (callback) => {
    
    //   let data = {
    //     method: 'GET',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   }  
    //       return dispatch => {
    //           fetch(`http://localhost:3001/logout`)   
    //           .then(response => response.json())
    //           .then(session_info => {
    //             dispatch({
    //               type: 'LOGOUT',
    //             })
    //             if(!!session_info.logged_in) callback()
    //           })
    //           // .then(dispatch(push('/entries')))
    //           .catch(err => err)
    //       }
          
    //   }
    



  // export const addEntry = (entry) => {
  //   return {
  //     type: "ADD_ENTRY", 
  //     entry
  //   }
  // }



