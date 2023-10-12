
import './App.css'
import React, { useState } from 'react'
import GoalList from './components/GoalList'
import NewGoal from './components/NewGoal'

  const App = () => {
    const [courseGoals, setCourseGoals] = useState([
      {id: "cg1", text:"Finish your course"},
      {id: "cg2", text:"Learn about all the topis "},
      {id: "cg3", text:"Help other students"},
    ])
    const addNewGoalHandler = newGoal => {
      setCourseGoals(courseGoals.concat(newGoal))
    }


    return (
      <div>
          <h2 className="header">Class Goals</h2>
          <NewGoal onAddGoal={addNewGoalHandler} />
          <GoalList goals={courseGoals} />
      </div>
    );
  };

export default App;
