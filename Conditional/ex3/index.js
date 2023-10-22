/* Create code that receives a prompt that says: "Write your nationality here" and store the response value in a nationality const.
Let's assume that our program accepts the following 5 nationalities:
Brazilian;
Argentina;
Uruguayan;
Chilean;
Colombian;
Create an if/else if/else structure that checks if the nationality stored in the nationality const is equal to each of the above nationalities, and if so, print the nationality in the console. The last else should print "nationality not found" if the nationality value does not match any of the values. */

const nacionality = prompt("Your nacionality: ").toUpperCase().trim();

if (nacionality === "BRAZILIAN") {
  console.log("You are", nacionality);
} else if (nacionality === "ARGENTINE") {
  console.log("You are", nacionality);
} else if (nacionality === "URUGUAY") {
  console.log("You are", nacionality);
} else if (nacionality === "CHILEAN") {
  console.log("You are", nacionality);
} else if (nacionality === "COLOMBIAN") {
  console.log("You are", nacionality);
} else {
  console.log("Nacionality not found");
}
