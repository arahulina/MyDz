// Подключить модуль работы с базами данных
const mongoose = require("mongoose");

//const  MONGO_URI  = 'mongodb+srv://F12ReactRouter:80933038185@cluster0.wecny.mongodb.net/?retryWrites=true&w=majority';

// Стандартная система подключения к базе банных
exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};