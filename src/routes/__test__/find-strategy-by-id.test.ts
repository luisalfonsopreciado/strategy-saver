import mongoose from "mongoose";
import Portfolio from "../../models/Portfolio";
import request from "supertest";
import { app } from "../../app";
import { defaultData } from "../../routes/constants";

const payload = {
  portfolio: {
    key: "value",
  },
  stockData: {
    key: "value",
  },
};

it("should create a portfolio with stockData and retrieve it", async () => {
  let res = await request(app)
    .post("/api/strategy")
    .send({
      portfolio: {
        key: "value",
      },
      stockData: {
        key: "value",
      },
    })
    .expect(201);

  const portfolios = await Portfolio.find({});
  expect(portfolios.length).toEqual(1);

  res = await request(app)
    .get("/api/strategy/" + res.body.id)
    .expect(200);
});

it("Should return empty obj for no strategy", async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  let res = await request(app)
    .get("/api/strategy/" + id)
    .expect(200);
  expect(res.body).toEqual(defaultData);
});
