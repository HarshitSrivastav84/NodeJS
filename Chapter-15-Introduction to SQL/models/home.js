// Core module
const db = require('../utils/database');

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

  // Home object banake usko save karne ki koshish ki ja rahi hai
  save() {
    return db.execute(
      // `INSERT INTO homes (houseName, price, location, rating, photoURL, description) VALUES ('${this.houseName}', ${this.price}, '${this.location}', ${this.rating}, '${this.photoURL}', '${this.description}')`
      'INSERT INTO homes (houseName, price, location, rating, photoURL, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.photoURL, this.description]
    );
  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM homes')
  }
  
  static findById(homeId, callback) {
    return db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
  }
  
  static deleteById(homeId, callback) {
    return db.execute('DELETE FROM homes WHERE id=?', [homeId]);

  }

};