const QuizQuestionData = [
  {
    questionID: 1,
    questionText:
      "What was Anakin Skywalker referred to as by the Jedi Council?",
    possibleAnswers: [
      "The Breaded One",
      "The Chosen One",
      "The Greatest One",
      "The Loved One",
    ],
    correctAnswer: "The Chosen One",
  },
  {
    questionID: 2,
    questionText: "Who was the original owner of the Millenium Falcon?",
    possibleAnswers: [
      "Han Solo",
      "Chewbacca",
      "Lando Calrissian",
      "Luke Skywalker",
    ],
    correctAnswer: "Lando Calrissian",
  },
  {
    questionID: 3,
    questionText: "What was the Death Star's weakness?",
    possibleAnswers: [
      "Poor plumbing",
      "Bad electrical work",
      "Exposed exhaust port",
      "The Emperor",
    ],
    correctAnswer: "Exposed exhaust port",
  },
  {
    questionID: 4,
    questionText: "Who imprisoned Han Solo in Carbonite?",
    possibleAnswers: ["Jango Fett", "Boba Fett", "His mother", "Chewbacca"],
    correctAnswer: "Boba Fett",
  },
  {
    questionID: 5,
    questionText:
      "In the game series Star Wars Jedi by Rebellion Studios, what is the name of the main character?",
    possibleAnswers: [
      "Cal Kestis",
      "Ben Skywalker",
      "Boba Fett",
      "Ezra Bridger",
    ],
    correctAnswer: "Cal Kestis",
  },
  {
    questionID: 6,
    questionText:
      "In the Star Wars: Clone Wars micro series by Genndy Tartakovsky, who injured General Grevious enough to give him his signature cough?",
    possibleAnswers: [
      "Anakin Skywalker",
      "Obi-Wan Kenobi",
      "Count Dooku",
      "Mace Windu",
    ],
    correctAnswer: "Mace Windu",
  },
  {
    questionID: 7,
    questionText:
      "What is the name of the droid that was made by Anakin Skywalker when he was a child?",
    possibleAnswers: ["R2-D2", "C3PO", "BB-8", "Chopper"],
    correctAnswer: "R2-D2",
  },
  {
    questionID: 8,
    questionText:
      "Where did Obi-Wan Kenobi and Anakin Skywalker have their duel against each other that resulted in Anakin becoming Darth Vader?",
    possibleAnswers: ["Dagobah", "Naboo", "Coruscant", "Mustafar"],
    correctAnswer: "Mustafar",
  },
  {
    questionID: 9,
    questionText:
      "What is the actual name of the Destroyer Droid deployed by the Confederacy of Independent Systems?",
    possibleAnswers: ["Super Battle", "Commando", "Droideka", "Magnaguard"],
    correctAnswer: "Droideka",
  },
  {
    questionID: 10,
    questionText:
      "Who were the developers of the original Star Wars Battlefront games published by LucasArts?",
    possibleAnswers: ["Sickness", "Pandemic", "Electronic Arts", "DICE"],
    correctAnswer: "Pandemic",
  },
];

const quizData = QuizQuestionData;

let userAnswers = [];

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const resetButton = document.getElementById("reset-button");
const questionText = document.getElementById("question-text");
const questionHeader = document.getElementById("question-header");

const answer = document.getElementsByName("quizQuestion");

const quizQuestions = document.getElementsByClassName("quizQuestionsText");

const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");
const results = document.getElementById("results");
const resultsText = document.getElementById("results-text");

let currentQuestionID = 0;
let quizScore = 0;

nextButton.addEventListener("click", () => {
  if (currentQuestionID < 11) {
    if (currentQuestionID === 0) {
      currentQuestionID++;
    } else {
      checkAnswer(answer);
      currentQuestionID++;
    }
    updatePage(currentQuestionID);
  }
});

backButton.addEventListener("click", () => {
  if (currentQuestionID > 1) {
    currentQuestionID--;
    updatePage(currentQuestionID);
  }
});

resetButton.addEventListener("click", () => {
  currentQuestionID = 0;
  restartQuiz(currentQuestionID);
});

function updatePage(currentQuestionID) {
  if (currentQuestionID > 0 && currentQuestionID < 11) {
    homePage.hidden = true;
    resultsPage.hidden = true;
    updateQuestion(currentQuestionID);
  } else if (currentQuestionID === 0) {
    homePage.hidden = false;
    resultsPage.hidden = true;
  } else if (currentQuestionID === 11) {
    resultsPage.hidden = false;
    quizPage.hidden = true;
    displayResults(currentQuestionID);
  } else {
    quizPage.hidden = true;
  }

  for (let i = 0; i < answer.length; i++) {
    if (answer[i].checked === true) {
      answer[i].checked = false;
    }
  }

  updateButtons(currentQuestionID);
}

function updateQuestion(currentQuestionID) {
  quizPage.hidden = false;
  if (
    (currentQuestionID > 0 && currentQuestionID < 11) ||
    currentQuestionID === 10
  ) {
    questionHeader.innerHTML = `Question ${currentQuestionID}`;
    questionText.innerHTML = quizData[currentQuestionID - 1].questionText;

    for (let i = 0; i < answer.length; i++) {
      quizQuestions[i].innerHTML =
        quizData[currentQuestionID - 1].possibleAnswers[i];
      answer[i].value = quizData[currentQuestionID - 1].possibleAnswers[i];
    }
  }
}

function updateButtons(currentQuestionID) {
  if (currentQuestionID === 1) {
    backButton.innerHTML = "Return to Home Page";
    backButton.hidden = false;
    nextButton.innerHTML = "Next";
  } else if (currentQuestionID > 1 && currentQuestionID < 10) {
    backButton.innerHTML = "Back";
  } else if (currentQuestionID === 10) {
    nextButton.innerHTML = "End Quiz";
  } else if (currentQuestionID === 11) {
    backButton.hidden = true;
    nextButton.hidden = true;
    resultsPage.hidden = false;
    resetButton.hidden = false;
  } else {
    nextButton.hidden = false;
    nextButton.innerHTML = "Start Quiz";
    resetButton.hidden = true;
  }
}

function checkAnswer(answer) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].checked === true) {
      let selectedAnswer = document.querySelector(
        'input[name="quizQuestion"]:checked'
      ).value;
      nextButton.disabled = false;

      if (userAnswers[currentQuestionID - 1]) {
        if (
          userAnswers[currentQuestionID - 1] ===
            quizData[currentQuestionID - 1].correctAnswer &&
          selectedAnswer != quizData[currentQuestionID - 1].correctAnswer
        ) {
          quizScore--;
        } else if (
          selectedAnswer === quizData[currentQuestionID - 1].correctAnswer &&
          userAnswers[currentQuestionID - 1] !=
            quizData[currentQuestionID - 1].correctAnswer
        ) {
          quizScore++;
        }
        userAnswers[currentQuestionID - 1] = selectedAnswer;
      } else {
        if (selectedAnswer === quizData[currentQuestionID - 1].correctAnswer) {
          quizScore++;
        }
        userAnswers.push(selectedAnswer);
      }
    }
  }
}

function displayResults() {
  results.innerHTML = `${quizScore} out of 10`;
  switch (quizScore) {
    case 0:
      resultsText.innerHTML = "Pathetic";
      break;
    case 1:
    case 2:
    case 3:
      resultsText.innerHTML = "I find your lack of score disturbing";
      break;
    case 4:
    case 5:
      resultsText.innerHTML = "Your score is on par with a Stormtrooper";
      break;
    case 6:
    case 7:
      resultsText.innerHTML = "Adequate performance for a rebel";
      break;
    case 8:
    case 9:
    case 10:
      resultsText.innerHTML = "You have brought balance to the Force";
      break;
  }
}

function restartQuiz(currentQuestionID) {
  quizScore = 0;
  userAnswers.length = 0;
  updatePage(currentQuestionID);
}
