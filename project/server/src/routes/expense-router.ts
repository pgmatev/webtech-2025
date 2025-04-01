import { Router } from "express";
import { UserService } from "../services/user-service";
import { Request, Response } from "express";
import { expensePostMiddleware } from "../middlewares/expensePost-middleware";
import { ExpenseService } from "../services/expense-service";

export const expenseRouter = Router();

expenseRouter.get("/", (req, res) => {
  const userId = req.query.userId as string;

  if (userId) {
    const userExpenses = ExpenseService.getExpenseByUserId(userId);

    res.json(userExpenses);
    return;
  }

  const allExpenses = ExpenseService.getAllExpenses();
  res.json(allExpenses);
});

expenseRouter.post("/", expensePostMiddleware, (req, res) => {
  const { name, amount, userId } = req.body;

  const newExpense = ExpenseService.addExpense(userId, name, amount);

  res.status(201).json(newExpense);
});
