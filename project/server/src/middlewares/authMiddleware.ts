import { Request, Response } from "express";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../exceptions/Exceptions";
import { UserService } from "../services/user-service";
import { JwtService } from "../services/jwt-service";
const jwt = require("jsonwebtoken");

export function authMiddleware(req: Request, res: Response, next: Function) {
  try {
    console.log("Inside authMiddleware");
    console.log(req.headers);
    const authorizationHeaderValue = req.headers["authorization"];
    const tokenData = authorizationHeaderValue?.split(" ");

    if (!tokenData || tokenData[0] != "Bearer") {
      throw new BadRequestError("Invalid token format");
    }

    const token = tokenData[1];

    const payload = JwtService.verifyToken(token);

    const user = UserService.getUserByUsername(payload.username);

    req.body.user = user;

    next();
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw new UnauthorizedError("Not authorized to access this resource");
    }
  }
}
