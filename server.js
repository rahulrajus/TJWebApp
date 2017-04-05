var express = require('express')
var app = express()
var nodemon = require('nodemon')

app.use("/labs",express.static(__dirname + '/labs'))
app.use("/media",express.static(__dirname + '/media'))
app.use("/css",express.static(__dirname + '/css'))

// require('firebase/database');
//   var config = {
//     apiKey: "AIzaSyCRjqzOlIuVkVM5ES0avAvBPEa3DQHyRcA",
//     authDomain: "webdev-85294.firebaseapp.com",
//     databaseURL: "https://webdev-85294.firebaseio.com",
//     projectId: "webdev-85294",
//     storageBucket: "webdev-85294.appspot.com",
//     messagingSenderId: "220662033016"
//   };
//   firebase.initializeApp(config);
app.get('/index', function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("served");
  console.log("served2");
  console.log("served3");
  console.log("served4");





})

app.use("/media",express.static(__dirname + '/media'))
app.use("/css",express.static(__dirname + '/css'))
// app.use("/html",express.static(__dirname + '/js'))
app.use("/js",express.static(__dirname + '/js'))
var admin = require("firebase-admin");

var serviceAccount = require(__dirname + "/servAccount.json");
// var count = 0
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webdev-85294.firebaseio.com"
});
var db = admin.database();
var cnt = db.ref("count")
var count = 0
cnt.on("child_changed", function(snapshot) {
  count = parseInt(snapshot.val())
  console.log(snapshot.val())
  console.log("wow",count)
});

cnt.on("child_added", function(snapshot) {
  count = parseInt(snapshot.val())
  console.log(snapshot.val())
  console.log("wow",count)
});
// require('firebase/database');
//   var config = {
//     apiKey: "AIzaSyCRjqzOlIuVkVM5ES0avAvBPEa3DQHyRcA",
//     authDomain: "webdev-85294.firebaseapp.com",
//     databaseURL: "https://webdev-85294.firebaseio.com",
//     projectId: "webdev-85294",
//     storageBucket: "webdev-85294.appspot.com",
//     messagingSenderId: "220662033016"
//   };
//   firebase.initializeApp(config);
app.get('/', function (req, response) {

  // res.sendFile(__dirname + "/index.html");
  cnt.set({"visits": count+1})

  console.log(count)
  // var statusCode = 500
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("" + count);
  response.end();
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

// app.get('/summer.html', function(req,res) {
//   res.sendFile(__dirname + "/summer.html");
// });

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
})
