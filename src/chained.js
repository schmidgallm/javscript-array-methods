// All array methods can be chained together.
// Lets take sample data and chain all methods together to create new array

const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// chain filter, reduce and map togetehr to create one array

// filter for available product
// map through each and double product
// reduce prices to total number
const chain = products
  .filter((a) => a.available)
  .map((b) => b.price * 2)
  .reduce((total, num) => total + num, 0);

console.log(chain);

/*
//
// SPECIAL NOTE
//
// Beware of chaining complex and large data sets as this can cause performance slow downs
*/
