import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeiRonFoQtQtlrOmCWxVBs9DMyPDrUNjU",
  authDomain: "book-santa-2645c.firebaseapp.com",
  databaseURL: "https://book-santa-2645c.firebaseio.com",
  projectId: "book-santa-2645c",
  storageBucket: "book-santa-2645c.appspot.com",
  messagingSenderId: "483259276360",
  appId: "1:483259276360:web:febe816fdac551e6250c7d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
