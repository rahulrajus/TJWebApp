var curr_state = "default";
var o;
var ans;
var lst;
var score = 0;
var lock = true;
var questions = 10;
var gameStarted = false;
function shake() {

  var elem = document.getElementById("user_input");
  var pos = 0;
  var i = 0
  var id = setInterval(right, 5);

  function right() {
    if (pos == 100) {
      clearInterval(id);
      var l = setInterval(left, 5);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
  function left() {
    if (i == 100) {
      clearInterval(left);
    } else {
      i++;
      elem.style.right = i + 'px';
    }
  }
}
function verifyStates() {
    // var allStates = JSON.parse(states);
    if(gameStarted)
    {
    if(lock == false)
    {
    var o = document.getElementById('user_input').value;
    var lst = o.split(" ");
    ans = states.usa[curr_state]
    var success = true;
    console.log(ans);
    console.log(lst);
    console.log(lst[0]);
    console.log("k");

    if(ans.length === 0 && ((lst.length === 1 && lst[0] == "") || (lst.length == 1 && lst[0] == "None")))
    {
      success = true;
    }
    else if(lst.length === Object.keys(states.usa[curr_state]).length)
    {


      for(var i = 0;i<lst.length;i++)
      {
        console.log(ans);
        console.log(lst);
        console.log(lst[i]);
        if(!(lst.indexOf(ans[i]) >= 0))
        {
          success = false;
          score = score - 100;
          var elm = document.getElementById("user_input");
          elm.style.animation='';
          setTimeout(function () {elm.style.animation='shakeBox 0.3s ease-out';},10)
          //
          // txtbox.classList.remove("shake")
          // txtbox.classList.add("shake");
        //  shake();
        }


    }
    }
    else
    {
      success = false;
      score = score -100;

      var elm = document.getElementById("user_input");
      elm.style.animation='';
      setTimeout(function () {elm.style.animation='shakeBox 0.3s ease-out';},10)


    //  shake();
    }
    if(success === true)
    {
      score = score + 100
      lock = true;
      generateState();

    }
    document.getElementById('score').innerHTML = score;

  }
  else {
    if(success === false)
    {
    var elm = document.getElementById("user_input");
    elm.style.animation='';
    setTimeout(function () {elm.style.animation='shakeBox 0.3s ease-out';},10)
  }


    // txtbox.style.animation = "shakeBox 0.2s";
    //shake();
  }
}

}
function newGame(){
  document.getElementById('score').innerHTML = 0;
  document.getElementById('user_input').disabled = false;
  score = 0;
  questions = 10;
  gameStarted = true;
  generateState();
}
function generateState(){
  if(gameStarted)
  {
  if(questions === 1)
  {
    document.getElementById('state_name').innerHTML = "Game Over!";
    document.getElementById('user_input').value = "Final Score: " + score;
    document.getElementById('user_input').disabled = true;
    gameStarted = false;
  }
  else {


  var rand = parseInt(Math.random()*50 + 1);
  console.log(rand);
  curr_state = Object.keys(states.usa)[rand];
  lock = false;

  document.getElementById('state_name').innerHTML = statesSN.statesS[curr_state][0];
  document.getElementById('user_input').value = "";


}
  var progress = document.getElementById("footer");

    width = questions;
                    questions = questions -1;
  var step = setInterval(animate,10);
  function animate(){
    if(width < (questions))
    {
      clearInterval(step);
      if(questions ===0)
      {
        progress.innerHTML = "Complete!"
      }
      else {
        progress.innerHTML = questions + " left"
      }



    }
    else{
    width-=0.1;
     console.log(width);
  progress.style.width = (((10-width)/10.0)*100.0) + "%";

  }


  }



  // progress.innerHTML = questions + " questions left!"





}
}
// function loadStatePopulation() {
//     var allStates = JSON.parse(states);
//
//     var o = document.getElementById('textField_1');
//     o.innerHTML = allStates.poplulation + "";
// }
