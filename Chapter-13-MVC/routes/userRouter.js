// Core module
const path = require('path');

// External module
const express = require('express');
const userRouter = express.Router();

// Local module
const rootDir = require('../utils/pathUtil');
const homesController = require('../controllers/homes')

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;