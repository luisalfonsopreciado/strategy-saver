import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("strategy-saver service starting up...");

  if (!process.env.MONGO_URI) {
    throw new Error("Mongo URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

  app.listen(process.env.PORT || 3000, () => {
    console.log("App listening on port", process.env.PORT || 3000);
  });
};

start();
