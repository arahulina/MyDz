// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String },
    size: Number,
    color: String,
    price: Number,
    img: String
});

module.exports = mongoose.model("products", productSchema);