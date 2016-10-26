import React, { Component } from 'react';

class Week extends Component {

  render() {
    const linkMap = this.props.links.map((link, idx) => {
      return <li key={idx}> {link} </li>;
    });
    return(
      <ul>
        {linkMap}
      </ul>
    );
  }
}

export default Week;
