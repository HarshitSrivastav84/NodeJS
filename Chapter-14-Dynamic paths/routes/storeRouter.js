// Core module
// const path = require('path');

// External module
const express = require('express');
const storeRouter = express.Router();

// Local module
// const rootDir = require('../utils/pathUtil');
const homesController = require('../controllers/storeController')

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourite-List", homesController.getFavouriteList);
storeRouter.get("/homes", homesController.getHomes);

storeRouter.get("/homes/:homeId", homesController.getHomesDetails);

module.exports = storeRouter;