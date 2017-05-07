import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Click extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.click.UserID}
      </div>
    )
  }
}

// Click requires props with a click attribute with a content attribute of type string
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
Click.propTypes = {
    click: PropTypes.shape({
        UserID: PropTypes.number
    }).isRequired
};