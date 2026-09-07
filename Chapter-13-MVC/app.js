// Core module
const path = require('path');

// External module
const express = require('express');
// const bodyParser = require(body-parser);

// Local modeule
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(errorController.pageNotFound);

// app.use(bodyParser.urlencoded());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});