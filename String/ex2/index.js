/* Look at the string below.

const myString = "I'm not superstitious, but I'm a little ________.";
From there, follow the steps below:

a) Remove excess spaces at the end of the string;

b) display, in a console.log(), the number of characters in the string, before and after removing spaces;

c) Replace the dashes ________ with “sticious”. */

const myString = "Im not superstitious, but im a little ________.      ";
const myNewstring = myString.trim();
console.log(myNewstring.replaceAll("________", "stitious"));
