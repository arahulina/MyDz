// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({

    email: {type: String, unique: true},
    key: {type: String, unique: true},
    sendToUser
});

module.exports = mongoose.model("EmailConfirmations", contactSchema);