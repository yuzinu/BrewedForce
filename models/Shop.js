const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    coffees: {
        type: [Schema.Types.ObjectId],
        ref: 'coffees'
    },
    review: {
        type: [Schema.Types.ObjectId],
        ref: 'reviews'
    },
    place_id: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
}, {
  timestamps: true
});

module.exports = User = mongoose.model("Shop", ShopSchema);