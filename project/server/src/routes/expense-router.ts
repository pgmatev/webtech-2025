import { Router } from "express";
import { UserService } from "../services/user-service";
import { Request, Response } from "express";
import { expensePostMiddleware } from "../middlewares/expensePost-middleware";

export const expenseRouter = Router();

expenseRouter.get("/expenses", (req, res) => {
  const userId = req.query.userId as string;

  // SHOULD BE IN A SERVICE
  // if (userId) {
  //   const userExpenses = expenses.filter(
  //     (expense) => expense.userId === userId
  //   );

  //   res.json(userExpenses);
  //   return;
  // }

  // res.json(expenses);
});

expenseRouter.post("/expenses", expensePostMiddleware, (req, res) => {
  const { name, amount, userId } = req.body;

  const newExpense = UserService.addUserExpense(userId, name, amount);

  res.status(201).json(newExpense);
});
