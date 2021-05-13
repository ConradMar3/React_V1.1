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
        <h1>FireBase intro (Chapter.9)</h1>
      </div>
    );
  }
}
export default App;