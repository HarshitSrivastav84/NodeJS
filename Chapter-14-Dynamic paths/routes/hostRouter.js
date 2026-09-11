// External module
const express = require('express');
const hostRouter = express.Router();

// Local module
const hostController = require('../controllers/hostController');

// Before controller
// hostRouter.get("/host/add-home", (req, res, next) => {
//   res.render('addHome', {pageTitle: 'Add your home'});
// });

// After controller
hostRouter.get("/host/add-home", hostController.getAddHome);

// Moved to controller
// const registeredHomes = [];

hostRouter.post("/host/add-home", hostController.postAddHome);
hostRouter.get("/host/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;