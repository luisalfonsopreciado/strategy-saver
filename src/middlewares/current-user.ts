import { Request, Response, NextFunction } from "express";

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
