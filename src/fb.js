import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtfiGDMmruIV1T90sfvTnoW5EzWiTCtnQ",
    authDomain: "todo-project-1ecb9.firebaseapp.com",
    databaseURL: "https://todo-project-1ecb9.firebaseio.com",
    projectId: "todo-project-1ecb9",
    storageBucket: "todo-project-1ecb9.appspot.com",
    messagingSenderId: "1097546673227",
    appId: "1:1097546673227:web:940df73e3e60c0ebbbf1ce",
    measurementId: "G-03QQ69Q0RG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;