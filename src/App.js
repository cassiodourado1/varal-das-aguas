/* Core */
import React, { Component } from 'react';

/* Presentation */
import Header from './components/Header';
import Home from './scenes/Home';
import Footer from './components/Footer';

/* Styles */
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
