var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var preciosRouter = require('./routes/precios');
var promocionRouter = require('./routes/promocion');
var loginRouter = require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'klashjdfgqwur',
  resave:false,
  saveUninitialized:true,
}));

app.get('/admin/login',function (req,res) {

  var conocido = Boolean(req.session.nombre);
  
  res.render('admin/login',{
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar',function (req,res) {
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/admin/login');
});

app.get('/salir',function (req,res) {
  req.session.destroy();
  res.redirect('/');
  
});



app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/precio', preciosRouter);
app.use('/promocion', promocionRouter);
app.use('/admin/login', loginRouter);



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
