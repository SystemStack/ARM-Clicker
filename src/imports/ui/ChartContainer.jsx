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
    this.state = { UserName: "" };
  }

  handleSearch () {
    this.setState({UserName: this.UserName.value});
  }

  render() {
    return (
      <div>
        <input ref={(c) => this.UserName = c}
               placeholder="chart container"
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

// Define the graphql query to retrieve the charts and the desired attributes
const allCharts = gql`
  query getUserByName($UserName: String) {
    clicks (UserName: $UserName) {
      UserName
      TimeClicked
      UserClickNumber
    }
  }
`;

// Use the graphql container to run the allCharts query and pass the results to ChartsContainer
export default ChartContainer = graphql(allCharts, {
  options: {
             pollInterval: 5000,
             variables: {UserName: "test1"}
           }
})(Charts);