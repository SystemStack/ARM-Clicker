import React, { Component, PropTypes } from 'react';

// Click component - Shows information about last click
export default class Click extends Component {
  render() {
    //@TODO Get a best practice for separating a string with spaces
    return (
      <p>{this.props.click.name}&nbsp;
         has clicked&nbsp;
         {this.props.click.clickCount}&nbsp;
         times</p>
    );
  }
}

Click.propTypes = {
  click: PropTypes.object.isRequired,
};