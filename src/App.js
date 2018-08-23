import React, { Component } from 'react';
import Movies from './Components/movies'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main" className="container">
      <h1>I am Abby</h1>
      <Movies />
      </main>
    );
  }
}

export default App;
