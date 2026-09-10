// Core module
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

// Fake database
// let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  // Home object banake usko save karne ki koshish ki ja rahi hai
  save() {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
      console.log("File writing concluded", error);
    });
    });
  }

// Called by directly class name
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data) => {
      // console.log("File read:", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
    // return registeredHomes;
  }

};