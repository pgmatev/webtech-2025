//Set timeout

// What is the difference?

for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// for (var i = 0; i < 5; ++i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Handling async code: Callbacks, Promises, Async/Await
const fs = require("fs");
