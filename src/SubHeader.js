import React, { Component } from 'react';

class SubHeader extends Component {
  constructor(props) {
    super();
    this.headerColor = props.headerColor;
  }

  changeHeaderColor() {
    this.headerColor = "red";
    this.props.changeColor(this.headerColor);
  }

  render() {
    return (
      <div>
        <font color={this.headerColor}>This is our course material</font>
        <button onClick={this.changeHeaderColor.bind(this)} className="btn btn-primary">Change Color</button>
      </div>
    );
  }
}

export default SubHeader;
