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

    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = Tweet = mongoose.model('Review', ReviewSchema);