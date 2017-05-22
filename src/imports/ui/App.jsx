import PropTypes from 'prop-types';
import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from './AccountsUIWrapper';
import ChartContainer from './ChartContainer';
import ClickContainer from './ClickContainer';
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1>ARM - Clicking is fun!</h1>
        </header>
        {this.props.currentUser/*if the user is logged in, show them the chart/button/logout UI*/
          ?
            <div className="row">
              <AccountsUIWrapper className="col s4" />
              <ClickContainer className="col s4" />
              <ChartContainer className="col s4"/>
            </div>
          :
            <AccountsUIWrapper className="col s4" />
        }
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, App);
