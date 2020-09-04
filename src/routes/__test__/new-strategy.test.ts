import request from "supertest";
import { app } from "../../app";
import Portfolio from "../../models/Portfolio";

const payload = {
  portfolio: {
    key: "value",
  },
  stockData: {
    key: "value",
  },
};

it("Should throw error for invalid request", async () => {
  let res = await request(app)
    .post("/api/strategy")
    .set({ portfolio: { key: "value" } })
    .expect(400);
  expect(res.body.errors[0]).toBeDefined();
});

it("should create a portfolio with stockData", async () => {
  await request(app)
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
});
