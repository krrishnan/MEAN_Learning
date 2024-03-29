var locationListObjectDB = {
    name: "Burger Queen",
    rating: "2",
    distance: "200m",
    address: "127 High street, Reading, RG6 1PS",
    facilities: ["Food", "Premium wifi"],
    openingHours: [
        { days: "Monday - Friday", timing: "7:00am - 7:00pm", closed:false},
        { days: "Saturday", timing: "8:00am - 5:00pm", closed:false},
        { days: "Sunday", timing: "closed", closed:true}
    ],
    reviews: [
        {rating: "5", reviewAuthor: "Simon Holmes", reviewTimestamp: "16 July 2013", review: "What a great place. I can't say enough good things about "},
        {rating: "3", reviewAuthor: "Charlie Chaplin", reviewTimestamp: "16 June 2013", review: "It was okay. Coffee wasn't great, but the wifi was fast."}
    ]
};

var locationListObject = { 
    title: 'loc8r - find a place to work with wifi',
    pageHeader: {
        title: 'loc8r',
        strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places" +
        " work when out and about. Perhaps with coffee, cake or a pint?" +
        " Let Loc8r help you find the place you're looking for.",
    locations: [
        {
            name: "StarCups",
            rating: "3",
            distance: "100m",
            address: "125 High street, Reading, RG6 1PS",
            facilities: ["Hot drinks", "Food", "Premium wifi"]
        },
        {
            name: "Cafe hero",
            rating: "4",
            distance: "150m",
            address: "126 High street, Reading, RG6 1PS",
            facilities: ["Hot drinks", "Food", "Premium wifi"]
        },
        {
            name: "Burger Queen",
            rating: "2",
            distance: "200m",
            address: "127 High street, Reading, RG6 1PS",
            facilities: ["Food", "Premium wifi"]
        }
    ]
};
var locationInfoObject = {
    title: "Location info",
    name: "StarCups",
    rating: "3",
    coords: {lat: 51.455041, lng: -0.9690884},
    distance: "100m",
    address: "125 High street, Reading, RG6 1PS",
    facilities: ["Hot drinks", "Food", "Premium wifi"],
    openingHours: [
        { days: "Monday - Friday", timing: "7:00am - 7:00pm", closed:false},
        { days: "Saturday", timing: "8:00am - 5:00pm", closed:false},
        { days: "Sunday", timing: "closed", closed:true}
    ],
    reviews: [
        {rating: "5", reviewAuthor: "Simon Holmes", reviewTimestamp: "16 July 2013", review: "What a great place. I can't say enough good things about "},
        {rating: "3", reviewAuthor: "Charlie Chaplin", reviewTimestamp: "16 June 2013", review: "It was okay. Coffee wasn't great, but the wifi was fast."}
    ],
    sidebarLead: "Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
    sidebarContent: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
};
var addReviewObject = { title: "Add review" };

var locationsList = function(req, res, next) {res.render('location-list', locationListObject);}
var locationInfo = function(req, res, next) {res.render('location-info', locationInfoObject);}
var addReview = function(req, res, next) {res.render('location-review-form', addReviewObject);}
  
module.exports.locationsList = locationsList;
module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;