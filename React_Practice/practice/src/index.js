import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBIg6x4SoDIYVsGTPsx0anbC_yl152GGpY",
  authDomain: "socialape-3a683.firebaseapp.com",
  databaseURL: "https://socialape-3a683-default-rtdb.firebaseio.com",
  projectId: "socialape-3a683",
  storageBucket: "socialape-3a683.appspot.com",
  messagingSenderId: "21037507628",
  appId: "1:21037507628:web:afca49b2ef65dad6fe1d89",
  measurementId: "G-SNDBG2YMRL"
};
// Initialize Firebase
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
