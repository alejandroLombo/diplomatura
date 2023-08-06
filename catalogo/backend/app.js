var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var conx = require('./models/db');
var session = require('express-session');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var preciosRouter = require('./routes/precios');
var promocionRouter = require('./routes/promocion');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* //consultas
conx.query('SELECT * FROM usuarios').then(function(resultados){
  console.log(resultados);
}) */

app.use(session({
  secret:'klashjdfgqwur',
  cookie: {maxAge:null},
  resave:false,
  saveUninitialized:true,
}));

secured = async(req,res,next) =>{
  try {
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}


/* app.get('/admin/login',function (req,res) {

  var conocido = Boolean(req.session.nombre);
  
  res.render('admin/login',{
    conocido: conocido,
    nombre: req.session.nombre
  });
});
 */




app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/precio', preciosRouter);
app.use('/promocion', promocionRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades',secured, adminRouter);



app.get('/productos',function(req,res){
  res.send('Hola soy la pagina de prueba')
})
app.get('/precios',function(req,res){
  res.send('Hola soy la pagina de precios')
})
app.get('/promocion',function(req,res){
  res.send('Hola soy la pagina de promociones')
})

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
