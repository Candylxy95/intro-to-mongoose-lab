const prompt = require("prompt-sync")();
const Customer = require("../models/customer");

const createCustomer = async () => {
  try {
    console.log("What is the new customer's name?");
    const name = prompt("# user inputs ");
    console.log("What is the new customer's age?");
    const age = Number(prompt("# user inputs "));
    const customerData = { name, age };
    const newCustomer = await Customer.create(customerData);
    if (newCustomer) {
      console.log("Customer created:", newCustomer);
    } else console.log("Creation of customer unsuccessful");
  } catch (error) {
    console.error("Error: ", error);
  }
};

const viewCustomers = async () => {
  try {
    console.log("Below is a list of customers: ");
    const customers = await Customer.find({});
    if (customers) {
      customers.map((customer) =>
        console.log(
          `id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`
        )
      );
    } else {
      console.log("Unable to view customers");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateCustomer = async () => {
  try {
    console.log(
      "Copy and paste the id of the customer you would like to update here: "
    );
    const id = prompt("# user inputs ");
    console.log("What is the customer's new name?");
    const name = prompt("# user inputs ");
    console.log("What is the customer's new age?");
    const age = prompt("# user inputs ");
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, age },
      { new: true }
    );

    if (updatedCustomer) {
      console.log("Successfully updated customer:", updatedCustomer);
    } else {
      console.log("Please enter valid fields or id");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteCustomer = async () => {
  try {
    console.log(
      "Copy and paste the id of the customer you would like to update here: "
    );
    const id = prompt("# user inputs ");
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (deletedCustomer) {
      console.log("Deleted Customer:", deletedCustomer);
    } else {
      console.log("Customer ID not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = {
  createCustomer,
  viewCustomers,
  updateCustomer,
  deleteCustomer,
};
