/* From the following sentence, do what is asked

Jorge has a green house with a blue gate, with the words: "WELCOME, but don't let the cat out"
a) Create a const in your code to store the phrase (with quotes and all);

b) Create a new string from the first one, changing green to pink, and blue to orange;

c) Check that the new string includes green, and that it includes orange.

EXTRA: try to make the “but don’t let the cat out” capitalize, as well as the “WELCOME” */

const welcome =
  'Jorge have a green house with a blue door, with the sayings:"WELCOME, but dont let cat get out"';
const newWelcome = welcome.replace("green", "pink").replace("blue", "orange");
console.log(newWelcome);
console.log(newWelcome.includes("green"));
console.log(newWelcome.includes("orange"));
console.log(
  newWelcome.replaceAll("but dont let cat get out", "BUT DONT LET CAT GET OUT")
);
