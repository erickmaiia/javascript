/* Create an empty array called bag, and follow the steps below:

a) Create three objects that will represent fruits from the grocery store. Objects must have the following properties:

name: string;
price: number;
availability: boolean;
b) Add the objects to the bag array using the push() method

c) Print the bag array, and make sure that it is now an array with three objects */

const bag = [];
obj1 = {
  name: "Orange",
  price: 2,
  disponibility: true,
};
obj2 = {
  name: "Banana",
  price: 1,
  disponibility: false,
};
obj3 = {
  name: "Apple",
  price: 3,
  disponibility: true,
};
bag.push(obj1, obj2, obj3);
console.log(bag);
