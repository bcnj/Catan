import firebase from 'firebase'
// import 'firebase/firestore' // add this to use Firestore

export const config = {
  apiKey: 'AIzaSyDZEQfSWwPb_RyJ060TRQrLgZEhOskmBZ8',
  authDomain: 'catan-45cf4.firebaseapp.com',
  databaseURL: 'https://catan-45cf4.firebaseio.com/',
  projectId: 'catan-45cf4',
  storageBucket: 'catan-45cf4.appspot.com',
  messagingSenderId: '387625127091'
}

firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))
// firebase.firestore()

module.exports = firebase
// databaseURL: "catan-45cf4",
// databaseURL: 'https://catan-45cf4.firebaseio.com/',