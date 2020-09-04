import express, { Response, Request } from "express";
import Portfolio from "../models/Portfolio";
import { body } from "express-validator";
import { validateRequest } from "@lpquizzy/common";

const router = express.Router();

router.post(
  "/api/strategy",
  [
    body("portfolio").notEmpty().withMessage("You must provide a portfolio"),
    body("stockData").notEmpty().withMessage("You must provide Stock Data"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { portfolio, stockData } = req.body;

    const newPortfolio = Portfolio.build({ portfolio, stockData });
    await newPortfolio.save();
    res.status(201).send(newPortfolio);
  }
);

export { router as newStrategyRouter };
