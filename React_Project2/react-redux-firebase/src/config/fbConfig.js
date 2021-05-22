import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAM8z5VzHuPDpoMEeX47PBR5uw0M8akEXE",
    authDomain: "crudproject-e74d8.firebaseapp.com",
    databaseURL: "https://crudproject-e74d8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crudproject-e74d8",
    storageBucket: "crudproject-e74d8.appspot.com",
    messagingSenderId: "926774949203",
    appId: "1:926774949203:web:230abc015bde1d9379dda6",
    measurementId: "G-EKWRV4NYC4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
