const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoffeeScoreSchema = new Schema({
  user: {
    type: Schema.Type.ObjectId,
    ref: 'users'
  },
  shop: {
    type: String,
    required: true
  },
  coffee: {
    type: Schema.Type.ObjectId,
    ref: 'coffees'
  },
  aroma: {
    type: Number
  },
  acidity: {
    type: Number
  },
  body: {
    type: Number
  },
  flavor: {
    type: Number
  },
  aftertaste: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = CoffeeScore = mongoose.model("CoffeeScore", CoffeeScoreSchema);