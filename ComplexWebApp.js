/*
File Name: ComplexWebApp.js
Description: A complex JavaScript code implementing a web application for managing user accounts and transactions.
*/

// User constructor function
function User(name, email, username, password) {
  this.name = name;
  this.email = email;
  this.username = username;
  this.password = password;
  this.balance = 0;
  this.transactions = [];
}

// Transaction constructor function
function Transaction(type, amount, timestamp) {
  this.type = type;
  this.amount = amount;
  this.timestamp = timestamp;
}

// Global variables
let currentUser = null;
const users = [];

// Function to register a new user
function registerUser(name, email, username, password) {
  const userExists = users.some(user => user.username === username || user.email === email);
  if (userExists) {
    console.log("Username or email already in use. Please choose different credentials.");
    return;
  }
  const newUser = new User(name, email, username, password);
  users.push(newUser);
  console.log("User registration successful!");
}

// Function to authenticate and login a user
function loginUser(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    console.log("Invalid username or password. Please try again.");
    return;
  }
  currentUser = user;
  console.log("Login successful!");
}

// Function to log out the current user
function logoutUser() {
  currentUser = null;
  console.log("Logged out successfully.");
}

// Function to create a new transaction
function createTransaction(type, amount) {
  if (currentUser) {
    const timestamp = new Date().toLocaleString();
    const transaction = new Transaction(type, amount, timestamp);
    currentUser.transactions.push(transaction);
    if (type === "deposit") {
      currentUser.balance += amount;
    } else if (type === "withdraw") {
      if (currentUser.balance < amount) {
        console.log("Insufficient funds.");
        return;
      }
      currentUser.balance -= amount;
    }
    console.log("Transaction created successfully!");
  } else {
    console.log("Please log in first.");
  }
}

// Function to get transaction history for the current user
function getTransactionHistory() {
  if (currentUser) {
    console.log(`Transaction History for ${currentUser.username}:`);
    currentUser.transactions.forEach((transaction, index) => {
      console.log(`Transaction ${index + 1} - Type: ${transaction.type}, Amount: ${transaction.amount}, Timestamp: ${transaction.timestamp}`);
    });
  } else {
    console.log("Please log in first.");
  }
}

// Register some users
registerUser("John Doe", "john.doe@email.com", "johndoe", "password123");
registerUser("Jane Smith", "jane.smith@email.com", "janesmith", "password456");

// Log in a user
loginUser("johndoe", "password123");

// Create some transactions
createTransaction("deposit", 1000);
createTransaction("withdraw", 250);

// Get transaction history
getTransactionHistory();

// Log out the current user
logoutUser();