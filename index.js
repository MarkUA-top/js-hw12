// // Task 1
// let user = {
//   hobby: "ggg",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// Object.keys(user).forEach((key) => {
//   console.log(`${key}: ${user[key]}`);
// });

// // Task 2
// function countProps(obj) {
//   return Object.keys(obj).length;
// }
// let user = {
//   name: "Mark",
//   password: 87654321,
//   adres: "Vuluciya Bogdana Hmelnitcogo",
// };

// console.log(countProps(user));

// // Task 3

// function findBestEmployee(employees) {
//   let maxTasks = 0;
//   let bestEmployee = "";

//   for (let [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = name;
//     }
//   }

//   return bestEmployee;
// }
// let employees = {
//   Dima: 11,
//   Tima: 12,
//   Max: 9,
// };

// console.log(findBestEmployee(employees));

// // Task 4
// function countTotalSalary(employees) {
//   let totalSalary = 0;
//   for (let salary of Object.values(employees)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// const employees = {
//   Tima: 500,
//   Dima: 600,
//   Olga: 300,
// };

// console.log(countTotalSalary(employees));

// // Task 5
// function getAllPropValues(arr, prop) {
//   const values = [];
//   for (let obj of arr) {
//     if (prop in obj) {
//       values.push(obj[prop]);
//     }
//   }

//   return values;
// }
// const products = [
//   { name: "Apple", price: 10, quantity: 60 },
//   { name: "Banana", price: 30, quantity: 30 },
//   { name: "Cherry", price: 7, quantity: 275 },
// ];

// console.log(getAllPropValues(products, "price"));
// console.log(getAllPropValues(products, "quantity"));

// // Task 6
// function calculateTotalPrice(allProducts, productName) {
//   let totalPrice = 0;
//   for (let product of allProducts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   return totalPrice;
// }
// const products = [
//   { name: "Apple", price: 10, quantity: 60 },
//   { name: "Banana", price: 30, quantity: 30 },
//   { name: "Cherry", price: 7, quantity: 275 },
// ];

// console.log(calculateTotalPrice(products, "Apple"));
// console.log(calculateTotalPrice(products, "Banana"));
// console.log(calculateTotalPrice(products, "Cherry"));
