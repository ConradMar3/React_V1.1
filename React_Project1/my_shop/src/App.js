import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Catalog App</h1>
        </header>
        <Catalog />
      </div>
    );
  }
}

export default App;
