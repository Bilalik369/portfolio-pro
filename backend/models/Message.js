const mongoose = require("mongoose");


const messageSchema = mongoose.Schema({


    name :{ types  : String , required : true , trim :true},
    email : {types : String , required :true , trim : true},
    message: { type: String, required: true , trim : true },


}, {timestamps : true});


module.exports = mongoose.model('Message' ,messageSchema);