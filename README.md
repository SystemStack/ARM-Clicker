## Clicker demo made with Apollo, React, and Meteor.
### Installing for local use
#### Dependencies
  * Install Meteor for OSX/Linux - `curl https://install.meteor.com/ | sh`
  * [Meteor For Windows](https://www.meteor.com/install, "Meteor for Windows")
  * MySQL
#### Install/Run instructions
  * Create the MySQL database where you want the tables to be created: 
   * >$ mysql -u root
   * >mysql> CREATE DATABASE armclicker;
  * Clone this repository and navigate to the /src directory
  * Install all dependencies: `meteor npm install`
  * Run `meteor` and point your browser to `localhost:3000`
### To Test the API
 * Navigate to `http://localhost:3000/graphiql`
 * Add the below queries and mutators to your query editor
 * Add desired query variables
#### Create User => User
```
mutation createUser($UserName: String!, $Email: String) {
  createUser(UserName: $UserName, Email: $Email) {
    UserName
    Email
    UserID
  }
}
```
#### Update Users Email => 1|0 (Rows Updated)
```
mutation emailUp($UserName: String!, $Email: String!) {
  updateEmail(UserName: $UserName, Email: $Email)
}
```
#### Create Click, Update A Users Click Count => Click
```
mutation insertClick($UserID: Int!) {
  incrementClick(UserID: $UserID) {
    TimeClicked
    UserClickNumber
  }
}
```
#### Find User By Username Or Email => User
```
query getUserByName($UserName: String!, $Email: String) {
  users(UserName: $UserName, Email: $Email) {
    UserID: UserID
    Email
    UserName
    ClickCount
  }
}
```
#### Find All Clicks By User => [Clicks]
```
query getClicksByUserID($UserID: Int!) {
  clicks(UserID: $UserID) {
    TimeClicked
    UserClickNumber
  }
}
```
#### Query Variables Format
```
{
  "UserName": "levi",
  "Email": "levibroadnax@gmail.com",
  "UserID": 1
}
```
### FlowChart
![Alt](ARM_clicker_flowchart.png)
