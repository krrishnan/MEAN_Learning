var locationsList = function(req, res, next) {
    res.render('location-list', { title: "Home" });
}

var locationInfo = function(req, res, next) {
    res.render('location-info', { title: "Location info" });
}

var addReview = function(req, res, next) {
    res.render('location-review-form', { title: "Add review" });
}
  
module.exports.locationsList = locationsList;
module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;