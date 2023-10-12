import React from 'react';


  const NewGoal = () => {
    const addGoalHandler = event => {
      event.preventDefault()
      const newGoal = {
        id: Math.random().toString(),
        text: "my new goal"
      }
        console.log(newGoal)
    }
    return (
      <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="Submit">Add Goal</button>
      </form>
    );
  };
export default NewGoal;
