const {ObjectId} = require('mongodb');
const {getDb} = require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
    if(_id){
      this._id = _id;
    }
  }
  
// Returns promise
  save() {
    const db = getDb();
    if(this._id){
      return db.collection('mongo-homes').updateOne({_id: new ObjectId(String(this._id))}, {$set: {houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoURL: this.photoURL,
        description: this.description,}});
    }
    else{
      return db.collection('mongo-homes').insertOne(this);
    }
  }
  
  static fetchAll() {
    const db = getDb();
    return db.collection('mongo-homes').find().toArray();
  }
  
  static findById(homeId) {
    const db = getDb();
    return db.collection('mongo-homes')
    .find({_id: new ObjectId(String(homeId))})
    .next();
  }
  
  static deleteById(homeId) {
    const db = getDb();
    return db.collection('favourites')
    .deleteOne({_id: new ObjectId(String(homeId))});
  }

};