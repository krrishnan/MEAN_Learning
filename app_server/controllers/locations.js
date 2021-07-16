var locationsList = function(req, res, next) {
    res.render('index', { title: "Home" });
}

var locationInfo = function(req, res, next) {
    res.render('index', { title: "Location info" });
}

var addReview = function(req, res, next) {
    res.render('index', { title: "Add review" });
}
  
module.exports.locationsList = locationsList;
module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;