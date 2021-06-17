const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adviserSchema = new Schema({
    _id: {type: mongoose.Types.ObjectId},
    advname: {type: String},
    resourceid: [{type: String}]
    
});

const Adviser = mongoose.model('Adviser', adviserSchema);

module.exports = Adviser;