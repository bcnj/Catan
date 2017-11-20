import React, { Component } from 'react'
import IndividualRoom from '../components/IndividualRoom'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
// import firebase from 'APP/fire'

class Lobby extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   db.collection('games')
  //   .onSnapshot(docs => {
  //     docs.forEach(doc => {
  //       this.setState({allGames: [...this.state.allGames, doc.data()]})
  //     })
  //   })
  // }

  // componentDidMount() {
  //   this.props.firebase.set('games', {here: 'is a value'})
  //   this.props.firebase.set('catan', {here: 'is a value'})
  // }

  render() {
    console.log(typeof this.props.firebase.database)
    console.log(this.props.firebase)
    console.log(this.props.firebase.data)

    return (
    <div>
      {/* <IndividualRoom allGames={this.props.allGames} /> */}
      hello
    </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  firebase: state.firebase
})

const fbLobby = firebaseConnect(['catan'])(Lobby)
export default connect(mapState)(fbLobby)

// export default firebaseConnect()(Lobby)