import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBbwinBm_z4EB9jxKPWM78mhoxVkc0cRsA",
    authDomain: "story-hub-23481.firebaseapp.com",
    databaseURL: "https://story-hub-23481.firebaseio.com",
    projectId: "story-hub-23481",
    storageBucket: "story-hub-23481.appspot.com",
    messagingSenderId: "481705549360",
    appId: "1:481705549360:web:e311416553b8860ecf97f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();