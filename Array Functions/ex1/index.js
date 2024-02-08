/* Exercise 1
Create two functions that take an object as a parameter.

1. The first must return the object, changing its properties so that they are in ALL CAPS.

2. The second should return the object's values as plain text.

3. Then create a function that takes an object and a callback as parameters. The function must pass the object as an argument to the callback function, and then print the returned value.

Call function 3, passing as arguments the object passed in the script.js file, and function 1. Repeat the process for function 2 */

const obj = {
  firstName: "julio",
  lastName: "silva",
  password: "juliosilva123",
  profession: "dev",
};

/* 1. */
const F1 = (obj) => {
  for (const i in obj) {
    console.log(i + " = " + obj[i].toUpperCase());
  }
};
F1(obj);

/* 2 */
const F2 = (obj) => {
  const obj1 = { ...obj };
  console.log(
    `firstName: ${obj1.firstName} lastName: ${obj1.lastName} profession: ${obj1.profession} password: ${obj1.password}`
  );
};
F2(obj);

/* 3 */
const F3 = (callback, obj) => {
  console.log(callback(obj));
};

F3(F1, obj);

F3(F2, obj);
