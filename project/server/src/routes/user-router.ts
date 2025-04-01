import { Router } from "express";
import { UserService } from "../services/user-service";
import { Request, Response } from "express";

export const userRouter = Router();

userRouter.get("/:id/expenses", (req: Request, res: Response) => {
  const userId = req.params.id;
  const userExpenses = UserService.getUserExpenses(userId);
  res.json(userExpenses);
});
