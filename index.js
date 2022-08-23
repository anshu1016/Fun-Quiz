var readLineSync = require("readline-sync");


let score = 0
function introQuiz(userIntroAnswer) {
  if (userIntroAnswer.toLowerCase() === "yes") {
    console.log("well That's very Good...\n It will be     fun to play with you..\n Let's start Quiz..")
    quiz();
  }
  else {
    console.log("Oh Oh! How can you do this " + username + ", this is like a disaster to you, I can suggest you to watch it and then come here to crack this quiz..\n I am pretty sure you will fll in love with the characters..Bye!!")
  }
}
var questions = [
  {
    question: "What is the name of Character of Akshay Kumar in movie?\n",
    answer: "Raju"
  },
  {
    question: "What is the name of Character of Sunil Shetty in movie?\n",
    answer: "Shyam"
  },
  {
    question: "what is the nick name of Paresh rawal in the movie?\n",
    answer: "Babu Bhaiya"
  },
  {
    question: "how much Lakh Akshay,Sunil And Paresh have to pay to Totla Seth? (Answer in number)? \n",
    answer: "40"
  }
];
var highScoreList = [
  {
    name: "Arun",
    scored: 3
  },
  {
    name: "Deepak",
    scored: 3
  }
]

function quiz() {
  for (let i = 0; i < questions.length; i++) {
    console.log("\nQ" + (i + 1))
    let currentQuestion = questions[i];
    play(currentQuestion.question,
      currentQuestion.answer)
  }
}
function highscore() {

  for (var i = 0; i < highScoreList.length; i++) {
    let currentHighScore = highScoreList[i].scored;
    if (score > currentHighScore) {
      console.log("Hurray!, you have crack this quiz,\n Please send your details to me for updating the highest score..")
      break;
    }
    else {
      console.log("Oh Oh Sorry!, you have unable to crack the hgh score.. \n But Don't Worry you can try once more...:)")
      break;
    }
  }
}

function play(questions, answer) {
  var userAnswers = readLineSync.question(questions);
  if (userAnswers.toLowerCase() === answer.toLowerCase()) {
    console.log("Great! you know  ;)");
    score += 1;
  }
  else {
    console.log("Wrong Answer Buddy!")
  }
  console.log(`You scored ${score}.\n`);


}


var username = readLineSync.question("What is your name? ");
var userIntroAnswer = readLineSync.question("Well " + username + "!, Did you watch Hera Pheri?")
introQuiz(userIntroAnswer);
highscore();