  export const login = state => {
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
        return dispatch => {
            fetch(`http://localhost:3001/sessions`, data)
            .then(response => response.json())
            .then(session_info => dispatch({
                type: 'LOGIN_WITH_CREDENTIALS',
                payload: session_info
            }))
            .catch(err => err)
        }
        
    }

  // export const addEntry = (entry) => {
  //   return {
  //     type: "ADD_ENTRY", 
  //     entry
  //   }
  // }




// const baseUrl = 'http://localhost:3005/api/v1'

// export const fetchTodos = () => {
//   let data = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': sessionStorage.jwt
//     }
//   }

//   return dispatch => {
//     fetch(`${ baseUrl }/todos`, data)
//       .then(response => response.json())
//       .then(todos => dispatch({
//           type: 'FETCH_TODOS',
//           payload: todos
//       }))
//       .catch(err => err)
//   }
// }
