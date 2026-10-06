const {getDb} = require('../utils/database');


module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
    this.id = id;
  }
  
// Returns promise
  save() {
    const db = getDb();
    return db.collection('mongo-homes').insertOne(this);
  }
  
  static fetchAll() {
  }
  
  static findById(homeId, callback) {

  }
  
  static deleteById(homeId, callback) {

  }

};