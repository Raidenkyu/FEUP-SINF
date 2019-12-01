const createError = require('http-errors');
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 9000;

const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use sessions for tracking logins
app.use(session({
  secret: "sniff sniff",
  resave: true,
  saveUninitialized: false
}));

mongoose.connect('mongodb://mongo:27017/snif',
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/api/login', loginRouter);
app.use('/api/login', logoutRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});

module.exports = app;
