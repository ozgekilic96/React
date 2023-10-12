import logo from './logo.svg'
import './App.css'
import Greet from './components/wishas/Greet'
import Welcome from './components/wishas/Welcome'
import React, { Component } from 'react'
import Hello from './components/wishas/Hello'
import Message from './components/wishas/Message'
import Counter from './components/wishas/Counter'
import FunctionClick from './components/wishas/FunctionClick'
import ClassClick from './components/wishas/ClassClick'
import EventBind from './components/wishas/EventBind'
import ParentComponent from './components/wishas/ParentComponent'
import ChildComponent from './components/wishas/ChildComponent'
import UserGreeting from './components/wishas/UserGreeting'

import GoalList from './components/GoalList'
import NewGoal from './components/NewGoal'


  const App = () => {
    return (
      <div>

        <h2 className="header">Class Goals</h2>
        <NewGoal  />
        <GoalList />

        {/* < UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
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
    );
  };

export default App;
