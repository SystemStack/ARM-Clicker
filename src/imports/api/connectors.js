//citation https://blog.meteor.com/create-a-simple-hello-world-app-with-meteor-and-apollo-64bab66a456f
import Sequelize from 'sequelize';

// create the connection
// If you have changed your default user/password from
// 'root'/no password, then set that here (and keep it a secret!)
const db = new Sequelize('ARMClicker', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

// Model of a user logging in
//@User_Name: Alphanumeric string
//@Email: Email string
//@Salt: Random UUID on account creation and password change
//@Hash: Match with hash/salt
//@Click_Count: Integer greater than zero of times clicked
const LoginPostModel = db.define('loginPost', {
    UserName   : {
                    type          : Sequelize.STRING,
                    isAlphanumeric: true
                  },
    Email       : {
                    type   : Sequelize.STRING,
                    isEmail: true,
                  },
    Salt        : { type: Sequelize.STRING },
    Hash        : { type: Sequelize.STRING },
    Token       : { type: Sequelize.STRING },
});

// Model of a click
// Not using default timestamps because we will not update these records
const ClickPostModel = db.define('clickPost', {
    Email        : { type: Sequelize.STRING },
    TimeClicked : {
                      type        : Sequelize.DATE,
                      defaultValue: Sequelize.NOW
                   },
});

// create the table if it doesn't exist yet
db.sync();

// export models
const ClickPost = db.models.loginPost;
const LoginPost = db.models.clickPost;
export { ClickPost, LoginPost };