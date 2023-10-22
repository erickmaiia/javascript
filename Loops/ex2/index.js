/* Create a program that asks the user for a number input. With this number, the code must print the multiplication table, from 1 to 10. */

var x = Number(prompt("Write a number:  "));
var cont = 0;

while (cont !== 10) {
  cont += 1;
  console.log(x * cont);
}

/* for (let i = 0; i <= 10; i++) {
  console.log(x * i);
}
 */