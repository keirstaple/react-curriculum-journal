import React, { Component } from 'react';
import Week from './Week';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Reference Guide",
      week1: [{
        Subject: "New features of ES6",
        Link1: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84",
        Link2: "https://www.youtube.com/watch?v=sjyJBL5fkp8",
        Link3: "https://www.youtube.com/watch?v=6sQDTgOqh-I",
        Link4: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.fvsezsvas"
      }],
      week2: [{
        Subject: "ES6 Extended",
        Link1: "https://www.youtube.com/watch?v=CozSF5abcTA",
        Link2: "https://www.youtube.com/watch?v=AfWYO8t7ed4",
        Link3: "https://www.youtube.com/watch?v=LmL0Gh193M0"
      }]
    };
  }
  render() {
    const array = [1, 2, 3];
    return (
      <div className="App">
        <div className="App-header">
          <h1> {this.state.title} </h1>
        </div>

        <Week links={array} />

      </div>
    );
  }
}

export default App;
