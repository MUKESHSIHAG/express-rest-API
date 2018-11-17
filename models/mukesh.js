const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [number],
        index: "2dsphere"
    }
});

//create mukesh schema and models
const MukeshSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Mukesh = mongoose.model("Mukesh", MukeshSchema);
module.exports = Mukesh;