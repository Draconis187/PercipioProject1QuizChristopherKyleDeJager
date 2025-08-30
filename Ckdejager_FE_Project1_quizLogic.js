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

let currentQuestionID = document.getElementById("current-quiz-question-id");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
let questionText = document.getElementById("question-text");
let questionHeader = document.getElementById("question-header");

let answer = document.getElementsByName("quizQuestion");

let quizQuestions = document.getElementsByClassName("quizQuestionsText");

let form = document.getElementById("quizForm");

let quizScore = 0;

nextButton.addEventListener("click", () => {
  if (currentQuestionID < 10) {
    if (currentQuestionID === 0) {
      currentQuestionID++;
    } else {
      checkAnswer(answer);
      currentQuestionID++;
    }
    updateQuestion(currentQuestionID);
  }
});

backButton.addEventListener("click", () => {
  if (currentQuestionID > 1) {
    currentQuestionID--;
    updateQuestion(currentQuestionID);
  }
});

function updateQuestion(currentQuestionID) {
  //create case statement for quiz pages
  //create object for user answers to avoid cheesing 10/10

  form.hidden = false;
  for (let i = 0; i < answer.length; i++) {
    quizQuestions[i].innerHTML =
      quizData[currentQuestionID - 1].possibleAnswers[i];
    answer[i].value = quizData[currentQuestionID - 1].possibleAnswers[i];
  }

  //if (currentQuestionID > 0) {
  questionHeader.innerHTML = `Question ${currentQuestionID}`;
  questionText.innerHTML = quizData[currentQuestionID - 1].questionText;
  //}

  updateButtonsText(currentQuestionID);
}

function updateButtonsText(currentQuestionID) {
  backButton.hidden = false;
  switch (currentQuestionID) {
    case currentQuestionID === 1: {
      backButton.innerHTML = "Return to Home Page";
    }

    default:
  }

  if (currentQuestionID === 1) {
    backButton.innerHTML = "Return to Home Page";
  } else {
    backButton.innerHTML = "Back";
  }

  if (currentQuestionID === 10) {
    nextButton.innerHTML = "End Quiz";
  } else {
    nextButton.innerHTML = "Next";
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
