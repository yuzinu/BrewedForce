const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    shop: {
        type: String,
        ref: 'shops'
    },

    coffee: {
        type: Schema.Types.ObjectId,
        ref: 'coffees'
    },

    coffee_score: {
        type: Schema.Types.ObjectId,
        ref: 'coffee_scores'
    },
  
    rating: {
        type: Number,
        required: true
    },

    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = Review = mongoose.model('Review', ReviewSchema);