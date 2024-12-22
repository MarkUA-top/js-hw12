// Task 1
let people = {
  hobby: "ggg",
  premium: true,
};
people.mood = "happy";
people.hobby = "skydiving";
people.premium = false;

Object.keys(people).forEach((key) => {
  console.log(`${key}: ${people[key]}`);
});

// Task 2
function countProps(obj) {
  return Object.keys(obj).length;
}
let user = {
  name: "Mark",
  password: 87654321,
  adres: "Vuluciya Bogdana Hmelnitcogo",
};

console.log(countProps(user));

// Task 3

function findBestEmployee(workers) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (let [name, tasks] of Object.entries(workers)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}
let workers = {
  Dima: 11,
  Tima: 12,
  Max: 9,
};

console.log(findBestEmployee(workers));

// Task 4
function countTotalSalary(employees) {
  let totalSalary = 0;
  for (let salary of Object.values(employees)) {
    totalSalary += salary;
  }
  return totalSalary;
}

const employees = {
  Tima: 500,
  Dima: 600,
  Olga: 300,
};

console.log(countTotalSalary(employees));

// Task 5
function getAllPropValues(arr, prop) {
  const values = [];
  for (let obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}
const products = [
  { name: "Apple", price: 10, quantity: 60 },
  { name: "Banana", price: 30, quantity: 30 },
  { name: "Cherry", price: 7, quantity: 275 },
];

console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

// Task 6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;
  for (let product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }
  return totalPrice;
}
const productsList = [
  { name: "Apple", price: 10, quantity: 60 },
  { name: "Banana", price: 30, quantity: 30 },
  { name: "Cherry", price: 7, quantity: 275 },
];

console.log(calculateTotalPrice(productsList, "Apple"));
console.log(calculateTotalPrice(productsList, "Banana"));
console.log(calculateTotalPrice(productsList, "Cherry"));

// Task 7
const account = {
  balance: 0,
  transactionHistory: [],

  deposit(amount) {
    if (amount <= 0) return "Введіть нормальну суму для поповнення";
    this.balance += amount;
    this.transactionHistory.push({
      type: "deposit",
      amount,
      balanceAfter: this.balance,
    });
    return `Депозит ${amount}. Баланс: ${this.balance}`;
  },

  withdraw(amount) {
    if (amount <= 0) return "Введіть нормальну суму для зняття грошей";
    if (amount > this.balance) return "Недостатньо грошей.";
    this.balance -= amount;
    this.transactionHistory.push({
      type: "withdraw",
      amount,
      balanceAfter: this.balance,
    });
    return `Зняття ${amount}. Баланс: ${this.balance}`;
  },

  getBalance() {
    return `Баланс: ${this.balance}`;
  },

  getTransactionHistory() {
    return this.transactionHistory.length === 0
      ? "Історія порожня."
      : this.transactionHistory
          .map(
            ({ type, amount, balanceAfter }) =>
              `${
                type.charAt(0).toUpperCase() + type.slice(1)
              } ${amount} — Баланс після: ${balanceAfter}`
          )
          .join("\n");
  },
};

console.log(account.deposit(200));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.deposit(250));
console.log(account.withdraw(140));
console.log(account.getTransactionHistory());
console.log(account.getBalance());
