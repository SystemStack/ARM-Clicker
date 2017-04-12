import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Click from './Click.jsx';

// @TODO import DAO to access values from DB

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {

  renderClicks() {
    return this.props.clicks.map((click) => (
      <Click key={click._id} click={click} />
    ));
  }

  render() {
    return (
      <div className="clickContainer">
        <header>{/* all cases */}
          <h1>Clicking is fun!</h1>
        </header>
        <AccountsUIWrapper />{/* not logged in */}
        <button>Click Me</button>{/* only logged in */}
        <div>
          {this.renderClicks()}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  clicks: PropTypes.Object.isRequired,
};

export default createContainer(() => {
  return {
    clicks: Clicks.find({}).fetch(),
  };
}, App);