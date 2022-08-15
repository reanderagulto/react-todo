import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCMbyfOhJIWTS4qvSsagsj7e_bn5n0ABA",
    authDomain: "react-todo-fb22d.firebaseapp.com",
    projectId: "react-todo-fb22d",
    storageBucket: "react-todo-fb22d.appspot.com",
    messagingSenderId: "825781221068",
    appId: "1:825781221068:web:74c21726f4ac778125f469",
    measurementId: "G-WQXHTW675Y"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;