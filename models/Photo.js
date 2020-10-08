const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// library for handling autoincrement in mongoose
// https://github.com/ramiel/mongoose-sequence
const AutoIncrement = require("mongoose-sequence")(mongoose);

let PhotoSchema = new Schema(
  {
    user: { 
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    coffee: { 
      type: Schema.Types.ObjectId,
      ref: 'coffees'
    },
    review: { 
      type: Schema.Types.ObjectId,
      ref: 'reviews'
    },
    photo_id: { 
      type: Number,
      default: 0
    },
    description: { 
      type: String
    },
    fileLink: { 
      type: String 
    },
    s3_key: { 
      type: String 
    }
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

PhotoSchema.plugin(AutoIncrement, { inc_field: "photo_id" });

module.exports = mongoose.model("Photo", PhotoSchema);

/* The mongoose-sequence creates a commodity collection named 'counters' which keeps track of the auto-incremental number.
So during development to reset the go_id back to 1, I just have to drop the counter collection by running db.counters.drop()  */