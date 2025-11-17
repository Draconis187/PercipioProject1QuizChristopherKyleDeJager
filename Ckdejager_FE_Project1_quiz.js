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
    answer: "The Chosen One",
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
    answer: "Lando Calrissian",
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
    answer: "Exposed exhaust port",
  },
  {
    questionID: 4,
    questionText: "Who imprisoned Han Solo in Carbonite?",
    possibleAnswers: ["Jango Fett", "Boba Fett", "His mother", "Chewbacca"],
    answer: "Boba Fett",
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
    answer: "Cal Kestis",
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
    answer: "Mace Windu",
  },
  {
    questionID: 7,
    questionText:
      "What is the name of the droid that was made by Anakin Skywalker when he was a child?",
    possibleAnswers: ["R2-D2", "C2P0", "BB-8", "Chopper"],
    answer: "R2-D2",
  },
  {
    questionID: 8,
    questionText:
      "Where did Obi-Wan Kenobi and Anakin Skywalker have their duel against each other that resulted in Anakin becoming Darth Vader?",
    possibleAnswers: ["Dagobah", "Naboo", "Coruscant", "Mustafar"],
    answer: "Mustafar",
  },
  {
    questionID: 9,
    questionText:
      "What is the actual name of the Destroyer Droid deployed by the Confederacy of Independent Systems?",
    possibleAnswers: ["Super Battle", "Commando", "Droideka", "Magnaguard"],
    answer: "Droideka",
  },
  {
    questionID: 10,
    questionText:
      "Who were the developers of the original Star Wars Battlefront games published by LucasArts?",
    possibleAnswers: ["Sickness", "Pandemic", "Electronic Arts", "DICE"],
    answer: "Pandemic",
  },
];

export default QuizQuestionData;

//randomise?
//take the ID then randomise it between 1 and 10 (0-9) because array
//whatever number is taken can not be used again
//add a check to ensure that the number is not reused

//return the array for each id

/*
function randomiseQuiz(quizQuestions){
    quizQuestions.forEach(element => {
        
    });
}


function DisplayQuizQuestion(){

}

function onClick(quizQuestion, userAnswer){
//get the object
// check userAnswer against answer in object
//call a function to add whether answer is correct or incorrect to it
//increment the id and get the next question

}
*/

/*
Need to display as one page
    questions
    buttons

"Pages" needed
    Homepage
    questions
    results with restart option or homepage

for Homepage
    show an image of something with the title above it or below
    button centered in the middle
    button starts the quiz at 1

    instructions on page before the button to start the quiz

for Questions
    need to start at 1
    user selects and answer as a radio button
    user selects next
    final question has "next" button say "Submit"

for results
    needs to show score
    button for restart or back to homepage

Nice to haves/extras to add?
    randomise questions
    Show which questions were wrong on the result screen
*/
