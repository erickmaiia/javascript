/* Write a program that asks the user for their name and their three favorite foods. Then print the following message to the console:

```
These are UserName's favorite foods
- Food1
- Food2
- Food3
```
You should just use a console.log() for this */

namee = String(prompt("Whats your name? "));
food1 = String(prompt("Whats your first favorite food? "));
food2 = String(prompt("Whats your second favorite food? "));
food3 = String(prompt("Whats your third favorite food? "));

console.log(`This is one of ${namee} favorite foods`);
console.log(food1);
console.log(food2);
console.log(food3);
