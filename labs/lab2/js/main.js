var curr_state = "default";
var o;
var ans;
var lst;
var score = 0;
var tries = 3;
var instruct = true;
var user_confirm = confirm("This application uses local storage to store user highscores. Please confirm that you are OK with this.")
if(!(user_confirm) && localStorage.getItem("highscore") != null)
{
  var existing_confirm = confirm("You have existing data in local storage. Please confirm that you woud like to CLEAR this data.")
  if(existing_confirm)
  {
    localStorage.clear();
  }
}
if(user_confirm)
{
var highscore = localStorage.getItem("highscore");

if(highscore === null)
{
  highscore = Number.NEGATIVE_INFINITY;
  localStorage.setItem("highscore",highscore)
}
}
else {
  highscore = Number.NEGATIVE_INFINITY;
}
var lock = true;
var questions = 11;
var gameStarted = false;
function showInstructions()
{
  if(instruct != true)
  {
    var elem = document.getElementById('instructions');
    elem.style.animation =  "fadeEnter 0.3s"
    elem.style.opacity = 1
    elem.style.display = ""

  }
}
function hideInstructions()
{
  if(instruct === true)
  {
    var elem = document.getElementById('instructions');
    elem.style.animation =  "fadeOut 0.3s"
    elem.style.opacity = 0
    // elem.style.display = "None"


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
          if(ans.length === 0 && ((lst.length === 1 && lst[0] == "") || (lst.length == 1 && lst[0] == "None")))
          {
            success = true;
          }
          else if(lst.length === Object.keys(states.usa[curr_state]).length)
          {
            for(var i = 0;i<lst.length;i++)
            {
              if(!(lst.indexOf(ans[i]) >= 0) && !(lst.indexOf(statesSN.statesS[ans[i]][0]) >= 0))
              {
                success = false;
                tries-=1;
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
            tries-=1;

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
    else
    {
      if(success === false)
      {
        var elm = document.getElementById("user_input");
        elm.style.animation='';
        setTimeout(function () {elm.style.animation='shakeBox 0.3s ease-out';},10)
      }


      // txtbox.style.animation = "shakeBox 0.2s";
      //shake();
    }
    if(tries === 0)
    {
      for(var k = 0;k<ans.length;k++)
      {
        if(!(lst.indexOf(ans[k]) >= 0))
        {
          document.getElementById('user_input').value = (document.getElementById('user_input').value + " " + ans[k]).trim()
          tries = 3;
          break;
        }
      }
      for(var j = 0;j<lst.length;j++)
      {
        if(!(ans.indexOf(lst[j]) >=0))
        {
          document.getElementById('user_input').value = document.getElementById('user_input').value.replace(lst[j],"").trim();


        }
      }
    }
  }

}
function newGame(){
  document.getElementById('score').innerHTML = 0;
  document.getElementById('user_input').disabled = false;
  document.getElementById('user_input').placeholder = "Type in Border States!"
  //showInstructions();
  score = 0;
  tries = 3;
  questions = 11;
  gameStarted = true;
  var progress = document.getElementById("footer");
  var widthh = 0;
  if(progress.innerHTML != "10 left")
  {

  if(progress.innerHTML === "Complete!")
  {
    widthh = 11;
  }
  else if( !(progress.innerHTML.includes("left")))
  {
    widthh = 0;
  }
  else {
    widthh = Number(progress.innerHTML.substring(0,1))
  }
  //  alert(widthh);
  var step = setInterval(animateRevert,10);
  function animateRevert(){
      widthh-=0.1;
    if(widthh <= (1))
    {
      clearInterval(step);

      progress.innerHTML = 10 + " left"
      generateState();
    }
    else
    {

      console.log(widthh);
      progress.style.width = (((widthh)/10.0)*100.0) + "%";
    }
  }
  console.log("done!")

}

}
function generateState(){
  if(questions ===11)
  {
    showInstructions();
    instruct = true;
  }
  else {
    if(instruct)
    {
      hideInstructions();
      instruct = false;
    }
  }
  tries = 3;
  if(gameStarted)
  {
    if(questions === 1)
    {
      if(score > highscore)
      {
        highscore = score
        if(user_confirm)
        {
        localStorage.setItem("highscore",highscore)
        }
        document.getElementById('state_name').innerHTML = "Game Over! New High Score!";

      }
      else
      {
        document.getElementById('state_name').innerHTML = "Game Over!";
      }

      document.getElementById('user_input').value = "Final Score: " + score;
      document.getElementById('user_input').disabled = true;
      gameStarted = false;
    }
    else
    {


      var rand = parseInt(Math.random()*50);

      console.log(rand);
      curr_state = Object.keys(states.usa)[rand];
      lock = false;

      document.getElementById('state_name').innerHTML =  statesSN.statesS[curr_state][0];
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
      else
      {
        width-=0.1;
        console.log(width);
        progress.style.width = (((11-width)/11.0)*100.0) + "%";
      }
    }
  }

}
