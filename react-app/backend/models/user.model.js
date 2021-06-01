const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema =new Schema({
    _id: {type: String},
    lastname: {type: String},
    firstname: {type: String},
    email: {type: String},
    usertype: {type: String},
    activityid: [{type: String}]
})

const User = mongoose.model("User", userSchema);

module.exports = User;