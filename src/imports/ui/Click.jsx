//citation: https://facebook.github.io/react/docs/handling-events.html
import PropTypes from 'prop-types';
import React, { Component } from 'react';
export default class Click extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // initialize state
    this.state = {
      clickCount: 0
    };
  }

  handleClick () {
    // Bind `_that` to the outer context so we can access setState in the promise resolution
    let _that = this;
    // Grab the client's username and send it into the ClickContainer
    this
      .props
      .submit(Meteor.user().username)
      .then(function(_response) {
        _that.setState({clickCount : _response.data.incrementClick.UserClickNumber });
    });
  }

  render() {
    return (
      <div className="row">
        <button onClick={this.handleClick}>
          You have clicked&nbsp;
            {this.state.clickCount}&nbsp;
            {this.state.clickCount===1 ? "time" : "times"}
        </button>
      </div>
    );
  }
}

Click.propTypes = {
  submit : PropTypes.func.isRequired
};