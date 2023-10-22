/* Write a program that asks the user for two numbers. Then do the operations and print to the console the following messages followed by true or false:

Is the first number greater than the second? true
Is the first number the same as the second? false
Is the first number divisible by the second? true
Is the second number divisible by the first? true

divisible = with zero remainder

Note: True or false will depend on the numbers entered and the result of the operations.
 */
var x = Number(prompt("Write a number: "));
var y = Number(prompt("Write a number: "));

console.log("The first number is bigger then second?", x > y);
console.log("The first number is equal to the second?", x === y);
console.log("The first number is divisible to the second?", x % y === 0);
console.log("The second number is divisible to the first?", y % x === 0);
