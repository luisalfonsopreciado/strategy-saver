import express from "express";
import cors from "cors";
import { corsOptions } from "./cors";
import { newStrategyRouter } from "./routes/new-strategy";
import { json } from "body-parser";
import { findStrategyByIdRouter } from "./routes/find-strategy-by-id";
import { NotFoundError } from "./errors";
import { errorHandler } from "./middlewares";

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(cors(corsOptions));

app.use(newStrategyRouter);
app.use(findStrategyByIdRouter);

app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
