// Core module
const path = require('path');

// External module
const express = require('express');
const userRouter = express.Router();

// Local module
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));

  // After EJS
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb home'});
});

module.exports = userRouter;