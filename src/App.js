import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
     <reactFragment>
      <Header/>
      <Navbar/>
      <Home/>
     </reactFragment>
    );
  }
}

export default App;
