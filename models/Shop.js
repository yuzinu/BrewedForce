const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopSchema = new Schema({
    coffees: {
        type: [Schema.Types.ObjectId],
        ref: 'coffees'
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'reviews'
    },
    place_id: {
        type: String,
        ref: 'shops',
        required: true
    },
    website: {
        type: String
    },
}, {
  timestamps: true
});

module.exports = User = mongoose.model("Shop", ShopSchema);