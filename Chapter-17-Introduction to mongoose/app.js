// Core module
const path = require('path');

// External module
const express = require('express');
// const bodyParser = require(body-parser);

// Local modeule
const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const errorController = require('./controllers/error');
const {default: mongoose} = require('mongoose');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.use(express.urlencoded());
app.use(storeRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

app.use(errorController.pageNotFound);

// app.use(bodyParser.urlencoded());

const PORT = 3000;

const db_path = "mongodb+srv://harshitsrivastav874_db_user:Harshit874@staynest.gn449e2.mongodb.net/StayNest?appName=StayNest";

mongoose.connect(db_path).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  connsole.log("Error while connecting to MongoDB: " + err);
})