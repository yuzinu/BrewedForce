const mongoose = require('mongoose');
const { Schema } = mongoose;

const CoffeeSchema = new Schema({
    source: {
      type: Schema.Types.ObjectId,
      refs: 'users',
      required: true
    },
    roaster: {
      type: String,
      // refs: 'roasters',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
}, {
    timestamps: true
});

module.exports = Coffee = mongoose.model("Coffee", CoffeeSchema);