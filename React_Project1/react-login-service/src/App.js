import React, { Component } from 'react';
import * as firebase from 'firebase';
class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <h1>Firebase.API</h1>
        <p>Chapter 9 - C.R.U.D. with Firebase.</p>
      </div>
    );
  }
}
export default App;