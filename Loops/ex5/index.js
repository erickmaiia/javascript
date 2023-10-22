/* Create a program that asks the user for a number input. With this number, the code must print the multiplication table, from 1 to 10. */

var x = Number(prompt("Write a number:  "));
let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in ten) {
  console.log(x * i);
}
