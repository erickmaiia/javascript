/* Recreate exercise 3 from the previous lesson (A012) of conditionals I, using switch-case. In the script,js file there is a version of the code already written, but you can paste the exercise you did in the last practice! */

const nacionality = prompt("Your nacionality: ").toUpperCase().trim();

switch (nacionality) {
  case "BRAZILIAN":
    console.log("You are", nacionality);
    break;
  case "ARGENTINE":
    console.log("You are", nacionality);
    break;
  case "URUGUAY":
    console.log("You are", nacionality);
    break;
  case "CHILEAN":
    console.log("You are", nacionality);
    break;
  case "COLOMBIAN":
    console.log("You are", nacionality);
    break;
  default:
    console.log("Nacionality not found");
    break;
}
