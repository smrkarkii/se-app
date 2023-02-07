const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServicesSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    description:{ 
        type:String,
        required:true,
    },

    starting_date:{
        type:Date,
        default:Date.now
    },

    ending_date:{
        type:Date,
        default:Date.now
    }

  });
  module.exports=mongoose.model('services',ServicesSchema);