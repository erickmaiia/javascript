/* Build a program by following these steps:

a) Declare a variable to store a name, without assigning a value.

b) Declare a variable to store an age, without assigning a value.

c) Print on the screen the type of these variables that you just created, using the typeof command.

d) Reflect: why was this type printed? Write the answer in a code comment.

e) After that, update the code to ask the user for their name and age, assigning those two values ​​to the variables you just created.

💡If you get a code error in this step, reflect on the type of declaration you used.

f) Again, print the type of these variables on the screen. What did you notice? Write in a code comment.

g) Finally, print on the screen the message: "Hello name, are you old?" Where name and age are the values ​​the user entered

💡 Tip: to print more than one value on the same line, you can use this syntax:

console.log(value1, value2) */

/* a */
var namee;

/* b */
var age;

/* c */
console.log(typeof namee);
console.log(typeof age);

/* d */ // ele entendeu como undefined pq não foi atribuido nenhum tipo a variavel

/* e */
namee = prompt("Whats your name?");
age = prompt("Whats your age?");

/* f */ // ele retornou uma string nas duas pois a função prompt usada para alterar o valor das variaveis retorna uma string
console.log(typeof namee);
console.log(typeof age);

/* g */
alert(
  `Hello ${namee}, you have ${age} years. Where ${namee} and ${age} are the values of the user insert`
);
