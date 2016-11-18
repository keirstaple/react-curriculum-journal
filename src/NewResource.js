import React, { Component } from 'react';

class NewResource extends Component {

  render() {
    const optionMap = this.props.weeks.map((item, id) => {
      const title = "Week " + (id+1);
      return(
        <option value={id} key={id}>{title}</option>
      );
    });
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
            {optionMap}
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
