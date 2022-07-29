var createError = require('http-errors');
var express = require('express');
var path = require('path');
const Joi = require('joi');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/', (request, response) => {
  response.render('index');
});

app.get('/about', (request, response) => {
  response.render('about');
});

function validateContact(contact) {
  const schema = Joi.object({
    name: Joi.string().min(5).required()
  });
  return schema.validate(contact);
}

app.get('/contact', (request, response) => {
  response.render('contact', { error: '', name: '' });
});

app.post('/contact', (request, response) => {
  const { error } = validateContact(request.body);
  if (error && error.details && error.details.length > 0) {
    response.render('contact', { error: error.details[0].message, name: request.body.name });
  } else {
    response.render('show', { name: request.body.name });
  }
});

app.get('/post', (request, response) => {
  response.render('post');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
