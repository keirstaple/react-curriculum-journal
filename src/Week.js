import React, { Component } from 'react';
import Links from './Links';

class Week extends Component {

  render() {
    const title = this.props.title;
    return(
      <div>
        <h3>{title}</h3>
        <Links
          links={this.props.entries}
        />
      </div>
    );
  }
}

export default Week;
