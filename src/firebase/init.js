import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyACXG50CAYl2IByBmrLWy5d9cX85fYKy18",
  authDomain: "e-vipstore.firebaseapp.com",
  databaseURL: "https://e-vipstore.firebaseio.com",
  projectId: "e-vipstore",
  storageBucket: "e-vipstore.appspot.com",
  messagingSenderId: "1059880958200",
  appId: "1:1059880958200:web:d658efd43104e28a"
};

firebase.initializeApp(config)
