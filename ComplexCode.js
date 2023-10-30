/*
Filename: ComplexCode.js

Description: This code simulates a complex banking application that manages customer accounts, transactions, and balances.

Disclaimer: This code is for demonstration purposes only and may not cover all real-world scenarios or handle potential errors.

*/

// Account class to represent a customer account
class Account {
  constructor(accountNumber, accountType, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount, description) {
    if (amount <= 0) {
      throw new Error("Amount must be a positive number.");
    }

    this.balance += amount;
    this.transactions.push({
      type: "Deposit",
      amount,
      description,
      date: new Date(),
    });

    // Additional complex banking logic

    console.log(`Successfully deposited ${amount} into account ${this.accountNumber}.`);
  }

  withdraw(amount, description) {
    if (amount <= 0) {
      throw new Error("Amount must be a positive number.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient funds. Cannot withdraw amount higher than the balance.");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "Withdrawal",
      amount,
      description,
      date: new Date(),
    });

    // Additional complex banking logic

    console.log(`Successfully withdrew ${amount} from account ${this.accountNumber}.`);
  }

  getBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  }

  getTransactionHistory() {
    console.log(`Account ${this.accountNumber} transaction history:`);
    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      console.log(`   - Type: ${transaction.type}`);
      console.log(`     Amount: ${transaction.amount}`);
      console.log(`     Description: ${transaction.description}`);
      console.log(`     Date: ${transaction.date}`);
    }
  }
}

// Create customer accounts
const account1 = new Account("1001", "Savings", 1000);
const account2 = new Account("1002", "Checking", 5000);

// Perform transactions
account1.deposit(500, "Salary");
account2.withdraw(200, "Groceries");
account1.withdraw(100, "Shopping");

// Get account balances and transaction history
account1.getBalance();
account2.getBalance();

account1.getTransactionHistory();
account2.getTransactionHistory();

// Additional complex banking logic and application flow can be added as needed

// This code can be much more extensive in a real banking application, with authentication, validation, error handling, database interactions, etc.