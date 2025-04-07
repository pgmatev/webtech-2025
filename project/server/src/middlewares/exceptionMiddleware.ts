import { Request, Response } from "express";
import { BaseError } from "../exceptions/Exceptions";

export function exceptionMiddleware(error: Error, req: Request, res: Response) {
  console.error("Inside catch", error);

  if (error instanceof BaseError) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
