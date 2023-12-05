/*
Filename: complexApp.js

Description: This code is a complex, sophisticated and elaborate JavaScript application. It showcases various programming concepts and demonstrates a functional e-commerce website with user authentication, cart functionality, and product management.

Please note that this code is a simplified demonstration and may not include all necessary details for a real-world application.

*/

// User model
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// Product model
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getSummary() {
    return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
  }
}

// Cart model
class Cart {
  constructor(user) {
    this.user = user;
    this.products = [];
  }

  addToCart(product) {
    this.products.push(product);
  }

  removeFromCart(product) {
    const index = this.products.findIndex(p => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  }
}

const user1 = new User("John Doe", "john.doe@example.com", "password123");

const product1 = new Product("Shirt", 24.99, 2);
const product2 = new Product("Shoes", 49.99, 1);
const product3 = new Product("Hat", 14.99, 3);

const cart = new Cart(user1);

cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product3);

console.log("User Info:", user1.getInfo());
console.log("Cart Products:", cart.products);
console.log("Total Price:", cart.getTotalPrice());

cart.removeFromCart(product2);
console.log("Cart Products after removing:", cart.products);
console.log("Total Price after removing:", cart.getTotalPrice());

// ... rest of the application's code, including authentication, product management, and UI interactions
// This code is simplified and doesn't include all the details for a complete e-commerce application.