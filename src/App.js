/* Core */
import React, { Component } from 'react';

/* Presentation */
import Header from './components/Header';
import Home from './scenes/Home';
/* Styles */
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />

      </div>
    );
  }
}

export default App;
