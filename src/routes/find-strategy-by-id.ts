import express, { Response, Request } from "express";
import Portfolio from "../models/Portfolio";
import mongoose from "mongoose";

const router = express.Router();

const isValidId = (quizId: string) => {
  if (quizId.length !== 24) return false;
  return new mongoose.Types.ObjectId(quizId).toHexString() === quizId;
};

router.get("/api/strategy/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!isValidId(id)) {
    return res.send({});
  }

  const portfolio = await Portfolio.findById(id);

  if(!portfolio){
    return res.send({})
  }

  res.send(portfolio);
});

export { router as findStrategyByIdRouter };
