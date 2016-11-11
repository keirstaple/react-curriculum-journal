import React, { Component } from 'react';
import Links from './Links';

class Week extends Component {
  addTitle(event) {
    let title = event.target.value;
    this.props.addTitle(title);
  }

  addLink(event) {
    let link = event.target.value;
    this.props.addLink(link);
  }

  handleSubmit(event) {
    console.log('submitted');
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <Links links={this.props.entries} />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title: </label>
            <input onChange={this.addTitle.bind(this)} />
          <label>Link URL: </label>
            <input onChange={this.addLink.bind(this)} />
          <button className="btn btn-primary">Add Material</button>
        </form>
      </div>
    );
  }
}

export default Week;
