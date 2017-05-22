import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  chartHelper (_usersClicks) {
    return _usersClicks
      .map(v => ({
        Clicks: v.UserClickNumber,
        Time  : this.dateHelper(v.TimeClicked)
      }));
  }

  //We may make the X-axis more advanced in the future, e.g. stratifying dates into buckets
  dateHelper (_millis) {
    let _date = new Date(_millis);
    return _date.toDateString();
  }

  render() {
    return (
      <div>
        <AreaChart width={window.innerWidth} height={window.innerHeight*.65} data={this.chartHelper(this.props.clicks)}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <Area type='monotone' dataKey='Clicks' stroke='#8884d8' fill='#8884d8' />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <XAxis dataKey="Time"/>
          <YAxis/>
        </AreaChart>
      </div>
    )
  }
}

Chart.defaultProps = {
  clicks: Array()
}

// clicks is an array of click objects
// [{UserName: String TimeClicked: String, UserClickNumber: KEY(string)},...]
Chart.propTypes = {
  clicks: PropTypes.array.isRequired
};