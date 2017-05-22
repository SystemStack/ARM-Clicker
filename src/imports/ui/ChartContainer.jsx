import Chart from './Chart'
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';


class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Chart clicks={this.props.data.clicks} />;
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
  query ChartsForDisplay {
    clicks {
      UserName
      TimeClicked
      UserClickNumber
    }
  }
`;

// Use the graphql container to run the allCharts query and pass the results to ChartsContainer
export default ChartContainer = graphql(allCharts, {
  options: {pollInterval: 1000}
})(Charts);