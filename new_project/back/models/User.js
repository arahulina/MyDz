// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({

    email: {type: String, unique: true},
    password: String,

});

module.exports = mongoose.model("contacts", contactSchema);