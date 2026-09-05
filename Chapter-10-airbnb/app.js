// External module
const express = require('express');
// const bodyParser = require(body-parser);

// Local modeule
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Your page is not found on airbnb</h1>");
})

// app.use(bodyParser.urlencoded());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});