import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet;'
import { Component } from 'react';


class App extends Component {
  render () {
    return (
      <div className="App">
        <MyComponent />
      </div>
    )
  }
}
export default App;
