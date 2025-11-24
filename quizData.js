export const QuizQuestionData = [
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
  {
    questionID: 11,
    questionText:
      "Who did not receive a medal at the end of the original Empire Strikes Back?",
    possibleAnswers: ["Chewbacca", "R2-D2", "Han Solo", "Luke Skywalker"],
    correctAnswer: "Chewbacca",
  },
  {
    questionID: 12,
    questionText: "Who directed the prequel trilogy of the Star Wars movies?",
    possibleAnswers: [
      "George Lucas",
      "Kathleen Kennedy",
      "Richard Marquand",
      "Irvin Kershner",
    ],
    correctAnswer: "George Lucas",
  },
];

export function shuffleAndSliceNewQuiz(QuizQuestionData) {
  let currentIndex = QuizQuestionData.length;

  const newQuizList = QuizQuestionData;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [QuizQuestionData[currentIndex], QuizQuestionData[randomIndex]] = [
      QuizQuestionData[randomIndex],
      QuizQuestionData[currentIndex],
    ];
    QuizQuestionData[currentIndex].questionID = currentIndex + 1;
  }

  if (QuizQuestionData.length > 10) {
    const newQuizList = QuizQuestionData.slice(0, 10);
    return newQuizList;
  }

  return newQuizList;
}
