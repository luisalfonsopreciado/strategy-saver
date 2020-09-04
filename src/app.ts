import express from "express";
import cors from "cors";
import { newStrategyRouter } from "./routes/new-strategy";
import bodyParser from "body-parser";
import { findStrategyByIdRouter } from "./routes/find-strategy-by-id";
import { errorHandler, NotFoundError } from "@lpquizzy/common";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(newStrategyRouter);
app.use(findStrategyByIdRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
