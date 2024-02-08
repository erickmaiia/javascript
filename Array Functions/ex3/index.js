/* Exercise 3
Given an array of products, where each product is an object with name, price and category, return a new array with the name of the products in the Cleaning category. */

const products = [
  { namee: "Alface Lavada", category: "Hortifruti", price: 2.5 },
  { namee: "Guaraná 2l", category: "Drinks", price: 7.8 },
  { namee: "Veja Multiuso", category: "Cleaning", price: 12.6 },
  { namee: "Dúzia de Banana", category: "Hortifruti", price: 5.7 },
  { namee: "Leite", category: "Drinks", price: 2.99 },
  { namee: "Cândida", category: "Cleaning", price: 3.3 },
  { namee: "Detergente Ypê", category: "Cleaning", price: 2.2 },
  { namee: "Vinho Tinto", category: "Drinks", price: 55 },
  { namee: "Berinjela kg", category: "Hortifruti", price: 8.99 },
  { namee: "Sabão em Pó", category: "Cleaning", price: 10.8 },
];

const cleaningCategory = products.filter((item) => {
  return item.category === "Cleaning";
});
console.log(cleaningCategory);

/* const newArray = [];

for (let i in products) {
  if (products[i].category === "Cleaning") {
    newArray.push(products[i].namee);
  }
}
console.log(newArray);
 */
