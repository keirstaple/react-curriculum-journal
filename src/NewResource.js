import React, { Component } from 'react';

class NewResource extends Component {

  render() {
    return(
      <div>
        <label> Title: </label>
        <input
          value={this.props.titleValue}
          placeholder={this.props.titleValue}
          name={'titleValue'}
          onChange={this.props.handleInputChange}
        />

        <label> Link URL: </label>
        <input
          value={this.props.linkValue}
          placeholder={this.props.linkValue}
          name={'linkValue'}
          onChange={this.props.handleInputChange}
        />

        <label>Week: </label>
        <select
          value={this.props.optionValue}
          placeholder={this.props.optionValue}
          name={'optionValue'}
          onChange={this.props.handleInputChange}>
            <option value="week1">Week 1</option>
            <option value="week2">Week 2</option>
            <option value="week3">Week 3</option>
            <option value="week4">Week 4</option>
        </select>

        <button className="btn btn-primary"
          onClick={this.props.addResource}>
            Add Resource
        </button>
      </div>
    );
  }
}

export default NewResource;
