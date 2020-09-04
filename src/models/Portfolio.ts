import mongoose from "mongoose";

interface PortfolioAttrs {
  portfolio: Object;
  stockData: Object;
}

interface PortfolioModel extends mongoose.Model<PortfolioDoc> {
  build(attrs: PortfolioAttrs): PortfolioDoc;
}

interface PortfolioDoc extends mongoose.Document {
  portfolio: Object;
  stockData: Object;
}

const portfolioSchema = new mongoose.Schema(
  {
    portfolio: Object,
    stockData: Object,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

portfolioSchema.statics.build = (portfolio: PortfolioAttrs) => {
  return new Portfolio(portfolio);
};

const Portfolio = mongoose.model<PortfolioDoc, PortfolioModel>(
  "Portfolio",
  portfolioSchema
);

export default Portfolio;
