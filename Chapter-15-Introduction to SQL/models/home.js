// Core module
const db = require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  // Home object banake usko save karne ki koshish ki ja rahi hai
  save() {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM homes')
  }

  static findById(homeId, callback) {

  }

};