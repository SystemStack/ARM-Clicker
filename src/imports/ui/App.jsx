import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Click from './Click.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
// App component - represents the whole app
export default class App extends Component {
  getClicks() {
    return [
      { _id: 1, clickCount: 1, username: "levi.broadnax", created: new Date() },
    ];
  }

  renderClicks() {
    return this.getClicks().map((click) => (
      <Click key={click._id} click={click} />
    ));
  }

  render() {
    return (

      <div className="clickContainer">

      <AccountsUIWrapper />
        <header>
          <h1>Clicking is fun!</h1>
        </header>
        <button>Click Me</button>
        <div>
          {this.renderClicks()}
        </div>
      </div>
    );
  }
}