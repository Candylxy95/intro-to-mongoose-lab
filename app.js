const prompt = require("prompt-sync")();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const {
  createCustomer,
  viewCustomers,
  updateCustomer,
  deleteCustomer,
} = require("./controller.js");

const runQueries = async () => {
  let running = true;

  while (running) {
    console.log("Welcome to CRM");
    console.log("What would you like to do?");
    console.log("1. Create a customer");
    console.log("2. View all customers");
    console.log("3. Update a customer");
    console.log("4. Delete a customer");
    console.log("5. Quit");
    console.log("Number of action to run");

    const userInput = prompt("# user inputs ");

    switch (Number(userInput)) {
      case 1:
        await createCustomer();
        break;

      case 2:
        await viewCustomers();
        break;

      case 3:
        await viewCustomers();
        await updateCustomer();
        break;

      case 4:
        await viewCustomers();
        await deleteCustomer();
        break;

      case 5:
        console.log("Exiting...");
        running = false;
        await mongoose.connection.close();
        break;
    }
  }
};

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  await runQueries();
  await mongoose.disconnect();

  console.log("Disconnected from MongoDB");
  process.exit();
};

const username = prompt("What is your name? ");
console.log(`Your name is ${username}`);
connect();
