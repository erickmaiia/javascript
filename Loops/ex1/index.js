/* Using the while loop, write code that receives a prompt asking if the person wants to eat more drumsticks. “S” must represent “yes”, and “N” must represent “no”. Also create a let account to store the total amount.

Every time the answer is yes, the loop must repeat itself, and we must add $2.50 to the total amount. When the answer is no, we must print the total amount of the bill. */

var x = String(prompt("Do you want eat more coxinha? ")).toUpperCase().trim();
var balance = 0;

while (x !== "N") {
  x = String(prompt("Do you want eat more coxinha? ")).toUpperCase().trim();
  balance += 2.5;
}
console.log("Your balance is", balance);
