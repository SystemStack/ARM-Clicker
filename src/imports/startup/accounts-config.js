import { Accounts } from 'meteor/accounts-base';
 //Customize login/logout functionality
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});