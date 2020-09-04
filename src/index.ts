import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("strategy-saver service starting up...");
  try {
    // await mongoose.connect("", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

  app.listen(8000, () => {
    console.log("App listening on port 8000");
  });
};

start();
