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
        <Greet name='Bruce' heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name='Clark' heroName="Superman"/>
          <button> Action </button>
        <Greet name='Diana' heroName="Princess"/>
        <Welcome name='Clark' heroName="Superman"/>
        
       {/*  <Welcome/> */} */
        {/* <Hello/> */}
      </div>
    )
  }
}
export default App;
