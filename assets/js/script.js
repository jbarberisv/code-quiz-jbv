
//Object

// var questions = []; Array  = [1,3,5,6,7]

var questions = [ 
    {question: "What is an array?"},
    {question: "What is an object?"},
    {question: "What is a pc?"},
    {question: "What is your SSN?"},
]

var elTimer = document.querySelector("#timer");
console.log(elTimer);

function qTimer() {
  var time = 60;
  function countdown() {
    if (time > 0) {
      time--;
      elTimer.textContent = "Time: " + time;
      setTimeout(countdown, 1000);
    }
  }
  countdown();
}

qTimer();


