const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add your home'});
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
  res.render('host/home-added', {pageTitle: 'Home added successfully'});
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render('host/host-home-List', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'Host homes list', 
      currentPage: "host-homes", 
    });
  });
};

// exports.getAddHome = getAddHome;
// Only used in this file
// exports.registeredHomes = registeredHomes;