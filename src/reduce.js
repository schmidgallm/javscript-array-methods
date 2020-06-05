// Reduce function outputs a single value by reducing all values

const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// add all prices together
const addPrices = products.reduce((total, product) => total + product.price, 0);
console.log(addPrices);
