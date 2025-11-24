# Star Wars Quiz Documentation

## Project purpose

The purpose of this project is to test one's knowledge from questions drawn from the Star Wars games and movies.
This consists of ten multiple choice questions.

## Project value

The value of the quiz is to improve the general knowledge of those taking the quiz and to have fun. The quiz includes some images for the beginning and the summary based on how well the user performed on the quiz.

### Code used

The randomiser function was drawn from Stack Overflow which can be seen here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
The logic used the quizAnswer function uses the querySelector which the MSDN documentation for the radio input was used: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio
Accordion logic made use of the w3schools page: https://www.w3schools.com/howto/howto_js_accordion.asp

### Testing procedures and findings

Tested initially as a local file, was shown the Live Server extension which allowed the use of the "type=module" attribute in the script tag for the javascript file. This enabled the use of importing other javascript files into the main script file used in the html.
In order to locate the source of bugs or logic not working correctly, logging to the console was used.

Bugs encountered:

1. When importing the data file into the main javascript file, the correct answer shown when running the application came back as undefined. This was due to a naming change that had occured in the quiz object in the main javascript file. This change was not moved over to the data file which caused the bug. Changing the object's name from "answer" to "correctAnswer" corrected the bug.
2. Not being able to import the data file into the main javascript file. This was due to two reasons. The first reason was due to the "type=module" attribute missing from the script tag in the html file. The second reason was, due to running locally as a file and not as an application on a server, Chrome disallowed the use of importing files.
3. There were some spacing issues with the images on the background, on the right side of the screen. This was due to some clashing css with the "max-width" used for the background and the image tag.
