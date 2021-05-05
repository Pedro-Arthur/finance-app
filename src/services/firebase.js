import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyAH1fms9Dakkdy7AY3U70eDtbrGF0T1bBk",
  authDomain: "financeapp-2f87c.firebaseapp.com",
  databaseURL: "https://financeapp-2f87c-default-rtdb.firebaseio.com",
  projectId: "financeapp-2f87c",
  storageBucket: "financeapp-2f87c.appspot.com",
  messagingSenderId: "864283686465",
  appId: "1:864283686465:web:36c65b4b22d46e3bd638c0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;