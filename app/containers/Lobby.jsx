import React, { Component } from 'react'
import IndividualRoom from '../components/IndividualRoom'
import firebase from 'APP/fire'
import 'firebase/firestore'

const db = firebase.firestore()

export default class Lobby extends Component {
  constructor() {
    super()
    this.state={
      allGames: []
    }
  }

  componentDidMount() {
    db.collection('games')
    .onSnapshot(docs => {
      docs.forEach(doc => {
        this.setState({allGames: [...this.state.allGames, doc.data()]})
      })
    })
  }

  render() {
    return (
    <div>
      <IndividualRoom allGames={this.state.allGames} />
    </div>
    )
  }
}
