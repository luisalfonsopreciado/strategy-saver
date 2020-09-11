import moment from "moment";

export const BUY = "Buy";
export const SELL = "Sell";
export const CALL = "Call";
export const PUT = "Put";
export const CASH = "Cash";

// Create a Date 1 year from now, used as default date on contract
const createDateNYearsFromNow = (n: number) => {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var c = new Date(year + n, month, day);
  return moment(c).format("YYYY-MM-DD");
};

const date = createDateNYearsFromNow(1);

export const defaultStockData = {
  ticker: "Theoretical",
  currentPrice: 100,
  volatility: 30,
  interest: 2,
};

export const defaultPortfoio = {
  amount: 1,
  contractName: "initialPortfolioId",
  date,
  direction: BUY,
  strike: 100,
  type: CALL,
};

export const defaultData = {
  portfolio: defaultPortfoio,
  stockData: defaultStockData,
};
