const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const mongoURL = "mongodb+srv://harshitsrivastav874_db_user:Harshit874@staynest.gn449e2.mongodb.net/?appName=StayNest";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(mongoURL).then(client => {
    _db = client.db('StayNest');
    callback();
}).catch(err => {
  console.log('Error while connecting to MongoDB: ' + err);
});
}

const getDb = () => {
  if (!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;