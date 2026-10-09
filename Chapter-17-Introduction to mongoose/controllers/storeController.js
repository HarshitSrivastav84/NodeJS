const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render('store/home-List', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'Home List', 
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
  Favourite.getFavourites().then(favourites => {
    favourites = favourites.map(fav => fav.houseId);
    Home.fetchAll().then(registeredHomes => {
      console.log('favourites: ', favourites);
      console.log('registeredHomes: ', registeredHomes);
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home._id.toString()));
      res.render('store/favourite-List', { 
        favourites: favouriteHomes, 
        // registeredHomes: registeredHomes,
        pageTitle: 'Favourite list', 
        currentPage: "favourite-List", 
      });
    });
  })
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render('store/index', { 
      registeredHomes: registeredHomes, 
      pageTitle: 'Index page', 
      currentPage: "index", 
    });
  });
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {

    // If home not found
    if(!home){
      console.log("Home not found");
      res.redirect("/homes");
    }
    else{
      res.render('store/home-detail', { 
        // registeredHomes: registeredHomes,
        home: home,
        pageTitle: 'Home detail', 
        currentPage: "Home", 
      });
    }
  })
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav.save().then(result => {
    console.log('Fav added: ', result);
  }).catch(err => {
    console.log('Error while adding favourite: ', err);
  }).finally(() => {
    res.redirect("/favourite-List");
  });
}

// exports.getAddHome = getAddHome;
// Only used in this file
// exports.registeredHomes = registeredHomes;