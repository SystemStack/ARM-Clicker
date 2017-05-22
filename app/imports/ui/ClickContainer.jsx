import gql from 'graphql-tag';
import React, { Component } from 'react';
import update from 'react-addons-update';
import { graphql } from 'react-apollo';

import Click from './Click';

const incrementClick = gql`
  mutation insertClick($UserName: String!) {
    incrementClick(UserName: $UserName) {
      TimeClicked
      UserClickNumber
    }
  }
`;

export default ClickContainer = graphql(incrementClick, {
  props: ({ mutate }) => ({
    submit: (UserName) => mutate({
      variables: { UserName }
    })
  })
})(Click);