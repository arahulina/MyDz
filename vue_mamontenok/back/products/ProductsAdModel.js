// Подключение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const productSchema = new mongoose.Schema({
    author_id: {type: mongoose.ObjectId}, // Кто создал // ?? String
    created_at: Date, // Когда создано
    title: String,
    description: String, // Текст объявления
    price: Number, // Цена вопроса
    imgMain: String, // Ссылка на главное изображение
    images: [String], // Набор дополнительных изображений
    isOpen: Boolean, // Актуально ли объявление
    category: String, // Код категории - 0- недвижимость, 1- быт техника, 3- авто ...
    count: Number, // Остаток на складе

    // One To Many
    favorites: [],
    rating: [], // (ad_id)  {level, user_id} - оценки пользователей
    comments: [] // (ad_id)  {message, user_id} - комментарии пользователей
});

module.exports = mongoose.model("products", productSchema);