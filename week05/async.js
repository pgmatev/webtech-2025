//Set timeout

// What is the difference?

// function sayHelloDelayed() {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 1000);
// }

// console.log("First");
// sayHelloDelayed();
// console.log("Second");

// for (let i = 0; i < 5; ++i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; ++i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Handling async code: Callbacks, Promises, Async/Await
const fs = require("fs");
const { parse } = require("path");

// function convertCSVtoObject(data) {
//   const lines = data.split(/\r?\n/);
//   lines.splice(0, 1);

//   return lines.map((line) => {
//     const value = line.split(",");
//     return {
//       expenseId: value[0],
//       name: value[1],
//       amount: parseFloat(value[2]),
//     };
//   });
// }

// fs.readFile("./expenses.csv", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }

//   console.log("DATA READ");

//   let result = convertCSVtoObject(data);

//   result = result.map((expense) => {
//     return { ...expense, amount: expense.amount * 2 };
//   });

//   fs.writeFile("./edited-expenses.csv", result.toString(), (err) => {
//     if (err) {
//       console.error(err.message);
//       return;
//     }

//     console.log("DATA WRITTEN");

//     fs.readFile("./edited-expenses.csv", "utf-8", (err, data) => {
//       if (err) {
//         console.error(err.message);
//         return;
//       }

//       console.log("DATA READ AGAIN");
//     });
//   });
// });

function read(file, encoding) {
  return new Promise((reject, resolve) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

function write(file, data) {
  return new Promise((reject, resolve) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// read("./expenses.csv", "utf-8")
//   .then((data) => {
//     console.log("DATA READ");
//     return data;
//   })
//   .then(write("./edited-expenses.csv", data))
//   .then(() => {
//     console.log("DATA WRITTEN");
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// async function manipulateData() {
//   try {
//     const data = await read("./expenses.csv", "utf-8");
//     console.log("DATA READ");

//     await write("./edited-expenses.csv", data);
//     console.log("DATA WRITTEN");
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// manipulateData();

// console.log("other work");

async function fetchSpaceXData() {
  const response = await fetch("https://api.spacexdata.com/v5/launches", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedResponse = await response.json(); // .json is async
  const successfulLaunchesCount = parsedResponse.reduce(
    (count, launch) => count + (!launch.success ? 1 : 0),
    0
  );
  console.log(successfulLaunchesCount);
}

fetchSpaceXData();
