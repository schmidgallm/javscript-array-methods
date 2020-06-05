// Sort method sorts elements of array based on your desire.
// Default is ascending

const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// sort by price ascending order
const ascPrice = products.sort((a, b) => a.price - b.price);
console.log(ascPrice);

// Objects can be sorted, given the value of one of their properties.
const sort = products.sort((a, b) => {
  if (a.product > b.product) return 1;
  return 0;
});
console.log(sort);
