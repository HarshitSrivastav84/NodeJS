// External module
const express = require('express');
const hostRouter = express.Router();

// Local module
const homesController = require('../controllers/homes');

// Before controller
// hostRouter.get("/host/add-home", (req, res, next) => {
//   res.render('addHome', {pageTitle: 'Add your home'});
// });

// After controller
hostRouter.get("/host/add-home", homesController.getAddHome);

// Moved to controller
// const registeredHomes = [];

hostRouter.post("/host/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;