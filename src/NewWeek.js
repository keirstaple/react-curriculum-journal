import React, { Component } from 'react';

class NewWeek extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.addWeek}>Add Week</button>
      </div>
    );
  }
}

export default NewWeek;
