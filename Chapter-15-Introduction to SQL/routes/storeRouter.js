// Core module
// const path = require('path');

// External module
const express = require('express');
const storeRouter = express.Router();

// Local module
// const rootDir = require('../utils/pathUtil');
const storeController = require('../controllers/storeController')

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourite-List", storeController.getFavouriteList);
storeRouter.get("/homes", storeController.getHomes);

storeRouter.get("/homes/:homeId", storeController.getHomesDetails);

// For favourite page
storeRouter.post("/favourite-List", storeController.postAddToFavourite);

module.exports = storeRouter;