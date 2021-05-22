import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
