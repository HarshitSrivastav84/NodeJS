const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {
    pageTitle: 'Add your home',
    editing: false,
  });
};


exports.postAddHome = (req, res, next) => {

  const { houseName, price, location, rating, photoURL } = req.body;

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
  res.redirect('/host/host-home-List');
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render('host/host-home-List', {
      registeredHomes: registeredHomes,
      pageTitle: 'Host homes list',
      currentPage: "host-homes",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/host/host-home-List");
    }
    console.log(homeId, editing, home);
    res.render('host/edit-home', {
      pageTitle: 'Edit your home',
      currentPage: "host-homes",
      editing: editing,
      // Passing to view
      home: home,
    });
  });
};

exports.postEditHome = (req, res, next) => {

  const { id, houseName, price, location, rating, photoURL } = req.body;

  const home = new Home(houseName, price, location, rating, photoURL);
  home.id = id;
  home.save();

  res.redirect('/host/host-home-List');
};

// exports.getAddHome = getAddHome;
// Only used in this file
// exports.registeredHomes = registeredHomes;