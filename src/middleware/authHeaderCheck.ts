import { Request, Response, NextFunction } from "express";
import { messages } from "../utilities/constants";

export const authHeaderCheck = (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers["x-custom-auth"];
  if (header !== "secure-delete") {
    res.status(403).json({ success: false, message: messages.UNAUTHORIZED });
    return;
  }
  next();
};
