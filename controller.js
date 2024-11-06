const prompt = require("prompt-sync")();
const Customer = require("./models/customer.js");

const createCustomer = async () => {
  console.log("What is the new customer's name?");
  const name = prompt("# user inputs ");
  console.log("What is the new customer's age?");
  const age = Number(prompt("# user inputs "));
  const customerData = { name, age };
  const newCustomer = await Customer.create(customerData);
  console.log("Customer created:", newCustomer);
};

const viewCustomers = async () => {
  console.log("Below is a list of customers: ");
  const customers = await Customer.find({});
  customers.map((customer) =>
    console.log(
      `id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`
    )
  );
};

const updateCustomer = async () => {
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
  console.log("Updated customer:", updatedCustomer);
};

const deleteCustomer = async () => {
  console.log(
    "Copy and paste the id of the customer you would like to update here: "
  );
  const id = prompt("# user inputs ");
  const deletedCustomer = await Customer.findByIdAndDelete(id);
  console.log("Deleted Customer:", deletedCustomer);
};

module.exports = {
  createCustomer,
  viewCustomers,
  updateCustomer,
  deleteCustomer,
};
