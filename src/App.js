import './App.css';
// import Greeting from './Greeting';
import React, { Component } from 'react';


class App extends Component{

  state = {
    counter: 0 
  };

  minusbutton = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  };
  plusbutton = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  render(){
    return (
      <div>
        <button onClick={this.minusbutton}>-</button>
        <input value={this.state.counter}/>
        <button onClick={this.plusbutton}>+</button>
      </div>
    )
  }

}



export default App;