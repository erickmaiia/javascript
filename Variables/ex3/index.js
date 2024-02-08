/* Suppose we have two variables a and b, each with an initial value

let a = 10
let b = 25
Now we want to swap their values so that a becomes the value of b and b becomes the value of a.

That is, in the case of this example above, a would become 25 and b would become 10.

let a = 10
let b = 25

Here we will make a logic to change the values

After swapping, we will have the following result:

console.log("The new value of a is", a) // The new value of a is 25
console.log("The new value of b is", b) // The new value of b is 10
Create the logic that must be inserted in the code so that the values of a and b are exchanged, regardless of what value these variables initially assume (that is: it is not enough to say that a = 25 and b = 10 because if the initial values change, the logic of the your program would have to change too). */

let a = 10;
let b = 25;
let c;

console.log("A is", a);
console.log("B is", b);

c = a;
a = b;
b = c;

console.log("The new value of A is", a);
console.log("The new value of B is", b);
