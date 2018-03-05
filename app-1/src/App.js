import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {}
    message: ""
    otherMessage: ""
  }

  messageCopy(value){
    this.setState({
      message: value
    })
  }

  clickHandler(){
    this.setState({
      otherMessage: this.state.message
    })
  }

  render() {
    return (
      <div className="App">
      <input onChange={(e) => this.messageCopy(e.target.value) }/>
        <p> {this.state.message} </p>
        <p>Do you want to press the button?</p>
        <button onClick={() => this.clickHandler() } >BUTTON!!!</button>
        <p> {this.state.otherMessage} </p>          
      </div>
    );
  }
}

export default App;
