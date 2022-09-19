// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({

    email: {type: String, unique: true},
    password: String,
    created_at: Date,
    verify: Date,

});

module.exports = mongoose.model("users", contactSchema);