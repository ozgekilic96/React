import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import { Component } from 'react';
import Hello from './components/Hello'

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <Greet/>
        <Welcome/> */}
        <Hello/>
      </div>
    )
  }
}
export default App;
