export const signup = state => {
    
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            username: state.username,
            password: state.password,
            name: state.name
       })
    }  
        return dispatch => {
            fetch(`http://localhost:3001/users`, data)   
            .then(response => response.json())
            .then(user_info => dispatch({
                type: 'CREATE_USER',
                payload: user_info
            }))
            // .then(dispatch(push('/entries')))
            .catch(err => err)
        }
        
    }

    