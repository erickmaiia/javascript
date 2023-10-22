/* An analyst wants to be able to see how many goals each of your 5 forwards has scored in the last 5 seasons, and wants you to build code that shows that. */

const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];
for (let i in array) {
  for (let j in array) {
    console.log(`Jogardor ${Number(i) + 1}: ${array[i]}`);
  }
}
