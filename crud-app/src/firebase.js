import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig  = {
  apiKey: "AIzaSyBCmM7XLACDFeU0XAgQW46ze11VZQkYuM0",
  authDomain: "auth-production-3270c.firebaseapp.com",
  databaseURL: "https://auth-production-3270c.firebaseio.com",
  projectId: "auth-production-3270c",
  storageBucket: "auth-production-3270c.appspot.com",
  messagingSenderId: "196531873374",
  appId: "1:196531873374:web:5d05d2d1b85f881eef76cf"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();

// export const provider = new firebase.auth