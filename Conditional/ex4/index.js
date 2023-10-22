/* Create a code that receives a number per prompt and checks if a number is divisible by 2 or by 3 Do this: Using nested ifs */
const x = prompt("Write a number: ");

if (x % 3 === 0) {
  console.log("Divided by two or three");
} else if (x % 2 === 0) {
  console.log("Divided by two or three");
}

if (x % 2 === 0 || x % 3 === 0) {
  console.log("Divided by two or three");
}
