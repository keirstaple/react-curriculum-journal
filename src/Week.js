import React, { Component } from 'react';

class Week extends Component {

  render() {
    const linkMap = this.props.entries.map((item, id) => {
      return (
        <ul key={id}>
          <li>{item.title}</li>
          <li><a href={item.link} target="_blank">{item.link}</a></li>
        </ul>
      );
    });
    return(
      <div>
        {linkMap}
      </div>
    );
  }
}

export default Week;
