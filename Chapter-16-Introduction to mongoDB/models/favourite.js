// Core module
const {getDb} = require('../utils/database');

module.exports = class Favourite {

  constructor(houseId){
    this.houseId = houseId;
  }

  save(){
    const db = getDb();
    return db.collection('favourites').insertOne(this);
  }
  
  static getFavourites() {
    const db = getDb();
    return db.collection('favourites').find().toArray();
  };

  static deleteById(homeId, callback) {
    
  }

}