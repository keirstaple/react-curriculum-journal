import React, { Component } from 'react';
import Week from './Week';

class WeekList extends Component {

  render() {
    // console.log(this.props.weeks);
    const weekMap = this.props.weeks.map((item, id) => {
      const title = "Week " + (id+1);
      return(
        <div key={id}>
          <Week
            title={title}
            entries={item.week}
          />
        </div>
      );
    });
    return(
      <div>
        {weekMap}
      </div>
    );
  }
}

export default WeekList;
