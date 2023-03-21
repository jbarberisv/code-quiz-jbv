var elScoreDiv=document.querySelector("#scores");
var scores= localStorage.getItem("scores");
scores = JSON.parse(scores);

scores.forEach(score => {
    var elDiv = document.createElement("div");
    elDiv.textContent= 'Initials: ' + score.user + 'Score: ' + score.score;
    elScoreDiv?.appendChild(elDiv); // Append to the div


});

