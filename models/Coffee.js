import mongoose from 'mongoose';
const { Schema } = mongoose;

const CoffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roaster: {
        type: Schema.Types.ObjectID,
        refs: 'roasters',
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = Coffee = mongoose.model("Coffee", CoffeeSchema);