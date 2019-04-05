// //syntax to use 
import { combineReducers } from 'redux'

import entriesReducer from './entriesReducer'
import sessionsReducer from './sessionsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  entries: entriesReducer,
  sessions: sessionsReducer,
  users: usersReducer
})

export default rootReducer
