import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Click from './Click.jsx'

/**
 * This React component is responsible for querying Apollo for the clicks
 * and passing the results to the child Post components for rendering
 */
class Clicks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let clicks = <div></div>
    if (this.props.data.clicks && this.props.data.clicks instanceof Array) {
      clicks = (
        <div>
          <button value="+2"></button>
          {this.props.data.clicks.map(function(click) {
            return <Click key={click.id} click={click} />;
          })}
        </div>
      )
    }
    return clicks;
  }
}

// Clicks requires props with a data attribute of an array of clicks
Click.propTypes = {
    data: PropTypes.shape({
        clicks: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the clicks and the desired attributes
const allClicks = gql`
  query ClicksForDisplay {
    clicks {
      id,
      UserID,
      TimeClicked
    }
  }
`;

// Pass data to Click every 5 seconds
export default ClickContainer = graphql(allClicks, {
  options: {pollInterval: 10000}
})(Clicks);