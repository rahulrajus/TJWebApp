var express = require('express')
var app = express()
var nodemon = require('nodemon')
app.use(express.static('public'))
require('firebase/database');
  var config = {
    apiKey: "AIzaSyCRjqzOlIuVkVM5ES0avAvBPEa3DQHyRcA",
    authDomain: "webdev-85294.firebaseapp.com",
    databaseURL: "https://webdev-85294.firebaseio.com",
    projectId: "webdev-85294",
    storageBucket: "webdev-85294.appspot.com",
    messagingSenderId: "220662033016"
  };
  firebase.initializeApp(config);
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("served");
  console.log("served2");
  console.log("served3");
  console.log("served4");

  


})
// app.get('/summer.html', function(req,res) {
//   res.sendFile(__dirname + "/summer.html");
// });

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
})
