import React, { Component } from 'react';

class NewLink extends Component {
  render() {
    return (
      <div>
        <label>Title: </label>
        <input />
        <label>Link URL: </label>
        <input />
        <button className="btn btn-primary">Add Material</button>
      </div>
    );
  }
}

export default NewLink;
