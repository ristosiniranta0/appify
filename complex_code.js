/**
 * Filename: complex_code.js
 * 
 * Description: This code demonstrates a complex JavaScript implementation for an e-commerce website checkout process.
 * It includes handling user input, validating forms, calculating totals, applying discounts, and displaying order details.
 * 
 * Note: This is a fictional implementation and doesn't connect to any backend or actual e-commerce system.
 */
 
// Define product details
const products = [
  { id: 1, name: 'Product A', price: 19.99 },
  { id: 2, name: 'Product B', price: 29.99 },
  { id: 3, name: 'Product C', price: 9.99 },
  // ... more products ...
];

// Define discount rules
const discountRules = [
  { eligibility: { minTotal: 100 }, discountPercentage: 10 },
  { eligibility: { minTotal: 200 }, discountPercentage: 20 },  
];

// Define order details
let order = {
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};

// Function to calculate the order total with applied discount
function calculateTotal() {
  order.subtotal = order.items.reduce((sum, item) => {
    return sum + (item.quantity * item.product.price);
  }, 0);
  
  order.discount = discountRules.reduce((discount, rule) => {
    if (order.subtotal >= rule.eligibility.minTotal && rule.discountPercentage > discount) {
      return rule.discountPercentage;
    }
    return discount;
  }, 0);
  
  order.total = order.subtotal - (order.subtotal * order.discount / 100);
}

// Function to display order details to the user
function displayOrder() {
  console.log('------------------------------');
  console.log('Order Summary:');
  
  for (const item of order.items) {
    console.log(`${item.quantity}x ${item.product.name} - $${item.quantity * item.product.price}`);
  }
  
  console.log('------------------------------');
  console.log(`Subtotal: $${order.subtotal.toFixed(2)}`);
  console.log(`Discount: ${order.discount}%`);
  console.log(`Total: $${order.total.toFixed(2)}`);
  console.log('------------------------------');
}

// Function to validate user's entered quantity for a product
function validateQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0;
}

// Function to handle the checkout process
function checkout() {
  console.log('Welcome to our Checkout Process!');
  
  let running = true;
  
  while (running) {
    console.log('\nAvailable Products:');
    
    for (const product of products) {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    }
    
    const productId = parseInt(prompt('Enter the product ID to add to your order (or 0 to checkout):'));
    if (productId === 0) {
      running = false;
      break;
    }
  
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      console.log('Invalid product ID. Please try again.');
      continue;
    }
    
    const quantity = parseInt(prompt(`Enter quantity for ${product.name}:`));
    if (!validateQuantity(quantity)) {
      console.log('Invalid quantity. Please try again.');
      continue;
    }
    
    order.items.push({ product, quantity });
    
    console.log(`Added ${quantity}x ${product.name} to your order.`);
  }
  
  calculateTotal();
  displayOrder();
  
  console.log('Thank you for shopping with us!');
}

// Start the checkout process
checkout();