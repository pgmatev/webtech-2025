import { Router } from "express";
import { UserService } from "../services/user-service";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { authMiddleware } from "../middlewares/authMiddleware";
import { ForbiddenError } from "../exceptions/Exceptions";
import { JwtService } from "../services/jwt-service";

const jwt = require("jsonwebtoken");

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export const userRouter = Router();

userRouter.get(
  "/:id/expenses",
  authMiddleware,
  (req: Request, res: Response, next: Function) => {
    try {
      const user = req.body.user;
      const userId = req.params.id;

      if (user.id !== userId) {
        throw new ForbiddenError(
          "You are not authorized to access this resource"
        );
      }

      const userExpenses = UserService.getUserExpenses(userId);
      res.json(userExpenses);
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post("/login", (req: Request, res: Response, next) => {
  try {
    const { email, password } = req.body;

    const user = UserService.login(email, password);

    const token = JwtService.generateToken(user.username);

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/register", (req: Request, res: Response, next) => {
  try {
    const { email, password, username } = req.body;

    const newUser = UserService.register(email, password, username);

    const token = JwtService.generateToken(newUser.username);

    res.json({ token });
  } catch (error) {
    next(error);
  }
});
