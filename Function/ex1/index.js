/* Exercise 1
a) Declare a function that prints Hello, [YOUR NAME]!. Call this function.

b) Declare a function that prints the 6 times table. Call this function.

c) Comment out the functions created above, and rewrite them using function expressions, or arrow functions */

/* a */

const helloUser = (x = "") => {
  console.log(`Hello ${x}`);
};

helloUser("Erick");

/* b */
const timesTableof6 = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i * 6);
  }
};

timesTableof6();
