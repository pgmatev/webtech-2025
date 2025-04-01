import { Request, Response } from "express";

export function expensePostMiddleware(
  req: Request,
  res: Response,
  next: Function
): void {
  const { name, amount } = req.body;

  if (!name || !amount) {
    res.status(400).json({ message: "Name and amount are required" });
    return;
  }

  if (typeof amount !== "number") {
    res.status(400).json({ message: "Amount must be a number" });
    return;
  }

  next();
}
