import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';
//              THIS IS THE FORM CONTAINER
//              THIS IS THE FORM CONTAINER
//              THIS IS THE FORM CONTAINER
//              THIS IS THE FORM CONTAINER
//              THIS IS THE FORM CONTAINER
//              THIS IS THE FORM CONTAINER
import ButtonClick from './buttonClick.jsx';

const incrementClick = gql`
    mutation incrementClickMutation ($userID: Int!) {
      incrementClick(userID: $UserID) {
        id,
        UserID,
        TimeClicked
      }
    }
`;
import { Random } from 'meteor/random'

export default buttonClickContainer = graphql(incrementClick, {
  props: ({ mutate }) => ({
    submit: (userID) => mutate({
      variables: { UserID: userID },
      optimisticResponse: {
        __typename: 'Mutation',
        incrementClick: {
          __typename: 'incrementClick',
          UserID: 0
        },
      },
    })
  })
})(ButtonClick);