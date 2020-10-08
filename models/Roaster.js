const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoasterSchema = new Schema({
    coffees: {
      type: [Schema.Types.ObjectId],
    },
    rating: {
      type: Number,
      required: true
    },
    website: {
      type: String
    },
}, {
    timestamps: true
});

module.exports = Review = mongoose.model('Roaster', RoasterSchema);