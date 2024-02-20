// 1
const user = {
  name: "Khrystyna",
  age: 16,
  hobby: "sinning",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//2
console.log(`===`);

function countProps(obj) {
  return Object.keys(obj).length;
}

const numberOfProps = countProps(user);
console.log(`The number of properties in the object: ${numberOfProps}`);

//3
console.log(`===`);

function findBestEmployee(employees) {
  let bestEmployee = null;
  let maxTasks = 0;

  for (const employee in employees) {
    const tasksCompleted = employees[employee];

    if (tasksCompleted > maxTasks) {
      maxTasks = tasksCompleted;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

const team = {
  Janson: 9,
  Jared: 13,
  Mark: 5,
  Misha: 2,
  Bobby: 17,
};

let bestEmployeeName = findBestEmployee(team);
console.log(`The best employee is: ${bestEmployeeName}`);

//4
console.log(`===`);

function countTotalSalary(employees) {}

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const employee in employees) {
    totalSalary += employees[employee];
  }

  return totalSalary;
}

let salaryData = {
  Janson: 9000,
  Jared: 13000,
  Mark: 5000,
  Misha: 2000,
  Bobby: 17000,
};

let totalSalary = countTotalSalary(salaryData);
console.log(`Загальна сума зарплати: ${totalSalary}`);

//5

console.log(`===`);

function getAllPropValues(arr, prop) {
  let propValues = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      propValues.push(obj[prop]);
    }
  }

  return propValues;
}

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

let prices = getAllPropValues(products, "price");
console.log(`Масив цін: ${prices}`);

//6
console.log(`===`);

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return 0;
}

let productsData = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Tablet", price: 300, quantity: 1 },
];

let totalPrice = calculateTotalPrice(productsData, "Phone");
console.log(`Загальна вартість продукту: ${totalPrice}`);

//7
console.log(`===`);

const account = {
  balance: 1000,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount, date: new Date() });
    console.log(
      `Deposit of $${amount} successful. New balance: $${this.balance}`
    );
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds. Withdrawal failed.");
    } else {
      this.balance -= amount;
      this.transactions.push({ type: "withdrawal", amount, date: new Date() });
      console.log(
        `Withdrawal of $${amount} successful. New balance: $${this.balance}`
      );
    }
  },

  getBalance() {
    console.log(`Current balance: $${this.balance}`);
  },

  getTransactionHistory() {
    console.log("Transaction History:");
    this.transactions.forEach((transaction) => {
      console.log(
        `Type: ${transaction.type}, Amount: $${transaction.amount}, Date: ${transaction.date}`
      );
    });
  },
};

account.getBalance();
account.deposit(500);
account.withdraw(200);
account.getBalance();

account.getTransactionHistory();
