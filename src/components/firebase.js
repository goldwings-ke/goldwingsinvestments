import firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
     apiKey: "AIzaSyBfWoNBt4gG7ObGsipuGI1gMSnzjaA9Anw",
    authDomain: "goldwingsevents-65a24.firebaseapp.com",
    databaseURL: "https://goldwingsevents-65a24.firebaseio.com",
    projectId: "goldwingsevents-65a24",
    storageBucket: "goldwingsevents-65a24.appspot.com",
    messagingSenderId: "227976863125",
    appId: "1:227976863125:web:d79968896ead3909b0ea9c",
    measurementId: "G-4DWZT10ST3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;