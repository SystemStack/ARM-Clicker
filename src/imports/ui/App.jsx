import PropTypes from 'prop-types';
import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from './AccountsUIWrapper';
import ClickContainer from './ClickContainer';
// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Clicking is fun!</h1>
        </header>
        <div className="row">
          <ClickContainer className="col s4" />
          <AccountsUIWrapper className="col s4" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
};
