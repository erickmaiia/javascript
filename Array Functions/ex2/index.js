/* Exercise 2
Create an array of numbers that contains 8 numbers. After that, use this array to create two map() array functions:

1. The first one should return a new array containing the numbers multiplied by 3, Create a triple const, and store the array value in this const;

2. The second should return a new array containing the numbers divided by 2. Create a const halves, and store the array value in this const; */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* 1 */
const triples = numbers.map((item) => {
  return item * 3;
});
console.log(triples);

/* 2 */
const doble = numbers.map((item) => {
  return item / 2;
});
console.log(doble);
