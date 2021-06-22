const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema =new Schema({
    _id: {type: String},
    lastname: {type: String},
    firstname: {type: String},
    email: {type: String},
    usertype: {type: String},
    activityid:{type: [String]}
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema,'user_regs');

module.exports = User;