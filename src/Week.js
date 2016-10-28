import React, { Component } from 'react';

class Week extends Component {

  render() {
    console.log(this.props.entries);
    const linkMap = this.props.entries.map((item, id) => {
      return (
        <ul key={id}>
          <li>{item.title}</li>
          <li>{item.link}</li>
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
