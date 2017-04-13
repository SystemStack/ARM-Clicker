//citation https://blog.meteor.com/create-a-simple-hello-world-app-with-meteor-and-apollo-64bab66a456f
import Sequelize from 'sequelize';

// create the connection
// If you have changed your default user/password from
// 'root'/no password, then set that here (and keep it a secret!)
const db = new Sequelize('ARMTest', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

// Model of a user logging in
//@User_Name: Alphanumeric string
//@Email: Email string
//@Salt: Random UUID on account creation and password change
//@Hash: Match with hash/salt
//@Click_Count: Integer greater than zero of times clicked
// const LoginModel = db.define('login', {
//   UserName: {
//                type          : Sequelize.STRING,
//                isAlphanumeric: true
//              },
//   Email    : {
//                type   : Sequelize.STRING,
//                isEmail: true,
//              },
//   Salt     : { type: Sequelize.STRING },
//   Hash     : { type: Sequelize.STRING },
//   Token    : { type: Sequelize.STRING },
// });

// // Model of a click
// const ClickModel = db.define('click', {
//   Email      : { type: Sequelize.STRING },
//   UserName   : { type: Sequelize.STRING },
//   TimeClicked: {
//                  defaultValue: Sequelize.NOW,
//                  type        : Sequelize.DATE,
//                },
// });
// Grab all info - testing only
const TestUserModel = db.define('UserModelTest', {
  UserName  : { type: Sequelize.STRING },
  Email     : { type: Sequelize.STRING },
  ClickCount: {
                defaultValue: 0,
                type        : Sequelize.INTEGER,
              },
});

const TestUserLoginModel = db.define('UserLoginTest', {
  UserName : { type: Sequelize.STRING },
  Email    : { type: Sequelize.STRING },
  Salt     : { type: Sequelize.STRING },
  Hash     : { type: Sequelize.STRING },
  Token    : { type: Sequelize.STRING },
});

const TestClickModel = db.define('UserClickTest', {
  UserName   : { type: Sequelize.STRING },
  Email      : { type: Sequelize.STRING },
  TimeClicked: {
                 defaultValue: Sequelize.NOW,
                 type        : Sequelize.DATE,
               },
});


// create the table if it doesn't exist yet
db.sync();

// export models
// const Click = db.models.login;
// const Login = db.models.click;
// export { Click, Login };
const testUser  = db.models.UserModelTest;
const testLogin = db.models.UserLoginTest;
const testClick = db.models.UserClickTest;
export{testUser, testLogin, testClick};
