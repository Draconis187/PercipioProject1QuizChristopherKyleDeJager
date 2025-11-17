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
    possibleAnswers: ["R2-D2", "C2P0", "BB-8", "Chopper"],
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

const userAnswers = [];
const wrongAnswers = [];

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const resetButton = document.getElementById("reset-button");

const questionText = document.getElementById("question-text");
const questionHeader = document.getElementById("question-header");
const quizQuestions = document.getElementsByName("quizQuestion");
const quizQuestionsText = document.getElementsByClassName("quizQuestionsText");

const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");

const results = document.getElementById("results");
const resultsText = document.getElementById("results-text");
const retryMessage = document.getElementById("retry-message");

const quizSummaryBlock = document.getElementById("quiz-summary");
const accordions = document.getElementsByClassName("accordion");
const accordionPanels = document.getElementsByClassName("panel");
const userAnswer = document.getElementById("user-answer");
const correctAnswer = document.getElementById("correct-answer");

let currentQuestionID = 0;
let quizScore = 0;

for (quizQuestion in quizQuestions) {
  quizQuestions[quizQuestion].onclick = function () {
    nextButton.disabled = false;
  };
}

nextButton.addEventListener("click", () => {
  if (currentQuestionID < 11) {
    if (currentQuestionID === 0) {
      currentQuestionID++;
    } else {
      checkAnswer(quizQuestions);
      currentQuestionID++;
    }
    updatePage(currentQuestionID);
  }
});

backButton.addEventListener("click", () => {
  if (currentQuestionID === 1) {
    if (window.confirm("If you go back, the quiz will be reset. Continue?")) {
      currentQuestionID--;
      updatePage(currentQuestionID);
      restartQuiz(currentQuestionID);
    }
  } else if (currentQuestionID > 1) {
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
    nextButton.disabled = true;
    updateQuestion(currentQuestionID);
  } else if (currentQuestionID === 0) {
    homePage.hidden = false;
    quizPage.hidden = true;
    resultsPage.hidden = true;
  } else if (currentQuestionID === 11) {
    resultsPage.hidden = false;
    quizPage.hidden = true;
    displayResults(currentQuestionID);
    if (wrongAnswers.length > 0) {
      quizSummaryBlock.hidden = false;
      quizSummary();
    } else {
      quizSummaryBlock.hidden = true;
    }
  } else {
    quizPage.hidden = true;
  }

  for (let i = 0; i < quizQuestions.length; i++) {
    if (
      quizQuestions[i].checked === true &&
      quizQuestions[i].value != userAnswers[currentQuestionID - 1]
    ) {
      quizQuestions[i].checked = false;
      //nextButton.disabled = true;
    } else if (quizQuestions[i].value === userAnswers[currentQuestionID - 1]) {
      quizQuestions[i].checked = true;
      nextButton.disabled = false;
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

    for (let i = 0; i < quizQuestions.length; i++) {
      quizQuestionsText[i].innerHTML =
        quizData[currentQuestionID - 1].possibleAnswers[i];
      quizQuestions[i].value =
        quizData[currentQuestionID - 1].possibleAnswers[i];
    }

    if (userAnswers[currentQuestionID - 1]) {
      for (let i = 0; i < quizQuestions.length; i++) {
        if (quizQuestions[i].value === userAnswers[currentQuestionID - 1]) {
          quizQuestions[i].checked = true;
        } else {
          quizQuestions[i].checked = false;
        }
      }
      updateButtons(currentQuestionID);
    }
  }
}

function updateButtons(currentQuestionID) {
  if (currentQuestionID === 0) {
    nextButton.disabled = false;
    backButton.hidden = true;
  }

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

function checkAnswer(quizQuestions) {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].checked === true) {
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
        } else if (
          selectedAnswer != quizData[currentQuestionID - 1].correctAnswer
        ) {
          wrongAnswers.push(currentQuestionID - 1);
        }
        userAnswers.push(selectedAnswer);
      }
    }
  }
}

function displayResults() {
  results.innerHTML = `${quizScore} out of 10`;

  if (quizScore < 10) {
    retryMessage.innerHTML =
      "If you would like to try and get a higher score, hit 'Restart Quiz'!";
  } else retryMessage.innerHTML = "Congrats on getting the top score!";

  switch (quizScore) {
    case 0:
      resultsText.innerHTML = "You have failed me for the last time";
      document.getElementById("results-image").src =
        "./QuizImages/StarWarsDarthVaderFailForTheLastTime.png";
      document.getElementById("results-image").alt =
        "Darth Vader you have failed me for the last time";
      break;
    case 1:
    case 2:
    case 3:
      resultsText.innerHTML = "I find your lack of score disturbing";
      document.getElementById("results-image").src =
        "./QuizImages/DarthVaderIFindYourLackOfScoreDisturbing.jpg";
      document.getElementById("results-image").alt =
        "Darth Vader I find your lack of score disturbing";
      break;
    case 4:
    case 5:
      resultsText.innerHTML = "Your score is on par with a Stormtrooper's aim";
      document.getElementById("results-image").src =
        "./QuizImages/StormTrooperAim.PNG";
      document.getElementById("results-image").alt = "Stormtrooper firing";
      break;
    case 6:
    case 7:
      resultsText.innerHTML = "Adequate performance for a rebel";
      document.getElementById("results-image").src =
        "./QuizImages/RebelAllianceGroupPicture.jpeg";
      document.getElementById("results-image").alt =
        "Rebels in a corridor with Han Solo, Leia Organa and Chewbacca";
      break;
    case 8:
    case 9:
    case 10:
      resultsText.innerHTML = "You have brought balance to the Force";
      document.getElementById("results-image").src =
        "./QuizImages/TheChosenOne.png";
      document.getElementById("results-image").alt = "The Chosen One";
      break;
  }
}

function restartQuiz(currentQuestionID) {
  quizScore = 0;
  userAnswers.length = 0;
  wrongAnswers.length = 0;
  while (quizSummaryBlock.hasChildNodes()) {
    quizSummaryBlock.removeChild(quizSummaryBlock.firstChild);
  }
  updatePage(currentQuestionID);
}

function questionAlreadySelected(currentQuestionID) {
  let i = 0;
  nextButton.disabled = true;
  while (i < quizQuestions.length) {
    i++;
    if (quizQuestions[i].checked != false) {
      nextButton.disabled = false;
      break;
    }
  }
}

function quizSummary() {
  const questionSummaryHeaderText = document.createElement("h4");
  questionSummaryHeaderText.innerHTML = "Quiz Summary";
  quizSummaryBlock.appendChild(questionSummaryHeaderText);

  for (let i = 0; i < wrongAnswers.length; i++) {
    const questionSummaryHeader = document.createElement("button");
    questionSummaryHeader.setAttribute("id", `Question ${wrongAnswers[i] + 1}`);
    questionSummaryHeader.classList.add("accordion");
    questionSummaryHeader.innerText = `Question ${wrongAnswers[i] + 1}`;

    const questionSummaryBody = document.createElement("div");
    questionSummaryBody.classList.add("panel");

    let questionSummaryQuestionText = document.createElement("p");
    questionSummaryQuestionText.innerHTML = `Question asked: ${
      quizData[wrongAnswers[i]].questionText
    }`;
    questionSummaryBody.appendChild(questionSummaryQuestionText);

    let questionSummaryUserAnswer = document.createElement("p");
    questionSummaryUserAnswer.innerHTML = `You answered: ${
      userAnswers[wrongAnswers[i]]
    }`;
    questionSummaryBody.appendChild(questionSummaryUserAnswer);

    let questionSummaryCorrectAnswer = document.createElement("p");
    questionSummaryCorrectAnswer.innerHTML = `Correct answer is: ${
      quizData[wrongAnswers[i]].correctAnswer
    }`;
    questionSummaryBody.appendChild(questionSummaryCorrectAnswer);

    questionSummaryHeader.addEventListener("click", () => {
      questionSummaryBody.classList.toggle("active");
      if (questionSummaryBody.style.display === "block") {
        questionSummaryBody.style.display = "none";
      } else {
        questionSummaryBody.style.display = "block";
      }
    });

    quizSummaryBlock.appendChild(questionSummaryHeader);
    quizSummaryBlock.appendChild(questionSummaryBody);
  }
}
