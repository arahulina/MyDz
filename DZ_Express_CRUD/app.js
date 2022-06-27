let express = require('express');
let app = express();

let logger = require('morgan');
app.use(logger('dev'));

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

let fruitsRouter = require('./routes/fruits');
app.use('/api/fruits', fruitsRouter);










module.exports = app;
