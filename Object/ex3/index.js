/* Observe the object below and, using scattering, solve the following exercises:

const pokemon1 = {
name: "Bulbasaur",
type: "Grass",
level: 5
};
a) Create a copy of the object, above, keeping the structure, but changing the name to “Squirtle” and type to “Water”

b) On the original object, add one more property, called attacks. This property must store an array of objects with the structure below. Start the property as an empty array, and create the object below using **push()**

name: Onslaught;
damage: 40;
type: Normal;
precision: 100;
c) In the copy of the original object, add the attacks property from the spread of the created property to the original object;

d) for the original object, add the “Razor Leaf” attack, with 45 damage, 100 accuracy, and of type “Grass”;

e) for the copy, create the “Water Jet” attack, with 40 damage, 100 accuracy, and of the “Water” type;

f) Print the two objects to the console. */

const pokemon1 = {
  namee: "Bulbasaur",
  type: "Gram",
  level: 5,
  attack: [],
};

pokemon1.attack.push({
  namee: "Charge",
  damage: 40,
  type: "Normal",
  precision: 100,
});

pokemon1.attack.push({
  namee: "Razor Leaf",
  damage: 45,
  type: "Gram",
  precision: 100,
});

console.log(pokemon1);

const pokemon2 = {
  namee: "Squirtle",
  type: "Water",
  level: 5,
  attack: [],
};

pokemon2.attack.push({
  namee: "Water jet",
  damage: 40,
  type: "Water",
  precision: 100,
});
console.log(pokemon2);
