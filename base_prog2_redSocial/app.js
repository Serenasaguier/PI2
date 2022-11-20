var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Importar session  */
const session = require('express-session');

/* importar los modelos de la DB */
const db = require('./database/models');

// importe db primera parte
var userRouter = require('./routes/user');
var indexRouter = require('./routes/index');
const postRouter = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//Crear middleware de session AQUI
app.use(session({secret: "petsdb",
                resave:false,
                saveUninitialized: true }));


/*  middleware de locals, para el header */
app.use(function(req, res, next) {

  if (req.session.user != undefined) {
      res.locals.user = req.session.user;
  }

  next();
});

/* middleware de cookies  */
app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
      let idUsuarioEnCookie = req.cookies.userId;

      db.User.findByPk(idUsuarioEnCookie)
      .then((user) => {

        req.session.user = user;
        res.locals.user  = user;

        return next();
        
      }).catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }
});

app.use('/user', userRouter);
app.use('/', indexRouter);
app.use('/posteos', postRouter);

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
