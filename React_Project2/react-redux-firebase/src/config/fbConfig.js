import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyBN9WlmRc3SedmC4agM1G-rYqezGR22iZE",
    authDomain: "crudproject-45834.firebaseapp.com",
    databaseURL: "https://crudproject-45834.firebaseio.com",
    projectId: "crudproject-45834",
    storageBucket: "crudproject-45834.appspot.com",
    messagingSenderId: "590481645308",
    appId: "1:590481645308:web:613e62539967b876"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
