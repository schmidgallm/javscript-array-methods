const products = [
  { product: 'Laptop', price: 99, available: true },
  { product: 'Monitor', price: 55, available: true },
  { product: 'TV', price: 599, available: false },
  { product: 'Keyboard', price: 109, available: true },
  { product: 'Mouse', price: 49, available: false },
];

// old way using for loop
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// using forEach method
products.forEach((product) => console.log(product));

// using forEach with iterator
products.forEach((product, iterator) => console.log(product, iterator));
