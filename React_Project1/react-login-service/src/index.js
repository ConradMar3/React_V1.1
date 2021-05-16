import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceWorker from './registerServiceWorker';
import firebase from '@firebase/app';
import 'firebase/firestore';


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
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*  import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );


    if (module.hot) {
      module.hot.accept();
    }

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
*/