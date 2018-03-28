import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyASTYoSF5BDU1HyVoS9ikoOEeWML27y-Oo",
  authDomain: "w-irapp.firebaseapp.com",
  databaseURL: "https://w-irapp.firebaseio.com",
  projectId: "w-irapp",
  storageBucket: "w-irapp.appspot.com",
  messagingSenderId: "893525618086"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const EmailAuth = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase