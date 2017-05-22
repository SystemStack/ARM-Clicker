import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import update from 'react-addons-update';
import { graphql } from 'react-apollo';

import Chart from './Chart'

class Charts extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      UserName: ""
    }
  }

  handleSearch () {
    this.props.data.refetch({
      UserName: this.state.UserName.value
    });
  }

  render() {
    return (
      <div>
        <input ref={(c) => this.state.UserName = c}
               placeholder="Search for your friends by their User Name!"
               type="text"
               onChange={this.handleSearch}/>
        <Chart clicks={this.props.data.clicks} />
      </div>
    );
  }
}

// Charts requires props with a data attribute of an array of charts
Charts.propTypes = {
  data: PropTypes.shape({
    clicks: PropTypes.array
  }).isRequired
};

// gql to grab all of a users clicks by their username
// Note: It is possible to project Username out of clicks as well,
//    may be interesting for comparative graphing
const allCharts = gql`
  query getUserByName($UserName: String!) {
    clicks (UserName: $UserName) {
      TimeClicked
      UserClickNumber
    }
  }
`;

// Use the graphql container to run the allCharts query and pass the results to ChartsContainer
export default ChartContainer = graphql(allCharts, {
  options: {
   pollInterval: 1000,
   variables: {UserName: this.UserName}
  }
})(Charts);