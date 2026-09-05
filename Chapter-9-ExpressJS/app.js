// Core module
// const http = require('http');

// External module
const express = require('express');

// Local module
const requestHandler = require('./user');

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Learing ExpressJS");
});

// const server = http.createServer(requestHandler);
// const server = http.createServer(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});