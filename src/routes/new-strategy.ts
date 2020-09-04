import express, { Response, Request } from "express";
import Portfolio from "../models/Portfolio";

const router = express.Router();

router.post("/api/strategy", async (req: Request, res: Response) => {
  const { portfolio, stockData } = req.body;

  const newPortfolio = Portfolio.build({ portfolio, stockData });
  await newPortfolio.save();
  res.status(201).send(newPortfolio);
});

export { router as newStrategyRouter };
