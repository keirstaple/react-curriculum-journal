import React, { Component } from 'react';
import Links from './Links';
import NewLink from './NewLink';

class Week extends Component {

  render() {
    return(
      <div>
        <Links links={this.props.entries} />
        <NewLink />
      </div>
    );
  }
}

export default Week;
