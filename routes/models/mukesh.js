const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    }

    //add in geo locationn
});

const Mukesh = mongoose.model("Mukesh", MukeshSchema);

module.exports = Mukesh

