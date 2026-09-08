const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add your home'});
};


exports.postAddHome = (req, res, next) => {

  const {houseName, price, location, rating, photoURL} = req.body;

  const home = new Home(houseName, price, location, rating, photoURL);
  home.save();
  // registeredHomes.push(req.body
  //   {
  //   houseName: req.body.houseName, 
  //   price: req.body.price, 
  //   location: req.body.location, 
  //   rating: req.body.rating,
  //   photoURL: req.body.photoURL
  // }
// );
  res.render('homeAdded', {pageTitle: 'Home added successfully'});
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render('home', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'airbnb home', 
      currentPage: "Home", 
  });
  });
};

// exports.getAddHome = getAddHome;
// Only used in this file
// exports.registeredHomes = registeredHomes;