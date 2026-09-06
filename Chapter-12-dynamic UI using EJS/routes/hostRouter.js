// Core module
const path = require('path');

// External module
const express = require('express');
const hostRouter = express.Router();

// Local module
const rootDir = require('../utils/pathUtil');

hostRouter.get("/host/add-home", (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add your home'});
});

const registeredHomes = [];

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log('Home registration succesfull for:', req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName, 
    price: req.body.price, 
    location: req.body.location, 
    rating: req.body.rating,
    photoURL: req.body.photoURL});
  res.render('homeAdded', {pageTitle: 'Home added successfully'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;