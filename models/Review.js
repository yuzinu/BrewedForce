const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    shop: {
        type: Schema.Types.ObjectId,
        ref: 'shops'
    },

    coffee: {
        type: Schema.Types.ObjectId,
        ref: 'coffees'
    },

    rating: {
      type: Number,
      required: true
    },
  
    coffee_score: {
        type: Schema.Types.ObjectId,
        ref: 'coffee_scores'
    },

    text: {
        type: String,
        required: true
    },

    photo: {
        type: Schema.Types.ObjectId,
        ref: 'photos'
    },

    timestamps: true
});

module.exports = Tweet = mongoose.model('Review', ReviewSchema);