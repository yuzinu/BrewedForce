const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoffeeScoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  coffee: {
    type: Schema.Types.ObjectId,
    ref: 'coffees',
    required: true
  },
  aroma: {
    type: Number,
    required: true
  },
  acidity: {
    type: Number,
    required: true
  },
  body: {
    type: Number,
    required: true
  },
  flavor: {
    type: Number,
    required: true
  },
  aftertaste: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = CoffeeScore = mongoose.model("CoffeeScore", CoffeeScoreSchema);