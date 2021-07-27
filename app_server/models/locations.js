var mongoose = require('mongoose');

var openingHoursSchemaObject = {
    days: {type:String, required:true}, 
    timing:String,
    closed:Boolean
};
var openingHoursSchema = mongoose.Schema(openingHoursSchemaObject);
//mongoose.model('openingHour', openingHoursSchema, 'openingHours');

var reviewsSchemaObject = {
    rating: {type:Number,default:0, min:0, max:5},
    reviewAuthor: String, 
    reviewTimestamp: {type:Date, default:Date.now}, 
    review: String
}
var reviewsSchema = mongoose.Schema(reviewsSchemaObject);
//mongoose.model('review', reviewsSchema, "reviews");

var locationsSchemaObject = {
    name: {type:String, required:true},
    rating: {type:Number,default:0, min:0, max:5},
    coords: {type:[Number], index: '2dsphere'},
    address: {type:String},
    facilities: [String],
    openingHours: [openingHoursSchema],
    reviews: [reviewsSchema]
};
var locationsSchema = mongoose.Schema(locationsSchemaObject);
mongoose.model('location', locationsSchema, 'locations');