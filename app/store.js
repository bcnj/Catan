import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { reduxFirestore, firestoreReducer } from 'redux-firestore'
// import firebase from 'firebase'
// import 'firebase/firestore' // add this to use Firestore
import firebase from 'APP/firebase'
import {config} from '../fire'
import rootReducer from './reducers'

const rrfConfig = {userProfile: 'users'}
// firebase.initializeApp(config) // <- new to v2.*.*

const store = createStore(
  rootReducer,
  // initialState,
  compose(
    reactReduxFirebase(firebase, rrfConfig), // pass in firebase instance instead of config
    // reduxFirestore(firebase) // <- needed if using firestore
   //  applyMiddleware(...middleware) // to add other middleware
   applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase) // allows our thunks to have access to getFirebase
//      createLogger({ collapsed: true })
    ),
  )
 )

export default store

