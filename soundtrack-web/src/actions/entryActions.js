import cuid from 'cuid';
export const cuidFn = cuid;
export function fetchEntries(){
    return dispatch =>{
      fetch('http://localhost:3001/entries')
        .then(resp => resp.json())
        .then(data => dispatch({type:'FETCH_ENTRIES', payload: data}))
    }
  }

  export const createEntry = entry => {
    console.log('C')
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            cuid: cuid(),
            date: new Date().toUTCString(),
            entry_text: entry.entryContent
       })
    }  
        return dispatch => {
            fetch(`http://localhost:3001/entries`, data)
            .then(response => response.json())
            .then(new_entry => {
              console.log('D')
              dispatch({
                type: 'CREATE_ENTRY',
                payload: new_entry
            })})
            .catch(err => err)
        }
        console.log('E')
    }

  export const createCloud = (cloud) => {
    return {
      type: "CREATE_CLOUD", 
      cloud
    }
  }




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
