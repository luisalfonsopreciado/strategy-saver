import express from "express";
import cors from "cors";
import { newStrategyRouter } from "./routes/new-strategy";
import { json } from "body-parser";
import { findStrategyByIdRouter } from "./routes/find-strategy-by-id";
import { NotFoundError } from "./errors";
import { errorHandler } from "./middlewares";

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(cors());

app.use(newStrategyRouter);
app.use(findStrategyByIdRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
