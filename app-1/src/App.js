import React, { Component } from 'react';
import './App.css';

//make a page that will take user input text and spit out the same text in a line below the input.


class App extends Component {
  constructor(){
    super()
    this.state ={
      textBox: ""
    }
  }

 copyText(value){
   this.setState({
      textBox: value
   })
 } 

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.copyText(e.target.value)  } />
        <p>{this.state.textBox}</p>
      </div>
    );
  }
}

export default App;
