import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDndchZsYMM24kMRK8IrMYrIRn8nsgMx70",
  authDomain: "react-redux-firebase-9698b.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-9698b-default-rtdb.firebaseio.com",
  projectId: "react-redux-firebase-9698b",
  storageBucket: "react-redux-firebase-9698b.appspot.com",
  messagingSenderId: "553235523641",
  appId: "1:553235523641:web:d9df4b18d97ce7ec58c5e8",
  measurementId: "G-Y4373B2858"
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
