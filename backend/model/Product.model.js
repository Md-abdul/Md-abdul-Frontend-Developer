const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema({
    img: String,
    title: String,
    symbol: String,
    decimal: Number,
    Marketcap: String,
    Chain: String
});

const TokenModel = mongoose.model("api", TokenSchema);

module.exports = TokenModel;
