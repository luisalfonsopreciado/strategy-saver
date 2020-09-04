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
