import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Reference Guide",
      week1: [{
        Subject:
        Link1:
        Link2:
        Link3:
      }],
      week2: [{
        Subject:
        Link1:
        Link2:
        Link3:
      }],
      week3: [{
        Subject:
        Link1:
        Link2:
        Link3:
      }],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> {this.state.title} </h1>
        </div>
      </div>
    );
  }
}

export default App;
