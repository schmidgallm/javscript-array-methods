// The map function creates a new array popluated with results of modified query results on each element

const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// init new array with only prices
const prices = products.map((product) => product.price);
console.log(prices);

// init new array with all prices doubled
const priceDoubled = products.map((product) => product.price * 2);
console.log(priceDoubled);
