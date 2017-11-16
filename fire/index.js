const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyCo-yJ8t7bC_56xtljcsEeXChP4Xd6XHnA',
  authDomain: 'catan-3b533.firebaseapp.com',
  databaseURL: 'https://catan-3b533.firebaseio.com',
  projectId: 'catan-3b533',
  storageBucket: 'catan-3b533.appspot.com',
  messagingSenderId: '46460710910',
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
