// The filter function creates a new array with all elements that pass its query

const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// filter products for not available
const notAvailable = products.filter((product) => product.available !== true);
// console.log(notAvailable);

// pass in function as filter argument
const isLaptop = (value) => value.product === 'Laptop';
const filterLaptop = products.filter(isLaptop);
console.log(filterLaptop);
