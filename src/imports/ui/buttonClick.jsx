import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ButtonClick extends Component {
//                  THIS IS THE FORM
//                  THIS IS THE FORM
//                  THIS IS THE FORM
//                  THIS IS THE FORM
//                  THIS IS THE FORM
//                  THIS IS THE FORM
  constructor(props) {
    super(props);
    // bind event handlers to this
    this.submitClick = this.submitClick.bind(this);
    // initialize component refs
    this.clickCount = 0;
    // initialize the state
    this.state = {
      userID: 0
    };
  }

  render() {
    return (
      <div className="row">
        <button onClick={this.submitClick}
                name="buttontoclick"
                id="clickerbutton"
                value="buttonbutton">
        </button>
      </div>
    )
  }

  submitClick(event) {
    event.preventDefault();
    this.props.submit(this.state.userID);
  }
}

ButtonClick.propTypes = {
  submit: PropTypes.func.isRequired,
};