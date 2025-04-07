import http from "http";
import dotenv from "dotenv";
import express from "express";

import { Request, Response } from "express";
import { UserService } from "./src/services/user-service";

import { userRouter } from "./src/routes/user-router";
import { expenseRouter } from "./src/routes/expense-router";
import { exceptionMiddleware } from "./src/middlewares/exceptionMiddleware";

const app = express();
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/expenses", expenseRouter);

app.get("/", (req, res) => {
  res.send("Hello from root");
});

app.use(exceptionMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// });

// server.listen(3000, "localhost", () => {
//   console.log("Server running at http://localhost:3000/");
// });
