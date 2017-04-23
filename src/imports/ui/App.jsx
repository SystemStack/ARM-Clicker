import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import ClicksContainer from './clickContainer'
import Click from './Click.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import buttonClickContainer from './buttonClickContainer.jsx';

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
          <ClicksContainer className="col s4" />
          <buttonClickContainer className="col s4" />
          <AccountsUIWrapper className="col s4" />
        </div>
      </div>
    );
  }
}
