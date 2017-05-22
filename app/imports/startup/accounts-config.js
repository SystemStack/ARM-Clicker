import { Accounts } from 'meteor/accounts-base';
//citation:  http://docs.meteor.com/api/accounts.html#Accounts-ui-config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});