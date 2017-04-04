var config = {
  apiKey: "AIzaSyCRjqzOlIuVkVM5ES0avAvBPEa3DQHyRcA",
  authDomain: "webdev-85294.firebaseapp.com",
  databaseURL: "https://webdev-85294.firebaseio.com/",
  storageBucket: "webdev-85294.appspot.com",
  messagingSenderId: "220662033016"
};
firebase.initializeApp(config);
var new_post = firebase.database().ref('posts');
function submit()
{
  var post = document.getElementById("postarea").value
  var name = document.getElementById("namearea").value



  new_post.push({"name":name,"post":post})
  $("#myModal").modal('toggle');
}
new_post.on('child_added',function(snapshot){
  console.log("Ok",snapshot.val());
  y = snapshot.val();
  
  $("#mc").append(
    "<div class=\"panel panel-default\">" + "<div class=\"panel-heading\">" + "<h3 class=\"panel-title\">" + y["name"] + "</h3></div>" + "<div class=\"panel-body\">" + y["post"] + "</div></div>"
  )
});



// var postRef = new_post.push();
// postRef.set({"name":"rahul","post":"testing"});



// new_post.push({"name":"rahull","post":"testing"})




  // new_post_push = new_post.push().set({"name":"rahull","post":"testing"})
// new_post_push.set({"name":"rahull","post":"testing"})


new_post.on("child_changed", function(snapshot) {
var changedPost = snapshot.val();
console.log("The updated post title is " + changedPost.title);
});
