var curr_state = "default";
var o;
var ans;
var lst;
var score = 0;
var lock = true;
function verifyStates() {
    // var allStates = JSON.parse(states);

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
    if(lst.length === Object.keys(states.usa[curr_state]).length)
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
          alert("Fail")
        }

      }
    }
    else
    {
      success = false;
      score = score -100;
    }
    if(success === true)
    {
      score = score + 100

    }
    document.getElementById('score').innerHTML = score;
    lock = true;
  }

}
function generateState(){
  var rand = parseInt(Math.random()*50 + 1);
  console.log(rand);
  curr_state = Object.keys(states.usa)[rand];
  lock = false;
  document.getElementById('state_name').innerHTML = curr_state;
  document.getElementById('user_input').value = "";

}
// function loadStatePopulation() {
//     var allStates = JSON.parse(states);
//
//     var o = document.getElementById('textField_1');
//     o.innerHTML = allStates.poplulation + "";
// }
