require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require("cors");

const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");


mongoose
  .connect('mongodb://localhost/backend', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'PlantLer';


// Enable authentication using session + passport
app.use(session({
  key: 'userID',
  secret: 'irongenerator',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/backend',
    ttl: 60 * 60 * 24
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    // sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  }
}));

app.use(flash());
require('./passport')(app);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);


const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const userRoutes = require('./routes/user.api');
app.use('/api', userRoutes);

const plantsRoutes = require('./routes/plants.api');
app.use('/api', plantsRoutes);

const index = require('./routes/index');
app.use('/', index);

module.exports = app;
