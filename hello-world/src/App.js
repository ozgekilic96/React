import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import React, { Component } from 'react'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';


class App extends Component {

  render () {
    return (
      <div className="App">
        <FunctionClick />
      {/* <Counter /> */}
       {/*  <Message /> */}

      {/*   <Greet name='Bruce' heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name='Clark' heroName="Superman"/>
          <button> Action </button>
        <Greet name='Diana' heroName="Princess"/>
        <Welcome name='Clark' heroName="Superman"/>
         */}
       {/*  <Welcome/> */} */
        {/* <Hello/> */}
      </div>
    )
  }
}
export default App;