
require('dotenv').config();

let express = require('express');
let app = express();

let logger = require('morgan');
app.use(logger('dev'));

let cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let cookieParser = require('cookie-parser');
app.use(cookieParser());

let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

let indexRouter = require('./routes/index');
app.use('/', indexRouter);

let usersRouter = require('./routes/users');
app.use('/users', usersRouter);

let productRouter = require('./routes/products');
app.use('/api/products', productRouter);

let contactRouter = require('./routes/contacts');
app.use('/api/contacts', contactRouter);


module.exports = app;
