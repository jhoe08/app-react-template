import React, { Component } from 'react';
import happyCoding from '../assets/happy-coding.png';

class App extends Component {

  render(){
    return (
      <div>
        <h1>Hello Coders!</h1>
        <img src={happyCoding} alt='Happy Coding' />
      </div>
    )
  }
}

export default App;
