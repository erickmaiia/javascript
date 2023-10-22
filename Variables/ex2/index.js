/* Write a program that asks 3 Yes or No questions, and stores each answer in a variable. For example: "Are you wearing a blue outfit today?". Then follow the steps:

a) Create three new variables, containing the answers;

b) Print all the answers on the screen. For example:

YEA
YEA
NO
c) Change your program so that the text of the questions is also stored in variables. Your command prompt should change a bit, as shown below:

sending the question as direct text
const answerA = prompt("Are you wearing a blue outfit today?");

sending the question as a variable
const questionA = "Are you wearing a blue outfit today?";
const answerA = prompt(questionA);
d) Change your program so that the printout of the answers also has the questions. For example:

Are you wearing a blue outfit today? - YEA */


/* a */

var answerA = "YES";
var answerB = "YES";
var answerC = "NO";

/* b */
console.log(answerA);
console.log(answerB);
console.log(answerC);

/* c */
const questionA = "Are you wearing a blue outfit today?";
const questionB = "Are you wearing a red outfit today?";
const questionC = "Are you wearing a black outfit today?";

var answerA = prompt(questionA);
var answerB = prompt(questionB);
var answerC = prompt(questionC);

/* d */
alert(questionA + " " + "-" + " " + answerA);
alert(questionB + " " + "-" + " " + answerB);
alert(questionC + " " + "-" + " " + answerC);
