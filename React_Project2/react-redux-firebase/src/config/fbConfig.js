import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDndchZsYMM24kMRK8IrMYrIRn8nsgMx70",
    authDomain: "react-redux-firebase-9698b.firebaseapp.com",
    projectId: "react-redux-firebase-9698b",
    storageBucket: "react-redux-firebase-9698b.appspot.com",
    messagingSenderId: "553235523641",
    appId: "1:553235523641:web:50706fa71078819258c5e8",
    measurementId: "G-QP03MD71ZX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
