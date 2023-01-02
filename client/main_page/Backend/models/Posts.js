const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostsSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },

    type:{
        type:String,
        default:"Training"
    },
    instructor:{
        type:Number,
        default:"1"
    },
    participants:{
        type:Number,
        default:"1"
    },
    
    organizer:{
        type:String,
        required:true
    },
    
    

    description:{ 
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now
    }

  });
  module.exports=mongoose.model('posts',PostsSchema);