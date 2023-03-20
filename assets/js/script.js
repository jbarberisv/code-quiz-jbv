
//Object

// var questions = []; Array  = [1,3,5,6,7]
var questions = [ 
    {
        question: "Which of the following will correctly declare a variable in JavaScript?",
        answers: [
            "var num = 5;",
            "let num = 5;",
            "const num = 5;",
            "all of the above",
        ],

        answer: "all of the above"

        
        
    },
    {
        question: "Which of the following is a valid attribute for the <img> element?",
        answers: [
            "Alt",
            "Src",
            "Href",
            "Class",
        ],

        answer: "Alt"
    },
    {   
        question: "Which of the following is used to create a border around an element in CSS?",
        answers: [
            "Padding",
            "Margin",
            "Border",
            "Outline",
            ],
        
            answer: "Border"
    },
    {   
        question: "What is the difference between a for loop and a while loop?",
        answers: [
            "A for loop is used for iterating over arrays, while a while loop is used for looping until a condition is met.",
            "A for loop is used for looping until a condition is met, while a while loop is used for iterating over arrays.",
            "There is no difference between the two types of loops.",
            " None of the above.",
            ],
            
            answer: "A for loop is used for looping until a condition is met, while a while loop is used for iterating over arrays."
    },
    {
        question: "Which of the following is used to center an element horizontally in CSS?",
        answers: [
            "text-align: center;",
            "margin: auto;",
            "padding: center;",
            "align: center;",
            ],
 
            answer: " margin: auto;"
    }
]

var elTimer = document.querySelector("#timer");
console.log(elTimer);

function qTimer() {
  var time = 60;
  function countdown() {
    if (time > 0) {
      time--;
      if (elTimer) {
        elTimer.textContent = "Time: " + time;
      }
      setTimeout(countdown, 1000);
    }
  }
  countdown();
}




function generateQuestions() {
    var option = [];
    for (let i = 0; i < questions.length; i++) {        
        var elQuestionDiv = document.querySelector("#question-text"); // Grab Div
        var elQuestionH2 = document.createElement("h2"); // Create H2
        elQuestionH2.textContent = questions[i].question; // Add text
        elQuestionDiv?.appendChild(elQuestionH2); // Append to the div
        
        for (let j = 0; j < questions[i].answers.length; j++) {
            var elDivAnswers = document.querySelector("#answers");
            var elButtonAnswer  = document.createElement("button");
            elButtonAnswer.title = questions[i].answers[j];
            elButtonAnswer.textContent = questions[i].answers[j];
            elDivAnswers?.appendChild(elButtonAnswer);
            
            document.addEventListener("click", selection );
         }
         
        function selection(e) {
            var userAnswer = e?.target.getAttribute("title");
            
            if (userAnswer === questions[i].answer) {
                console.log(true)
            } else {
                console.log(false)

            }
            
        }
        return;
    }
  
}

 qTimer();

generateQuestions();




