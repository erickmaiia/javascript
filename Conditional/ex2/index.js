/* Write code that takes three values. An age, a Boolean that answers whether or not the person finished high school, and a Boolean that answers whether the person is attending a college.

Create an if for each variable, checking the following statements:

If the person is 18 years of age or older;
If the person finished high school;
If the person is NOT attending any college;
Create an if that prints that the statement is true, and an else to print that the statement is not true. */

const age = prompt("Your age: ");
const highSchool = prompt("Finished High school: ").toUpperCase().trim();
const universityEducation = prompt("Attended University Education: ")
  .toUpperCase()
  .trim();

if (age >= 18) {
  console.log("Of age");
} else {
  console.log("Minor");
}
if (highSchool === "YES") {
  console.log("High School completed");
} else {
  console.log("High School incomplete");
}
if (universityEducation === "YES") {
  console.log("Attended University Education");
} else {
  console.log("Not Attended University Education");
}
