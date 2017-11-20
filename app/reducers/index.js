import { combineReducers } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import userReducer from './user-reducer'

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  user: userReducer,
})

export default rootReducer
