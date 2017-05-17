import ApolloClient, { addTypename } from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { meteorClientConfig } from 'meteor/apollo';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

//Allows for the user posting to see the changes immediately
const client = new ApolloClient({
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id
    }
    return null;
  }
});

Meteor.startup(() => {
  render(<ApolloProvider client={client}>
         <App />
         </ApolloProvider>, document.getElementById('ArmClicker')
         );
});
