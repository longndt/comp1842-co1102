var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//set location (path) for router (1)
var demoRouter = require('./routes/demo');

var app = express();

// declare, import & config 'body-parser' library
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded( { extended : true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//set link (url) for router (2)
app.use('/demo', demoRouter)

// return a custom error for 404 - Page Not Found
app.use((req, res) => {
  res.status(404).send("url: " + req.originalUrl + " not found !")
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
