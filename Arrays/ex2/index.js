/* Exercise 2
With the arrays created, now let's look at the arrays. Do what is asked below, using console.log():

Print the number of items in each array (use a console.log() for each print);
Print the first item from the first array, the second item from the second array, and the third item from the third array;
Print a true boolean information about the inclusion of an item in the first array, and a false boolean information about the inclusion of an item in the third array. That is, a true includes(), and a false one. */

const array1 = [1, 2, 3];
const array2 = ["Pizza", "Hamburguer", "Pie"];
const array3 = [1, "Pizza", 4 > 3];

console.log(array1.length);
console.log(array2.length);
console.log(array3.length);

console.log(array1[0]);
console.log(array2[1]);
console.log(array3[2]);

console.log(array1.includes(4));
console.log(array2.includes("Pizza"));
