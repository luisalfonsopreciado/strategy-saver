import express, { Response, Request } from "express";
import Portfolio from "../models/Portfolio";

const router = express.Router();

router.get("/api/strategy/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const portfolio = await Portfolio.findById(id);
  res.send(portfolio);
});

export { router as findStrategyByIdRouter };
