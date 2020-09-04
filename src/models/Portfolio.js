"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var portfolioSchema = new mongoose_1.default.Schema({
    portfolio: Object,
    stockData: Object,
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
portfolioSchema.statics.build = function (portfolio) {
    return new Portfolio(portfolio);
};
var Portfolio = mongoose_1.default.model("Portfolio", portfolioSchema);
exports.default = Portfolio;
