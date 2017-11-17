import firebase from 'APP/fire'
const db = firebase.database()
const dbRef = db.ref().child('data') // root reference to my realtime databse
// ref() get you to the root of the database, when you can .child you create a child node and from here we can store every value we need

const speedRef = dbRef.child('speed') // created reference out to speed
speedRef.on('value', snap => {
  this.setState({
    speed: snap.val()
  })
}) // realtime listner
// on method is what allows us to synchronize data in real time, and we always attach it onto a reference that point to a spot in our database
// essentially what we are saying is every time data changes at the location of speed, provides the callback function that returns us a new set of data
// every time data is updated at the location of speed, we'll get this update in the callback function and we can take that data and call setState
// real time database is great at sychronize data across different devices
// we can create a reference out to a specific location and a real time listner, and every single time we get a new set of data from the real-time database, we can call this.setState with that new data
// 'value' is event type
// snap is data snapshot

this.database.push().set({ noteContent: note })
