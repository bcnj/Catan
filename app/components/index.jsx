import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import Lobby from './Lobby'
import Room from './Room'
import firebase from 'APP/fire'
const auth = firebase.auth()
import WhoAmI from './WhoAmI'

// Ensure that we have (almost) always have a user ID, by creating
// an anonymous user if nobody is signed in.
auth.onAuthStateChanged(user => user || auth.signInAnonymously())

export default () => (
  <Router>
    <div>
      <nav>
        <WhoAmI auth={auth}/>
      </nav>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/lobby' component={Lobby} />
        <Route path='/room/:roomId' component={Room} />
      </Switch>
    </div>
  </Router>
)
