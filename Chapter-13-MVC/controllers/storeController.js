const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/home-List', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'airbnb home', 
      currentPage: "Home", 
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', { 
    pageTitle: 'My bookings', 
    currentPage: "bookings", 
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/favourite-List', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'Favourite list', 
      currentPage: "favourite-List", 
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/index', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'Index page', 
      currentPage: "index", 
    });
  });
};

// exports.getAddHome = getAddHome;
// Only used in this file
// exports.registeredHomes = registeredHomes;