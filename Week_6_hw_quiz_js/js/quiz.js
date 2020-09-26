// Create a 2-dimensional array with 5 questions and 5 answers



// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page


//function print(message) {
//  var outputDiv = document.getElementById("output");
//  outputDiv.innerHTML = message;
//}

// This code snippet builds out the HTML list. 


// Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!


// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.

var questions = [
  [ "What is Jimmy Hendrix's best selling single?", "All along the watchtower"],
  [ "What is musician Prince's real name?", "Prince Rogers Nelson"],
  [ "What is the name of the band Ozzy Osbourne was in?", "Black Sabbath"],
  [ "Who was the drummer in the band Beatles?", "Ringo Star" ],
  [ "Who played the voice of the donkey in the movie Shrek?", "Eddie Murpy" ]
]

function print(message, id) {
  var outputDiv = document.getElementById(id);
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

var correct = [];
var incorrect = [];
var response = [];

if (window.confirm("Are you ready to take the quiz?")) {
  for (let i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i][0]);                 // prompt is equivalent of input in python
    response.push(userAnswer); 
  }
}
for (let i = 0; i < questions.length; i++) {
  if (questions[i][1].toLowerCase() === response[i].toLowerCase()) {
    correct.push(questions[i][0])
  } else {
    incorrect.push(questions[i][0])
  }
}
print(`You got ${correct.length} questions right!`, "points")
print("You got these questions correct!" + buildList(correct), "right")
print("You got these questions worng..." + buildList(incorrect), "wrong")

