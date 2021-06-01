const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema =new Schema({
    _id: {type: String},
    activityid: [{type: String}]
})

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;