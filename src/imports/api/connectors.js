//citations:
// https://blog.meteor.com/create-a-simple-hello-world-app-with-meteor-and-apollo-64bab66a456f
// https://docs.sequelizejs.com/en/v3/docs/models-definition/#definition
import Sequelize from 'sequelize';

// If you have changed your default user/password from
// 'root'/no password, then set that here (and keep it a secret!)
const db = new Sequelize('ARMClicker', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

// Model of a user logging in
//@UserName: Unique and required username,
//@Email: Unique Email
//@ClickCount: Integer >0, times a user has clicked
const UserModel = db.define('Users', {
  id:         {
                type         : Sequelize.INTEGER,
                primaryKey   : true
              },
  UserName:   {
                type         : Sequelize.STRING,
                allowNull    : false,
                unique       : true
              },
  Email:      {
                type         : Sequelize.STRING,
                unique       : true
              },
  ClickCount: {
                type         : Sequelize.INTEGER,
                defaultValue : 0
              },
}, {
    timestamps: false
});
// Model of a click
const ClickModel = db.define('UserClicks', {
  id:         {
                type         : Sequelize.INTEGER,
                primaryKey   : true
              },
  // This is a foreign key constraint, a click cannot exist without a user
  UserID:     {
                type : Sequelize.INTEGER,
                references: {
                  model: db.models.Users,
                  key  : 'id'
                }
              },
  TimeClicked:{
                type         : Sequelize.DATE,
                defaultValue : Sequelize.NOW
              },
}, {
    timestamps: false
});

// create the table if it doesn't exist yet
db.sync();
// export models to be used in resolvers
const User  = db.models.Users;
const Click = db.models.UserClicks;
export{ User, Click };
