/* Exercise 2
Declare and call the functions below:

a) A function that takes 2 numbers as parameters, and, inside the function, does the sum of the two inputs and prints the result. Invoke the function and print the result to the console.

b) A function that takes 2 numbers and prints a boolean that tells you whether the first number is greater than or equal to the second.

c) A function that takes a number and prints whether it is even or not

d) A function that takes a message (string) as a parameter and prints the size of that message, along with a version of it containing only capital letters. */

/* a */
const sum = (x, y) => {
  return console.log(x + y);
};

sum(1, 2);

/* b */
const biggerThen = (x, y) => {
  return console.log(x > y);
};

biggerThen(1, 2);

/* c */
const pair = (x) => {
  if (x % 2 === 0) {
    console.log("This number is pair", x);
  } else {
    console.log("This number is not pair", x);
  }
};

pair(2);

/* d */
const message = (string = "") => {
  console.log(string.length, string.toUpperCase());
};

message("Hello word");
